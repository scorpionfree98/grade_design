from db import sql_required,connect,get_pre_path_place_by_day


@sql_required
def get_agri_machine_infomation(conn="", cursor=""):
    sql = "select  `device_id`, `product_num`, `factory_num`, `chassis_num`, `production_date`, `engine_num` from `agri_machine_infomation` "         
    cursor.execute(sql)
    answer = cursor.fetchall()
    return answer

if __name__ == "__main__":
    # result_fromsql = get_agri_machine_infomation()
    # # print(result_fromsql)
    # result_toweb = []
    # for i in result_fromsql:        
    #     result_toweb.append([i['device_id'],i['product_num'],i['factory_num'],i['chassis_num'],i['production_date'],i['engine_num']])
    # print(result_toweb)
    temp = get_pre_path_place_by_day('2018-10-28') 
    print(temp is None)
    # print(len(get_pre_path_place_by_day('2018-10-28')) == 0)
    pass
