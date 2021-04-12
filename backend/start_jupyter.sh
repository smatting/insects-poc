#!/usr/bin/env bash

pip install -e --no-deps .

echo "Start Jupyter"

jupyter notebook --port=8000 --no-browser --ip=0.0.0.0 --allow-root
