#!/usr/bin/env bash

set -euo pipefail

image=$(docker load <$(nix-build -A image) | tail -n 1 | sed -n 's/.*Loaded image: \(.*\)/\1/p')
docker inspect --format='{{index .Id}}' "$image"
