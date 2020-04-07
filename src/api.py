import requests

def transform(address):    
    parameters = {'address':address, 'ak': 'oLi13gfGivgUcjMII7YK3uFOOGA1Gk5L','output':'json'}
    base = "http://api.map.baidu.com/geocoding/v3/"
    try:
        response = requests.get(base, parameters)
        s = requests.session()
        s.keep_alive = False
        print(response.json())
        if response.json()['status'] == 0:
            answer = response.json()['result']['location']
            return answer,True
        else:
            return "",False
        
    except Exception as e:
        print(e)
        return "",False
    

a,b=transform("None")
print(a,b)