#!/usr/bin/env python3

from flask import Flask, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route("/")
def live():
    return {"status": "active"}


@app.route("/detect", methods=['POST'])
def detect():
    req = request.get_json()
    print(req)
    return {'scores': [{'name': '0', 'score': 0.2},{'name': '1', 'score': 0.3},{'name': '2', 'score': 0.4}]}


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
