FROM python:3.8 as base
RUN apt-get update && apt-get install inotify-tools -y
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

FROM base as app
ADD srv ./srv
COPY setup.py .
RUN pip install --no-deps .
ADD models ./models
COPY scripts/start_backend.sh .
EXPOSE $PORT
CMD ["./start_backend.sh"]

FROM base as devapp
COPY scripts/start_devbackend.sh .
CMD ["./start_devbackend.sh"]

FROM base as jupyter
COPY dev_requirements.txt .
RUN pip install -r dev_requirements.txt
COPY scripts/start_jupyter.sh .
CMD ["./start_jupyter.sh"]
