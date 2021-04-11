{ lib, buildPythonPackage, flask, ipython, ipdb }:

buildPythonPackage {
  pname = "srv";
  version = "0.42";

  src = lib.sourceByRegex ./. [
    "^.*\\.nix$"
    ".*"
    "^result"
    "^.*\\.md$"
    "LICENSE"
    ];

  checkInputs = [ ];
  propagatedBuildInputs = [
    flask
  ];
  buildInputs = [
    ipython
    ipdb
  ];
}
