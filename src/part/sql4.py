import pymysql

class DatabaseAccess():
	#初始化属性
    def __init__(self):
        self.__db_host = "localhost"
        self.__db_port = 3306
        self.__db_user = "root"
        self.__db_password = "123"
        self.__db_database = "school"
	#链接数据库
    def ConnectionOpen(self):
        self.__db = pymysql.connect(
            host=self.__db_host,
            port=self.__db_port,
            user=self.__db_user,
            password=self.__db_password,
            database=self.__db_database,
            charset='utf8'
        )

    def linesinsert(self,names,ages):
        try:
            #连接数据库
            self.ConnectionOpen()
            # 创建游标
            global cursor
            cursor = self.__db.cursor()
            # sql命令
            sql = "insert into student(name,age) values (%s,%s)"
            # 执行sql命令
            cursor.execute(sql, (names, ages))
        except Exception as e:
            print(e)
        finally:
            # 关闭游标
            cursor.close()
            # 提交
            self.__db.commit()
            # 关闭数据库连接
            self.__db.close()



