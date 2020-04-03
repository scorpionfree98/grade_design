# 导入必要模块
import numpy as np
import pandas as pd
from sqlalchemy import create_engine
import pymysql


class Place:
    def __init__(self, province, city, district, township):
        self.province = province
        self.city = city
        self.district = district
        self.township = township

    def equals(self, Place):
        if self.province != Place.province:
            return False
        if self.city != Place.city:
            return False
        if self.district != Place.district:
            return False
        if self.township != Place.township:
            return False
        return True

    def encodeplace(self):
        return str(self.province) + " " + str(self.city) + " " + str(
            self.district) + " " + str(self.township)

    def print(self):
        print(
            str(self.province) + "-" + str(self.city) + "-" +
            str(self.district) + "-" + str(self.township))


def decodeplace(s):
    '''
    输入参数 s 地址信息
    返回Place变量
    '''
    words = s.split(" ")
    return Place(words[0], words[1], words[2], words[3])


def encodepath(start, end):
    return start.encodeplace() + "-" + end.encodeplace()


def decodepath(s):
    '''
    输入参数s 为来往位置信息
    返回star,end 的Place变量
    '''
    words = s.split("-")
    return decodeplace(words[0]), decodeplace(words[1])


def to_Sql(current_place, path_count, date):

    try:
        # 连接数据库
        db = pymysql.connect(host="211.82.83.126",
                             port=3306,
                             user="dev",
                             password="123456",
                             database="beidou_dev",
                             charset="utf8")
        # 创建游标
        cursor = db.cursor()
        # sql命令
        sql1 = "INSERT INTO `beidou_dev`.`daily_place_count`"\
            "(`province`, `city`, `district`, `township`, `count`, `date`) "\
            "VALUES (%s, %s, %s, %s, %s, %s)"
        sql2 = "INSERT INTO `beidou_dev`.`daily_path_count`"\
            "(`start_province`, `start_city`, `start_district`, `start_township`, `end_province`, "\
            "`end_city`, `end_district`, `end_township`, `date`, `count`) VALUES ( %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"

        # 执行sql命令
        for k, v in current_place.items():
            pt = decodeplace(k)
            cursor.execute(
                sql1,
                (pt.province, pt.city, pt.district, pt.township, v, date))
        for k, v in path_count.items():
            spt, ept = decodepath(k)
            cursor.execute(
                sql2,
                (spt.province, spt.city, spt.district, spt.township,
                 ept.province, ept.city, ept.district, ept.township, date, v))

    except Exception as e:
        print(e)
        cursor.close()
        # 提交
        # 关闭数据库连接
        db.rollback()
        db.close()
    finally:
        # 关闭游标
        cursor.close()
        # 提交
        db.commit()
        # 关闭数据库连接
        db.close()


def get_sql_data():
    engine = create_engine(
        'mysql+pymysql://dev:123456@211.82.83.126:3306/beidou_dev')
    sql = '''
    SELECT a.insert_id, a.device_num, a.GNSS_time , b.dist_province , 
    b.dist_city , b.dist_district, b.dist_township FROM device_position_act b 
    INNER JOIN device_position_infomation a ON a.insert_id = b.insert_id;
    '''

    # read_sql_query的两个参数: sql语句， 数据库连接
    df2 = pd.read_sql_query(sql, engine)

    df2.to_csv('data.csv')
    df2.to_pickle('/root/code/biyesheji/grade_design/data/Data_from_Sql.pkl')
    return df2


def get_single_day(
        df2=pd.read_pickle('/root/code/biyesheji/grade_design/data/Data_from_Sql.pkl')):
    # df2['数据时间戳'] = pd.to_datetime(df2['GNSS_time'],format='%Y/%m/%d')
    # df2['数据时间戳'] = df2['数据时间戳'].dt.floor('d')
    df2['数据时间戳'] = df2['GNSS_time'].apply(lambda x: x.strftime('%Y-%m-%d'))
    grouped = df2.groupby('数据时间戳')
    for date, datas in grouped:
        current_place = {}
        path_count = {}
        grouped_car = datas.groupby('device_num')
        for name, data in grouped_car:
            print(name)
            process_single_car(data, path_count, current_place)
        # for k, v in current_place.items():
        #     print(k, v)
        # for k, v in path_count.items():
        #     print(k, v)
        to_Sql(current_place, path_count, date)


def process_single_car(data, path_count, current_place):
    data = np.array(data)  # np.ndarray()
    data = data.tolist()  # list
    if len(data) >= 1:
        finalplace = Place(data[0][3], data[0][4], data[0][5], data[0][6])
        for i in range(1, len(data)):
            tempplace = Place(data[i][3], data[i][4], data[i][5],
                              data[i][6])
            if not tempplace.equals(finalplace):
                path = encodepath(finalplace, tempplace)
                if path in path_count:
                    path_count[path] += 1
                else:
                    path_count[path] = 1
                finalplace = tempplace

    finalplace = finalplace.encodeplace()
    if finalplace in current_place:
        current_place[finalplace] += 1
    else:
        current_place[finalplace] = 1


if __name__ == "__main__":
    # get_single_day(get_sql_data())
    get_single_day()
