from flask import Blueprint, request, render_template, session, redirect, url_for
from db import get_daily_place_active,get_province
import json
data_blu = Blueprint('data', __name__)

@data_blu.route('/province')
def province():
    provinces = get_province()
    for i in provinces:
        if i['province'] == "[]":
            provinces.remove(i)        
        elif i['province'] =="全国": 
            provinces.remove(i)
    return render_template('province.html',provinces = provinces)


@data_blu.route('/data/')
def data():
    if request.method == 'GET':
        province = request.args.get('province')
    else:
        province = request.form.get('province')
    print(province)
    if province is None:
        return redirect(url_for('data.province'))
    # print(request.form, datepicker, type(datepicker))
    else:
        # print(request.form, datepicker, type(datepicker))
        date_result = get_daily_place_active(province)
        # print(date_result)
        # data_temp = []
        # for i in date_result:
        #     data_temp.append([i['province'],i['date'],i['nums']])

        date_str = json.dumps(date_result)
        # print(date_str)
        return date_str
        # return redirect(url_for('map.MyMap', date=datepicker))