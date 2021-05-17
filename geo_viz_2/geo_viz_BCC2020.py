from pycountry_convert import country_alpha2_to_continent_code, country_name_to_country_alpha2
from geopy.geocoders import Nominatim
import pandas as pd
import numpy as np
import folium
from folium.plugins import MarkerCluster

def get_continent(col):
    try:
        cn_a2_code =  country_name_to_country_alpha2(col)
    except:
        cn_a2_code = 'Unknown'
    try:
        cn_continent = country_alpha2_to_continent_code(cn_a2_code)
    except:
        cn_continent = 'Unknown'
    return (cn_a2_code, cn_continent)


geolocator = Nominatim(user_agent="http")

def geolocate(country):
    try:
        # Geolocate the center of the country
        loc = geolocator.geocode(country)
        # And return latitude and longitude
        return (loc.latitude, loc.longitude)
    except:
        # Return missing value
        return np.nan


data = pd.read_csv("data\BCC2020\BCC_2020_Full_Speaker_Information.csv", index_col=False)
data["country"] = data["country"].fillna("Unknown")



data_2 = pd.DataFrame(columns=["country", "count"])
country_list = []
count_list = []

for x in range(len(data.index)):
    country_name =  data["country"][x]
    if country_name in list(data_2["country"]):
        data_2.loc[data_2["country"] == data["country"][x], "count"] += 1
    else:
        new_row = {"country" : data["country"][x], "count" : 1}
        data_2 = data_2.append(new_row, ignore_index=True)

# print(country_count_dict)
#
# countrys_names = list(country_count_dict.keys())
# countrys_count = list(country_count_dict.values())
#
# print(data_2)

a2_code_list = []
continent_list = []
latitude_list = []
longitude_list = []

for country in data_2["country"]:
    cn_a2_code, cn_continent = get_continent(country)
    latitude, longitude = geolocate(country)
    a2_code_list.append(cn_a2_code)
    continent_list.append(cn_continent)
    latitude_list.append(latitude)
    longitude_list.append(longitude)

data_2["cn_a2_code"] = a2_code_list
data_2["cn_continent"] = continent_list
data_2["latitude"] = latitude_list
data_2["longitude"] = longitude_list

# print(data_2)
#
world_map= folium.Map(tiles="cartodbpositron")
marker_cluster = MarkerCluster().add_to(world_map)
for i in range(len(data_2)):
    lat = data_2.iloc[i]['latitude']
    long = data_2.iloc[i]['longitude']
    radius=5
    popup_text = """Country : {}<br>
    Count : {}<br>"""
    popup_text = popup_text.format(data_2.iloc[i]['country'],
    data_2.iloc[i]['count']
    )
    folium.CircleMarker(location = [lat, long], radius=radius, popup= popup_text, fill =True).add_to(marker_cluster)

world_map.save('index.html')
# # c = (
#         Map()
#         .add(
#             "participants population",
#             [list(z) for z in zip(countrys_names, countrys_count)],
#             is_map_symbol_show=False,
#             maptype="world",
#             label_opts=opts.LabelOpts(is_show=False),
#             itemstyle_opts=opts.ItemStyleOpts(color="rgb(49,60,72)")
#         )
#         .set_series_opts(label_opts=opts.LabelOpts(is_show=False))
#         .set_global_opts(
#             title_opts=opts.TitleOpts(title="BCC 2020 Geographics"),
#             visualmap_opts=opts.VisualMapOpts(max_=100),
#         )
#         .render("data\BCC2020\BCC_2020.html")
#     )
