## 按照天统计的变量   当日车辆的最后落脚点 current_place["城市名"]=int 城市名="省 市 区/县 镇/村"  用空格分隔  
## 按照天统计的变量   各城市之间车辆流动的数据 用字符表示 path_count["起始城市名-终止城市名"] 城市名参考上
class Place:
    def __init__(self,province,city,district,township):
        self.province=province
        self.city=city
        self.district=district
        self.township=township

    def encodeplace(self):
        return self.province+" "+self.city+" "+self.district+" "+self.township
    
    def print(self):
        print (self.province+"-"+self.city+"-"+self.district+"-"+self.township)

def decodeplace(s):
    '''
    输入参数 s 地址信息
    返回Place变量
    '''
    words=s.split(" ")
    return Place(words[0],words[1],words[2],words[3])

def encodepath(start,end):
    return start.encodeplace()+"-"+end.encodeplace()

def decodepath(s):
    '''
    输入参数s 为来往位置信息
    返回star,end 的Place变量
    '''
    words=s.split("-")
    return decodeplace(words[0]),decodeplace(words[1])
# 测试代码
def test():
    test_place="北京  海淀 东升"
    test_path="北京  海淀 东升-安徽 六安 裕安 城南"
    s_province,s_city,s_district,s_township="北京","","海淀","东升"
    e_province,e_city,e_district,e_township="安徽","六安","裕安","城南"

    start_place = Place(s_province,s_city,s_district,s_township)
    end_place = Place(e_province,e_city,e_district,e_township)

    print(start_place.encodeplace())
    print(end_place.encodeplace())

    print(encodepath(start_place,end_place))

    p=decodeplace(test_place)
    p.print()
    s,e=decodepath(test_path)
    s.print()
    e.print()