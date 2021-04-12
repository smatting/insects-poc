# set base image (host OS)
FROM python:3.8

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY dev_requirements.txt .

RUN pip install -r dev_requirements.txt

COPY start_jupyter.sh .

CMD ["./start_jupyter.sh"]
