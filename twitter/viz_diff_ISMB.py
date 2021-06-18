ISMB2020 = {'Pre1': 24,'Pre2':16, 'Pre3':33, 'Day1': 262, 'Day2': 221, 'Day3': 258, 'Day4': 198, 'Day5': 111, 'Post1':24, 'Post2':16, 'Post3':0}
ISMB2019 = {'Pre1': 10,'Pre2':14, 'Pre3':10, 'Day1': 45, 'Day2': 96, 'Day3': 89, 'Day4': 65, 'Day5': 48, 'Post1':4, 'Post2':3, 'Post3':0}
ISMB2018 = {'Pre1': 9,'Pre2':5, 'Pre3':23, 'Day1': 188, 'Day2': 555, 'Day3': 625, 'Day4': 602, 'Day5': 266, 'Post1':40, 'Post2':7, 'Post3':5}
ISMB2017 = {'Pre1': 4,'Pre2':13, 'Pre3':29, 'Day1': 94, 'Day2': 89, 'Day3': 182, 'Day4': 114, 'Day5': 75, 'Post1':14, 'Post2':6, 'Post3':0}
ISMB2016 = {'Pre1': 8,'Pre2':7, 'Pre3':62, 'Day1': 305, 'Day2': 284, 'Day3': 574, 'Day4': 474, 'Day5': 455, 'Post1':21, 'Post2':5, 'Post3':5}
ISMB2015 = {'Pre1': 4,'Pre2':9, 'Pre3':64, 'Day1': 223, 'Day2': 248, 'Day3': 236, 'Day4': 117, 'Day5': 77, 'Post1':28, 'Post2':2, 'Post3':0}

from pyecharts import options as opts
from pyecharts.globals import ThemeType
from pyecharts.charts import Line, Grid
from pyecharts.commons.utils import JsCode

background_color_js = (
    "new echarts.graphic.LinearGradient(0, 0, 0, 1, "
    "[{offset: 0, color: '#c86589'}, {offset: 1, color: '#06a7ff'}], false)"
)
area_color_js = (
    "new echarts.graphic.LinearGradient(0, 0, 0, 1, "
    "[{offset: 0, color: '#eb64fb'}, {offset: 1, color: '#3fbbff0d'}], false)"
)

line = (
    Line(init_opts=opts.InitOpts(width="2000px",height='1400px'))
    .add_xaxis(list(ISMB2015.keys()))
    .add_yaxis("AACR2015", list(ISMB2015.values()),label_opts=opts.LabelOpts(is_show=False),linestyle_opts=opts.LineStyleOpts(opacity=0.5),is_symbol_show=False,color="red")
    .add_yaxis("AACR2016", list(ISMB2016.values()),linestyle_opts=opts.LineStyleOpts(width=3,),color="green")
    .add_yaxis("AACR2017", list(ISMB2017.values()),label_opts=opts.LabelOpts(is_show=False),linestyle_opts=opts.LineStyleOpts(opacity=0.5),is_symbol_show=False,color="blue")
    .add_yaxis("AACR2018", list(ISMB2018.values()),linestyle_opts=opts.LineStyleOpts(width=3,),color="yellow")
    .add_yaxis("AACR2019", list(ISMB2019.values()),label_opts=opts.LabelOpts(is_show=False),linestyle_opts=opts.LineStyleOpts(opacity=0.5),is_symbol_show=False,color="purple")
    .add_yaxis("AACR2020", list(ISMB2020.values()),linestyle_opts=opts.LineStyleOpts(width=3,),color="cyan")
    .set_global_opts(title_opts=opts.TitleOpts(title="ISMB2015-2020"))
    .render("twitter/ISMB20152020.html")
)
