from pyecharts import options as opts
from pyecharts.charts import Map
import pandas as pd
import geograpy


data = pd.read_csv("twitter\ISMB2018\ISMB2018_1.csv", index_col=False)
data["location"] = data["location"].fillna("Unknown")


country_count_dict = {}

for x in range(len(data.index)):
    if data["location"][x] in country_count_dict.keys():
        country_count_dict[data["location"][x]] += 1
    # elif data["country"][x] == None:
    #     new_pair = {"Unknown": 1}
    else:
        # if data["country"][x].pd.notna():
        places = geograpy.get_place_context(url=data["location"][x])
        print(places)
        new_pair = {data["location"][x]: 1}
        country_count_dict.update(new_pair)

print(country_count_dict)

countrys_names = list(country_count_dict.keys())
countrys_count = list(country_count_dict.values())

# print(countrys_names)
# print(countrys_count)

c = (
        Map()
        .add(
            "participants population",
            [list(z) for z in zip(countrys_names, countrys_count)],
            is_map_symbol_show=False,
            maptype="world",
            label_opts=opts.LabelOpts(is_show=False),
            itemstyle_opts=opts.ItemStyleOpts(color="rgb(49,60,72)")
        )
        .set_series_opts(label_opts=opts.LabelOpts(is_show=False))
        .set_global_opts(
            title_opts=opts.TitleOpts(title="ISMB2020 Twitter Geographics"),
            visualmap_opts=opts.VisualMapOpts(max_=900),
        )
        .render("data\ISMB2020\ISMB2020_twitter.html")
    )
