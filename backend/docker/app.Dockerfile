FROM python:3.8

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

ADD srv ./srv

COPY setup.py .

RUN pip install --no-deps .

ADD models ./models

COPY start_backend.sh .

EXPOSE $PORT

CMD ["./start_backend.sh"]
