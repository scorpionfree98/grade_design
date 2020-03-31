# -*- coding: utf-8 -*-

# 导入必要模块
import pandas as pd
from sqlalchemy import create_engine

# 初始化数据库连接，使用pymysql模块
engine = create_engine('mysql+pymysql://dev:123456@211.82.83.126:3306/beidou_dev')

# 查询语句，选出employee表中的所有数据
sql = '''
      select * from device_position_infomation;
      '''

# read_sql_query的两个参数: sql语句， 数据库连接
df = pd.read_sql_query(sql, engine)

# 输出employee表的查询结果
print(df)

# 新建pandas中的DataFrame, 只有id,num两列
# df = pd.DataFrame({'id':[1,2,3,4],'num':[12,34,56,89]})

# # 将新建的DataFrame储存为MySQL中的数据表，不储存index列
# df.to_sql('mydf', engine, index= False)

print('Read from and write to Mysql table successfully!')