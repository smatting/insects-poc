let
    pkgs = import ../pkgs.nix {};
    srv = pkgs.python38Packages.callPackage ./srv.nix {};
    python = pkgs.python38.withPackages (ps: [ps.gunicorn srv]);
    env = pkgs.buildEnv { name = "env"; paths = [python pkgs.busybox]; };
    cmd = pkgs.writeScript "cmd" ''
      export PATH=${env}/bin;
      gunicorn srv.app:app
    '';
in
{
  inherit env cmd;
  image = pkgs.dockerTools.buildImage {
    name = "srv";
    config = {
      Cmd = [ "${env}/bin/sh" "${cmd}"];
    };
  };
}
