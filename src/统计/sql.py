import pymysql
import logging


# 数据库连接
def connect():
    """
    设置连接数据库的参数和连接数据库的因素
    :return:连接数据库的连接和游标
    """
    config = {
        'host': 'cn-sq-yd.sakurafrp.com',
        'port': 48444,
        'user': 'dev',
        'passwd': '123456',
        'charset': 'utf8',
        'cursorclass': pymysql.cursors.DictCursor  # 将结果作为字典返回游标
    }
    conn = pymysql.connect(**config)
    conn.autocommit(1)
    cursor = conn.cursor()
    # conn.select_db("beidou_dev")
    return conn, cursor


def sql_required(func):
    """
    装饰器，在操作数据库之前对于连接和关闭数据库
    :param func: 函数形式
    :return:装饰器
    """

    def decorate(*args, **kwargs):
        try:
            conn, cursor = None, None
            conn, cursor = connect()
            result = func(*args, **kwargs, conn=conn, cursor=cursor)
        except Exception as e:
            result = None
            logging.error(str(e))
            print(str(e))
        finally:
            if cursor is not None:
                cursor.close()
            if conn is not None:
                conn.close()
            return result

    return decorate


@sql_required
def query_total_car_num(conn="", cursor=""):
    """
    """
    conn.select_db('beidou_dev')
    sql = "select COUNT(distinct `device_num`) from `device_position_infomation` "
    # args = (province, city, district, township)s
    cursor.execute(sql)
    answer = cursor.fetchone()
    print(answer)
    return answer


@sql_required
def query_day_car_num_active(day, conn="", cursor=""):
    """
    """
    conn.select_db('beidou_dev')
    sql = "select COUNT(distinct `device_num`) as `car_num` " \
          "from `daily_car` where `time` = %s;"
    args = (day)
    cursor.execute(sql, args)
    answer = cursor.fetchone()
    # print(answer)
    return answer


@sql_required
def query_day_place_car_num_active(day, place, conn="", cursor=""):
    """
    """
    conn.select_db('beidou_dev')
    sql = "select COUNT(distinct `device_num`) as `car_num` " \
          "from `daily_province_car`  where `time` = %s and `province`= %s;"
    args = (day, place)
    cursor.execute(sql, args)
    answer = cursor.fetchone()
    # print(answer)
    return answer


@sql_required
def query_day(conn="", cursor=""):
    """
    """
    conn.select_db('beidou_dev')
    sql = "select distinct(`time`) " \
          "from `daily_car` " \
 \
    # args = (province, city, district, township)s
    cursor.execute(sql)
    answer = cursor.fetchall()
    # print(answer)
    return answer


@sql_required
def query_province(conn="", cursor=""):
    """
    """
    conn.select_db('beidou_dev')
    sql = "select distinct(`province`) " \
          "from `daily_province_car` " \
 \
    # args = (province, city, district, township)s
    cursor.execute(sql)
    answer = cursor.fetchall()
    # print(answer)
    return answer


# query_total_car_num()
# query_day()

def find_daily_car():
    days = query_day()
    result = []
    for i in days:
        time = i['time']
        carnum = query_day_car_num_active(time)
        result.append([time, carnum['car_num']])
    print(result)
    import pandas as pd
    result = pd.DataFrame(result)
    result.to_csv('data_cal_daily.csv', index=False)
    result.to_pickle('data_cal_daily.pkl')


def find_daily_place_car():
    days = query_day()
    result = []
    for i in days:
        time = i['time']
        carnum = query_day_car_num_active(time)
        result.append([time, carnum['car_num']])


find_daily_car()
