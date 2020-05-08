import pandas as pd
from sqlalchemy import create_engine

cal_engine = create_engine(
    'mysql+pymysql://dev:123456@cn-sq-yd.sakurafrp.com:48444/beidou_cal')
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
result['date'] = '2019-06-12'
result.to_csv('a.csv')
result.to_sql('data_cal', con=cal_engine, if_exists='append', index=False)
