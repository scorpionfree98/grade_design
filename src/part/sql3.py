

# 导入必要模块
import pandas as pd
from sqlalchemy import create_engine

# 初始化数据库连接，使用pymysql模块
engine = create_engine('mysql+pymysql://dev:123456@211.82.83.126:3306/beidou_dev')
df2 = pd.read_pickle('src/D.pkl')
df2.columns=['insert_id','device_num','GNSS_time','GNSS_time2','dist_province','dist_city','dist_district','dist_township']  
df2 = df2.drop(['GNSS_time2'], axis=1)
print(df2)
