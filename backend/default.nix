let
    pkgs = import ../pkgs.nix {};

    # python package
    srv = pkgs.python38Packages.callPackage ./srv.nix {};

    # a python interpreter with our app "srv" preinstalled
    python = pkgs.python38.withPackages (ps: [ps.gunicorn srv]);

    # docker image
    env = pkgs.buildEnv { name = "env"; paths = [python pkgs.busybox]; };
    cmd = pkgs.writeScript "cmd" ''
      export PATH=${env}/bin;
      gunicorn srv.app:app
    '';
    image = pkgs.dockerTools.buildImage {
      name = "srv";
      config = {
        Cmd = [ "${env}/bin/sh" "${cmd}"];
        ExposedPorts = {
          "8000/tcp" = {};
        };
      };
    };
in
{
  inherit image srv;
}
