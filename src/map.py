from flask import Blueprint, request, render_template, session, redirect, url_for
import pandas as pd
import requests

from db import select_path_by_day, select_place_by_day, place_to_lnglat_lists, insert_place_to_lnglat
from src.plt import point_lnglat

map_blu = Blueprint('map', __name__)


@map_blu.route('/map/<date>/')
def MyMap(date):
    # date = '2019-10-28'
    pTl = point_lnglat()
    dpac = select_path_by_day(date)
    dpc = select_place_by_day(date)
    # return render_template("path_route_display.html")
    dpac_result = []
    dpc_result = []
    for i in dpac:
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
        temp = []
        s_place = []
        e_place = []
        s_place.append(start_lng)
        s_place.append(start_lat)
        e_place.append(end_lng)
        e_place.append(end_lat)
        temp.append(s_place)
        temp.append(e_place)
        temp.append(i['count'])
        dpac_result.append(temp)
    for i in dpc:
        lng, lat, OK = pTl.point_to_lnglat(i['province'], i['city'],
                                           i['district'], i['township'])
        if not OK:
            continue

        temp = []
        place = []
        place.append(lng)
        place.append(lat)
        temp.append(place)
        temp.append(i['count'])
        dpc_result.append(temp)
    # print(dpc_result)
    return render_template("path_route_display.html", dpac=dpac_result, dpc=dpc_result)
