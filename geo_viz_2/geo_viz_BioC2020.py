from pyecharts import options as opts
from pyecharts.charts import Map
import pandas as pd

data = pd.read_csv("data\BioC2020\BioC2020_participants.csv", index_col=False)
data["country"] = data["country"].fillna("Unknown")
# data.dropna(
#     axis=0,
#     how='any',
#     thresh=None,
#     subset=None,
#     inplace=True
# )

country_count_dict = {}

for x in range(len(data.index)):
    if data["country"][x] in country_count_dict.keys():
        country_count_dict[data["country"][x]] += 1
    # elif data["country"][x] == None:
    #     new_pair = {"Unknown": 1}
    else:
        # if data["country"][x].pd.notna():
        new_pair = {data["country"][x]: 1}
        country_count_dict.update(new_pair)

# print(country_count_dict)

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
            title_opts=opts.TitleOpts(title="BioC2020 Geographics"),
            visualmap_opts=opts.VisualMapOpts(max_=100),
        )
        .render("data\BioC2020\BioC2020.html")
    )
