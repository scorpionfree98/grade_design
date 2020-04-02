import pandas as pd
import numpy as np

from Place import Place


def change(r):
    return Place(r['province'], r['city'], r['district'],
                 r['township']).encodeplace()


def changes(r):
    return Place(r['start_province'], r['start_city'], r['start_district'],
                 r['start_township']).encodeplace()


def changee(r):
    return Place(r['end_province'], r['end_city'], r['end_district'],
                 r['end_township']).encodeplace()


dpc = pd.read_csv('data/data_dpc.csv', header=0)
dpac = pd.read_csv('data/data_dpac.csv', header=0)

result = "\""
dpc['place'] = dpc.apply(lambda r: change(r), axis=1)
dpc.drop(['province'], axis=1, inplace=True)
dpc.drop(['city'], axis=1, inplace=True)
del dpc['district']
del dpc['township']
del dpc['dpcid']
del dpc['date']
print(dpac)
# dpc.set_index('place', inplace=True)

# print(list(dpc.index))

dpac['startplace'] = dpac.apply(lambda r: changes(r), axis=1)

dpac['endplace'] = dpac.apply(lambda r: changee(r), axis=1)

del dpac['start_province']
del dpac['start_city']
del dpac['start_district']
del dpac['start_township']
del dpac['end_province']
del dpac['end_city']
del dpac['end_district']
del dpac['end_township']
del dpac['date']
del dpac['dpacid']

dpac = dpac.values.tolist()
dpac_str = '['
for line in dpac:
    dpac_str+="[\""+line[1].replace('[','').replace(']','')+"\","+"\""+line[2].replace('[','').replace(']','')+"\","+str(line[0])+"],\n"
dpac_str = dpac_str.rstrip(',\n')+']'
print(dpac_str)