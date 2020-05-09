from flask import Flask, render_template
from db import get_path_count_daily_list,get_daily_place_active
import pandas as pd
import requests
import os

from src.map import map_blu
from src.data_show import data_blu

app = Flask(__name__)
app.config["SECRET_KEY"] = os.urandom(24)
app.register_blueprint(map_blu)
app.register_blueprint(data_blu)


@app.route('/')
def index():
    result = get_daily_place_active('全国')
    return render_template('index.html',result = result)


@app.route('/test')
def test():
    return render_template('test.html')


@app.route('/temp')
def temp():
    return render_template('temp.html')


@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/register')
def register():
    return render_template('register.html')


@app.route('/mapindex')
def mapIndex():
    result_fromsql = get_path_count_daily_list()
    # print(result)
    result_toweb = []
    for i in result_fromsql:        
        result_toweb.append([i['date'].year,i['date'].month,i['date'].day,i['count(`date`)']])
    return render_template('map_index.html',result=result_toweb)


if __name__ == '__main__':
    app.run(debug=True)

