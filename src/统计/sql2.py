# To add a new cell, type ''
# To add a new markdown cell, type ' [markdown]'

# -*- coding: utf-8 -*-

# 导入必要模块
import pandas as pd
from sqlalchemy import create_engine

# 初始化数据库连接，使用pymysql模块
dev_engine = create_engine('mysql+pymysql://dev:123456@cn-sq-yd.sakurafrp.com:48444/beidou_dev')
cal_engine = create_engine('mysql+pymysql://dev:123456@cn-sq-yd.sakurafrp.com:48444/beidou_cal')

sql_dev = "select DATE_FORMAT(`GNSS_time`,'%%Y-%%m-%%d') as `time` ,COUNT(distinct `device_num`) " \
          "from `device_position_infomation` group by `time`;"

sql2_dev = "select DATE_FORMAT(`GNSS_time`,'%%Y-%%m-%%d') as `time` ,COUNT(distinct info.`device_num`) ,act.`dist_province` " \
           "from `device_position_infomation` info INNER JOIN `device_position_act` act where info.insert_id = act.insert_id" \
           " group by `time` "

# # read_sql_query的两个参数: sql语句， 数据库连接
df2 = pd.read_sql_query(sql_dev, dev_engine)
df2.to_csv('data_cal_daily.csv', index=False)
df2.to_pickle('data_cal_daily.pkl')

df3 = pd.read_sql_query(sql2_dev, dev_engine)
df3.to_csv('data_cal_daily_place.csv', index=False)
df3.to_pickle('data_cal_daily_place.pkl')
