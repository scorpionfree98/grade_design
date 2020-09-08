import pymysql
import logging


# 数据库连接
def connect():
    """
    设置连接数据库的参数和连接数据库的因素
    :return:连接数据库的连接和游标
    """
    config2 = {
        'host': '47.95.194.176',
        'port': 13316,
        'user': 'beidou',
        'passwd': 'beidou123',
        'charset': 'utf8',
        'cursorclass': pymysql.cursors.DictCursor  # 将结果作为字典返回游标
    }
    config = {
        'host': 'cn-sq-yd.sakurafrp.com',
        'port': 48444,
        'user': 'beidou',
        'passwd': 'beidou123',
        'charset': 'utf8',
        'cursorclass': pymysql.cursors.DictCursor  # 将结果作为字典返回游标
    }
    conn = pymysql.connect(**config)
    conn.autocommit(1)
    cursor = conn.cursor()
    conn.select_db("beidou_dev")
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
def change_place_to_lnglat(province,
                           city,
                           district,
                           township,
                           conn="",
                           cursor=""):
    """
    根据省市区街道查询经纬度
    :param province:
    :param city:
    :param district:
    :param township:
    :return:lng,lat：返回经度纬度
    """
    conn.select_db("beidou_cal")
    sql = "select `lng`, `lat` from `place_lnglat` " \
          " where `province` = %s and `city` = %s and `district` = %s and `township` = %s "
    args = (province, city, district, township)
    cursor.execute(sql, args)
    answer = cursor.fetchone()
    return answer


@sql_required
def insert_place_to_lnglat(province,
                           city,
                           district,
                           township,
                           lng,
                           lat,
                           conn="",
                           cursor=""):
    """
    根据省市区街道查询经纬度
    :param province:
    :param city:
    :param district:
    :param township:
    :return:lng,lat：返回经度纬度
    """
    conn.select_db("beidou_cal")
    sql = "insert into place_lnglat(`province`, `city`, `district`, `township`,`lng`, `lat` )" \
          " values (%s,%s,%s,%s,%s,%s)"
    args = (province, city, district, township, lng, lat)
    cursor.execute(sql, args)


@sql_required
def place_to_lnglat_lists(conn="", cursor=""):
    """
    根据省市区街道查询经纬度
    :param province:
    :param city:
    :param district:
    :param township:
    :return:lng,lat：返回经度纬度
    """
    conn.select_db("beidou_cal")
    sql = "select `province`, `city`, `district`, `township`,`lng`, `lat` from `place_lnglat` "
    cursor.execute(sql)
    answers = cursor.fetchall()
    return answers


@sql_required
def select_path_by_day(date, conn="", cursor=""):
    """
    筛选每天的路径
    :param date:
    :param conn:
    :param cursor:
    :return:起止地点，计数
    """
    conn.select_db("beidou_cal")
    sql = "select `start_province`, `start_city`, `start_district`, `start_township`, `end_province`, " \
          "`end_city`, `end_district`, `end_township`, `count` from `beidou_cal`.`daily_path_count`" \
          " where `date` = %s "
    args = date
    cursor.execute(sql, args)
    answers = cursor.fetchall()
    return answers


@sql_required
def select_place_by_day(date, conn="", cursor=""):
    """
    筛选每天的路径
    :param date:
    :param conn:
    :param cursor:
    :return:地点，计数
    """
    conn.select_db("beidou_cal")
    sql = "select `province`, `city`, `district`, `township`, `count`" \
          " from `beidou_cal`.`daily_place_count`" \
          " where `date` = %s "
    args = date
    cursor.execute(sql, args)
    answers = cursor.fetchall()
    return answers


@sql_required
def get_path_count_daily_list(conn="", cursor=""):
    conn.select_db("beidou_cal")
    sql = "select `date`, count(`date`) from `daily_path_count` group by `date`"
    cursor.execute(sql)
    answer = cursor.fetchall()
    return answer


@sql_required
def get_pre_path_place_by_day(date, conn="", cursor=""):
    conn.select_db("beidou_cal")
    sql = "select  `date`,`dpc_result`,`dpac_result` from `daily_place_result` " \
          " where `date` = %s "
    args = date
    cursor.execute(sql, args)
    answer = cursor.fetchone()
    return answer


@sql_required
def insert_pre_path_place_by_day(date,
                                 dpac_result,
                                 dpc_result,
                                 conn="",
                                 cursor=""):
    conn.select_db("beidou_cal")
    sql = "insert into  `daily_place_result` (`date`,`dpc_result`,`dpac_result` ) " \
          "values (%s,%s,%s) "
    args = (date, dpc_result, dpac_result)
    cursor.execute(sql, args)


@sql_required
def get_daily_place_active(province, conn="", cursor=""):
    conn.select_db('beidou_cal')
    sql = "select  `province`,date_format(`date`, '%%Y-%%m-%%d') as `date`,`device_num` as `nums` from `daily_active_count` " \
          " where `province` = %s "
    args = province
    cursor.execute(sql, args)
    answers = cursor.fetchall()
    return answers


@sql_required
def get_province(conn="", cursor=""):
    conn.select_db('beidou_cal')
    sql = "select  DISTINCT `province` from `daily_active_count` "
    cursor.execute(sql)
    answers = cursor.fetchall()
    return answers


@sql_required
def get_daily_province_place_active(province, conn="", cursor=""):
    conn.select_db('beidou_cal')
    sql = "select  `province`,`date`, `nums` from `daily_province_active_count` " \
          " where `province` = %s "
    args = province
    cursor.execute(sql, args)
    answers = cursor.fetchall()
    return answers


@sql_required
def get_daily_province_in(province, conn="", cursor=""):
    conn.select_db('beidou_cal')
    sql = "select  `province`,`date`, `nums` as `in_nums` from `cross_province_in` " \
          " where `province` = %s "
    args = province
    cursor.execute(sql, args)
    answers = cursor.fetchall()
    return answers


@sql_required
def get_daily_province_out(province, conn="", cursor=""):
    conn.select_db('beidou_cal')
    sql = "select  `province`,`date`, `nums` as `out_nums` from `cross_province_out` " \
          " where `province` = %s "
    args = province
    cursor.execute(sql, args)
    answers = cursor.fetchall()
    return answers


