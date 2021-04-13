FROM python:3.8

RUN apt-get update && apt-get install inotify-tools -y

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

ADD srv ./srv

COPY setup.py .

RUN pip install --no-deps .

COPY scripts/start_devbackend.sh .

CMD ["./start_devbackend.sh"]
