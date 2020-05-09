from flask import Blueprint, request, render_template, session, redirect, url_for
import json
import pandas as pd
import requests

from db import select_path_by_day, select_place_by_day, place_to_lnglat_lists, insert_place_to_lnglat, \
    get_pre_path_place_by_day, insert_pre_path_place_by_day
from src.plt import point_lnglat

map_blu = Blueprint('map', __name__)


@map_blu.route('/map/temp', methods=['GET', 'POST'])
def tempMap():
    if request.method == 'GET':
        return redirect(url_for('mapIndex'))
    else:
        datepicker = request.form.get('datepicker')
        if datepicker is None:
            return redirect(url_for('mapIndex'))
        # print(request.form, datepicker, type(datepicker))
        else:
            # print(request.form, datepicker, type(datepicker))
            return redirect(url_for('map.MyMap', date=datepicker))


@map_blu.route('/map/<date>/')
def MyMap(date):
    # date = '2019-10-28'
    pTl = point_lnglat()
    temp = get_pre_path_place_by_day(date)
    if temp is None:
        dPac = select_path_by_day(date)
        dpc = select_place_by_day(date)
        if len(dPac) == 0 or len(dpc) == 0:
            return redirect(url_for('mapIndex'))

        dpac_result = []
        dpc_result = []

        for i in dPac:
            start_lng, start_lat, OK = pTl.point_to_lnglat(i['start_province'],
                                                           i['start_city'],
                                                           i['start_district'],
                                                           i['start_township'])
            if not OK:
                continue
            end_lng, end_lat, OK = pTl.point_to_lnglat(i['end_province'],
                                                       i['end_city'],
                                                       i['end_district'],
                                                       i['end_township'])
            if not OK:
                continue
            s_place = [start_lng, start_lat]
            e_place = [end_lng, end_lat]
            temp = [s_place, e_place, i['count']]
            dpac_result.append(temp)

        for i in dpc:
            lng, lat, OK = pTl.point_to_lnglat(i['province'], i['city'],
                                               i['district'], i['township'])
            if not OK:
                continue

            place = [lng, lat]
            temp = [place, i['count']]
            dpc_result.append(temp)

        dpac_str = json.dumps(dpac_result)
        dpc_str = json.dumps(dpc_result)
        insert_pre_path_place_by_day(date=date, dpac_result=dpac_str, dpc_result=dpc_str)
    else:
        # print(temp)
        dpac_result, dpc_result = json.loads(temp['dpac_result']), json.loads(temp['dpc_result'])
        # print(dpc_result)
    return render_template("path_route_display.html", date=date, dpac=dpac_result, dpc=dpc_result)
