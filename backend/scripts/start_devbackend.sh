#!/usr/bin/env bash

pip install -e --no-deps .

flask run --help

while true; do
  python srv/app.py &
  PID=$!
  inotifywait -r models srv/*.py
  echo "Restart backend."
  kill $PID
done


