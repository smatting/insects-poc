FROM python:3.8

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

ADD srv ./srv

COPY setup.py .

RUN pip install --no-deps .

COPY start_backend.sh .

CMD ["./start_backend.sh"]
