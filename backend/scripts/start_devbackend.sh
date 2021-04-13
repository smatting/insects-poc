#!/usr/bin/env bash

while true; do
  gunicorn --bind=0.0.0.0:${PORT} --workers=2 srv.app:app &
  PID=$!
  inotifywait -r models srv/*.py
  echo "Restart backend."
  kill $PID
done


