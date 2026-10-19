{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  packages = with pkgs; [
    bun
    chromium
    stdenv.cc.cc.lib
  ];

  shellHook = ''
    export CHROME_PATH="${pkgs.chromium}/bin/chromium"
    export LD_LIBRARY_PATH="${pkgs.lib.makeLibraryPath [ pkgs.stdenv.cc.cc.lib ]}:$LD_LIBRARY_PATH"
  '';
}
