let pkgs = import ../pkgs.nix {}; in

with pkgs;

mkShell {
  buildInputs = [
    nodejs-14_x
  ];
}
