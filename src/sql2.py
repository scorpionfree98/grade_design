# To add a new cell, type ''
# To add a new markdown cell, type ' [markdown]'

# -*- coding: utf-8 -*-

# 导入必要模块
import pandas as pd
from sqlalchemy import create_engine

# 初始化数据库连接，使用pymysql模块
engine = create_engine('mysql+pymysql://dev:123456@211.82.83.126:3306/beidou_dev')


sql = '''
      SELECT a.insert_id, a.device_num, a.GNSS_time , b.dist_province , b.dist_city , b.dist_district,b.dist_township FROM device_position_act b INNER JOIN device_position_infomation a ON a.insert_id = b.insert_id;
      '''

# read_sql_query的两个参数: sql语句， 数据库连接
df2 = pd.read_sql_query(sql, engine)

df2.to_csv('data2.csv',index=False)
df2.to_pickle('D.pkl')

