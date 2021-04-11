`nix-shell` (optionally with `--command ipython`) to enter development env for `srv`

`./buildimage.sh` to build a docker image and

```
docker run -it --rm -p 8000:8000 srv:latest
```
to test it
