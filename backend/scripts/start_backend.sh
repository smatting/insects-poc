#!/usr/bin/env bash

gunicorn --bind=0.0.0.0:${PORT} --workers=2 srv.app:app
