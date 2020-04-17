from flask import Flask, render_template
import pandas as pd
import requests
import os

from src.map import map_blu

app = Flask(__name__)
app.config["SECRET_KEY"] = os.urandom(24)
app.register_blueprint(map_blu)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/register')
def register():
    return render_template('register.html')


@app.route('/mapindex')
def mapIndex():
    return render_template('map_index.html')


if __name__ == '__main__':
    app.run()
