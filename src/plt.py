from db import select_path_by_day, select_place_by_day, place_to_lnglat_lists, insert_place_to_lnglat
import pandas as pd
from numpy.random import randint
import requests


def transform(address):
    """
    调用百度接口，获取对应地址的经纬度（此处经纬度是百度地图标准的经纬度数据）
    :param address: 需要被转化的地址
    :return: 第一个值是变量 如果成功返回经纬度字典，如果失败返回空字符串
             第二个值是布尔类型，如果成功返回True
    """
    parameters = {
        'address': address,
        'ak': 'oLi13gfGivgUcjMII7YK3uFOOGA1Gk5L',
        'output': 'json'
    }
    base = "http://api.map.baidu.com/geocoding/v3/"
    try:
        response = requests.get(base, parameters)
        s = requests.session()
        s.keep_alive = False
        if response.json()['status'] == 0:
            answer = response.json()['result']['location']
            return answer, True
        else:
            print(response.json())
            return "", False

    except Exception as e:
        print(e)
        return "", False


class point_lnglat:
    """
    用于转化地址为经纬度的类
    """
    def __init__(self):
        self.pTll = pd.DataFrame(place_to_lnglat_lists())
        # print(self.pTll)

    def __addplace(self, province, city, district, township):
        """
        查询失败之后，添加到数据库和pandas，返回经度、纬度、数据是否有效
        :param province:
        :param city:
        :param district:
        :param township:
        :return:
        """
        result, OK = transform(province + city + district + township)
        if (OK):
            lng = float(result['lng'])
            lat = float(result['lat'])
            self.pTll = self.pTll.append(
                {
                    'province': province,
                    'city': city,
                    'district': district,
                    'township': township,
                    'lng': lng,
                    'lat': lat
                },
                ignore_index=True)
            insert_place_to_lnglat(province, city, district, township, 
                                   lng,lat)
            return lng, lat, OK
        else:
            return 0,0,OK

    def point_to_lnglat(self, province, city, district, township):
        """
        返回经度、纬度、数据是否有效(外界调用)
        :param province:
        :param city:
        :param district:
        :param township:
        :return:第一个变量是纬度 第二个变量是经度，第三个是bool类型
        """
        if province == "[]" or province == "":
            return 0, 0, False
        if self.pTll.empty:
            return self.__addplace(province, city, district, township)

        result = self.pTll[(self.pTll.province == province) & (self.pTll.city == city) &
                           (self.pTll.district == district) &
                           (self.pTll.township == township)]
        if result.empty:
            return self.__addplace(province, city, district, township)
        result = result.iloc[0]
        return result['lng'], result['lat'], True

