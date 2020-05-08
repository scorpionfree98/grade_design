import pymysql
import logging
import pandas as pd
from sqlalchemy import create_engine


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
    返回所有车的数量
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
    返回某天活跃车辆数量
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
    返回某天某地活跃车的数量
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
    返回数据库中天的数量类型
    """
    conn.select_db('beidou_dev')
    sql = "select distinct(`time`) " \
          "from `daily_car` " 
    # args = (province, city, district, township)s
    cursor.execute(sql)
    answer = cursor.fetchall()
    # print(answer)
    return answer


@sql_required
def query_province(conn="", cursor=""):
    """
    返回数据库中省份的类型
    """
    conn.select_db('beidou_dev')
    sql = "select distinct(`province`) as `province`" \
          "from `daily_province_car` "
    # args = (province, city, district, township)s
    cursor.execute(sql)
    answer = cursor.fetchall()
    # print(answer)
    return answer

@sql_required
def select_day_car(day,conn="", cursor=""):   
    """
    返回某天的身份 车辆记录
    """ 
    conn.select_db('beidou_dev')
    sql = "select  `device_num`,`province`  from `daily_province_car` where `time` = %s;"
    args = (day)
    cursor.execute(sql, args)
    answer = cursor.fetchall()
    # print(answer)
    return answer



def find_daily_car():
    days = query_day()
    result = []
    for i in days:
        time = i['time']
        carnum = query_day_car_num_active(time)
        result.append([time,carnum['car_num']])
    print(result)
    import pandas as pd
    result = pd.DataFrame(result)
    result.to_csv('data_cal_daily.csv', index=False)
    result.to_pickle('data_cal_daily.pkl')


def find_daily_place_car():
    days = query_day()
    cal_engine = create_engine(
        'mysql+pymysql://dev:123456@cn-sq-yd.sakurafrp.com:48444/beidou_cal')
    for i in days:
        time = i['time']
        df = pd.DataFrame(select_day_car(time))
        df = pd.read_pickle('D:\\Users\\Scorpion\\Desktop\\data_cal_2019-06-12.pkl')
        result = pd.DataFrame(df.groupby(by='province').nunique())
        result = result.drop(['province'], axis=1)
        result['province'] = result.index
        result = result.append(
            {
                'province': '全国',
                'device_num': result['device_num'].sum()
            },
            ignore_index=True)
        result['date'] = time
        # result.to_csv('a.csv')
        result.to_sql('data_cal', con=cal_engine, if_exists='append', index=False)


# find_daily_car()
# print(query_province())
# select_day_car('2019-06-12')
# df = pd.DataFrame(select_day_car('2019-06-12'))

# df.to_csv('data_cal_2019-06-12.csv', index=False)
# df.to_pickle('data_cal_2019-06-12.pkl')

find_daily_place_car()


# cal_engine = create_engine(
#     'mysql+pymysql://dev:123456@cn-sq-yd.sakurafrp.com:48444/beidou_cal')
# df = pd.read_pickle('D:\\Users\\Scorpion\\Desktop\\data_cal_2019-06-12.pkl')
# result = pd.DataFrame(df.groupby(by='province').nunique())
# result = result.drop(['province'], axis=1)
# result['province'] = result.index

# result = result.append(
#     {
#         'province': '全国',
#         'device_num': result['device_num'].sum()
#     },
#     ignore_index=True)
# result['date'] = '2019-06-12'
# result.to_csv('a.csv')
# result.to_sql('data_cal', con=cal_engine, if_exists='append', index=False)
