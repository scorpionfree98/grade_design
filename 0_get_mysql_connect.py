from sqlalchemy import create_engine

engine = create_engine('mysql+pymysql://beidou:beidou123@211.82.83.126:3306/beidou_backup', encoding='utf-8')
