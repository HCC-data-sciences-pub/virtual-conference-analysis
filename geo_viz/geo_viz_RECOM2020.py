from pyecharts import options as opts
from pyecharts.globals import ThemeType
from pyecharts.charts import Map, Bar, Grid, Pie
import pandas as pd
import country_converter as coco

cc = coco.CountryConverter()

data = pd.read_csv("data\RECOM2020\RECOM2020_participants.csv", index_col=False)
data["country"] = data["country"].fillna("Unknown")

country_count_dict = {}

for x in range(len(data.index)):
    if data["country"][x] in country_count_dict.keys():
        country_count_dict[data["country"][x]] += 1
    else:
        new_pair = {data["country"][x]: 1}
        country_count_dict.update(new_pair)

# remove unknown
del country_count_dict["Unknown"]


# print(country_count_dict)

countrys_names = list(country_count_dict.keys())
countrys_count = list(country_count_dict.values())


# print(countrys_names)
print(countrys_count)
print(len(countrys_count))
map_data = [list(z) for z in zip(countrys_names, countrys_count)]
# print(map_data)
sorted_map_data = sorted(map_data, key=lambda x: x[1], reverse=True)
# print(sorted_map_data)
bar_countrys_names = [country[0] for country in sorted_map_data]
bar_countrys_count = [country[1] for country in sorted_map_data]
continent = cc.convert(bar_countrys_names, to='continent')
conti_pie_data = []
for i in range(len(sorted_map_data)):
    conti_pie_data.append([sorted_map_data[i][0], sorted_map_data[i][1],continent[i]])

# print(continent)
conti_count_dict = {}
for i in  range(len(continent)):
    if continent[i] in conti_count_dict.keys():
        conti_count_dict[continent[i]] += 1
    else:
        new_pair = {continent[i]: 1}
        conti_count_dict.update(new_pair)

conti_names = list(conti_count_dict.keys())
# conti_counts = list(conti_count_dict.values())
# pie_data_out = [list(z) for z in zip(conti_names, conti_counts)]
conti_counts = []
conti_pie_data_2 = []
counti_3 =[]

for conti in conti_names:
    temp_list = []
    count = 0
    for contry in conti_pie_data:
        if conti == contry[2]:
            temp_list.append([contry[0], contry[1]])
            count += contry[1]
    conti_counts.append(count)
    conti_pie_data_2.append(temp_list)
    temp_list.append(conti)
    counti_3.append(temp_list)

pie_countrys_names = list(country_count_dict.keys())
pie_countrys_count = list(country_count_dict.values())

print(conti_pie_data_2)
print(counti_3)
pie_data_in = [list(z) for z in zip(pie_countrys_names, pie_countrys_count)]
pie_data_out = [list(z) for z in zip(conti_names, conti_counts)]

c = (
        Map()
        .add(
            series_name="",
            data_pair=map_data,
            is_map_symbol_show=False,
            maptype="world",
            label_opts=opts.LabelOpts(is_show=False),
            itemstyle_opts=opts.ItemStyleOpts(color="rgb(49,60,72)")

        )
        .set_series_opts(label_opts=opts.LabelOpts(is_show=False))
        .set_global_opts(
            title_opts=opts.TitleOpts(title="Conference 2020 Geographics",
            subtitle="",
            pos_left="center",
            pos_top="top"),
            visualmap_opts=opts.VisualMapOpts(is_calculable=True,
            dimension=0,
            pos_left="30",
            pos_top="center",
            range_text=["High", "Low"],
            range_color=['#B3827A', '#424D76', '#ECEC36', '#2CEAA7', '#EC5736', '#FFC09D', '#EC9F36','#ACFFBB', '#D772FF', '#B2FFFF', '#FFFDB9',
               '#8FEC36', '#2CEA37', '#CEFFA8', '#2CCFEA', '#2C8AEA', '#2C48EA'],
            textstyle_opts=opts.TextStyleOpts(color="#000000"),
            min_=0,
            max_=1000,),
        )
    )

bar = (
        Bar()
        .add_xaxis(xaxis_data=bar_countrys_names)
        .add_yaxis(
            series_name="",
            y_axis=bar_countrys_count,
            label_opts=opts.LabelOpts(
                is_show=True, position="right", formatter="{b} : {c}"
            ),
        )
        .reversal_axis()
        .set_global_opts(
            xaxis_opts=opts.AxisOpts(
                max_=200, axislabel_opts=opts.LabelOpts(is_show=False),axistick_opts=opts.AxisTickOpts(is_show=False)
            ),
            yaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(is_show=False),axistick_opts=opts.AxisTickOpts(is_show=False)),
            tooltip_opts=opts.TooltipOpts(is_show=False),
            visualmap_opts=opts.VisualMapOpts(
                is_calculable=True,
                dimension=0,
                pos_left="10",
                pos_top="50",
                range_text=["High", "Low"],
                range_color=["#374DCD", "#35CF4D","#E2E229", "#E85736"],
                textstyle_opts=opts.TextStyleOpts(color="#000000"),
                min_=0,
                max_=200,
            ),
        )
    )

# pie_data = [[x[0], x[1]] for x in conti_pie_data_2]
# pie_data_out = [[x[0], x[1]] for x in conti_pie_data_2]
pie = (
    Pie()
    .add(
        series_name="",
        data_pair=pie_data_in,
        radius=["5%", "15%"],
        center=["80%", "85%"],
        itemstyle_opts=opts.ItemStyleOpts(
            border_width=1, border_color="rgba(0,0,0,0.3)"
        ),
        label_opts=opts.LabelOpts(is_show=False)
    )
    .add(
        series_name="",
        data_pair=pie_data_out,
        radius=["17%", "20%"],
        center=["80%", "85%"],
        itemstyle_opts=opts.ItemStyleOpts(
            border_width=1, border_color="rgba(0,0,0,0.3)"
        ),
        label_opts=opts.LabelOpts(is_show=True)
    )
    .set_global_opts(
        legend_opts=opts.LegendOpts(is_show=False),
    )
)

grid_chart = (
    Grid(init_opts=opts.InitOpts(width="2000px",renderer="svg",height='1400px',page_title="RECOMB 2020 Geographics"))
    .add(
        bar,
        grid_opts=opts.GridOpts(
            pos_left="10", pos_right="35%", pos_top="20%", pos_bottom="5"
        ),
    )
    .add(c, grid_opts=opts.GridOpts())
    .add(pie, grid_opts=opts.GridOpts(pos_left="45%", pos_top="60%"))
    .render("data\RECOM2020\RECOM2020.html")
)
