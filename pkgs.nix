{ sources ? import ./nix/sources.nix }:     # import the sources
with
  { overlay = _: pkgs:
      { niv = (import sources.niv {}).niv;    # use the sources :)
      };
  };
let pkgs = import sources.nixpkgs                  # and use them again!
  { overlays = [ overlay ] ; config = {}; };
in pkgs
