# 2020  July 27 - 31 
# 2019  June 24 - 27 predicted day 5
# 2018  July 25 - 27 predicted day 4,5
# 2017  July 26 - 28 predicted day 4,5
# 2016  June 24 - 26 predicted day 4,5
# 2015  July 20 - 22 predicted day 4,5
# 2014  July 30 - Aug 1 predicted day 4,5

BioC2020 = {'Pre3': 7, 'Pre2': 2, 'Pre1': 5, 'Day1': 184, 'Day2': 178, 'Day3': 108, 'Day4': 90, 'Day5': 73, 'Post1': 10, 'Post2': 4, 'Post3': 8}
BioC2019 = {'Pre3': 7, 'Pre2': 9, 'Pre1': 24, 'Day1': 122, 'Day2': 154, 'Day3': 169, 'Day4': 97, 'Day5': 66.5, 'Post1': 36, 'Post2': 17, 'Post3': 7}
BioC2018 = {'Pre3': 0, 'Pre2': 1, 'Pre1': 22, 'Day1': 49, 'Day2': 140, 'Day3': 185, 'Day4': 124, 'Day5': 63, 'Post1': 2, 'Post2': 9, 'Post3': 15}
BioC2017 = {'Pre3': 0, 'Pre2': 1, 'Pre1': 9, 'Day1': 66, 'Day2': 107, 'Day3': 95, 'Day4': 64, 'Day5': 34, 'Post1': 4, 'Post2': 4, 'Post3': 19}
BioC2016 = {'Pre3': 2, 'Pre2': 5, 'Pre1': 8, 'Day1': 13, 'Day2': 79, 'Day3': 39, 'Day4': 28 , 'Day5': 18 , 'Post1': 8, 'Post2': 3, 'Post3': 0}
BioC2015 = {'Pre3': 5, 'Pre2': 1, 'Pre1': 2, 'Day1': 72, 'Day2': 63, 'Day3': 47, 'Day4': 32, 'Day5': 17 , 'Post1': 2, 'Post2': 1, 'Post3': 0}
BioC2014 = {'Pre3': 0, 'Pre2': 0, 'Pre1': 2, 'Day1': 51, 'Day2': 23, 'Day3': 29, 'Day4': 20, 'Day5': 11, 'Post1': 2, 'Post2': 2, 'Post3': 3}

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
    .add_xaxis(list(BioC2020.keys()))
    .add_yaxis("BioC2014", list(BioC2014.values()),label_opts=opts.LabelOpts(is_show=False),linestyle_opts=opts.LineStyleOpts(opacity=0.5),is_symbol_show=False,color="red")
    .add_yaxis("BioC2015", list(BioC2015.values()),label_opts=opts.LabelOpts(is_show=False),linestyle_opts=opts.LineStyleOpts(opacity=0.5),is_symbol_show=False,color="blue")
    .add_yaxis("BioC2016", list(BioC2016.values()),label_opts=opts.LabelOpts(is_show=False),linestyle_opts=opts.LineStyleOpts(opacity=0.5),is_symbol_show=False,color="green")
    .add_yaxis("BioC2017", list(BioC2017.values()),label_opts=opts.LabelOpts(is_show=False),linestyle_opts=opts.LineStyleOpts(opacity=0.5),is_symbol_show=False,color="gray")
    .add_yaxis("BioC2018", list(BioC2018.values()),linestyle_opts=opts.LineStyleOpts(width=3,),color="purple")
    .add_yaxis("BioC2019", list(BioC2019.values()),linestyle_opts=opts.LineStyleOpts(width=3,),color="pink")
    .add_yaxis("BioC2020", list(BioC2020.values()),linestyle_opts=opts.LineStyleOpts(width=3,),color="black")
    .set_global_opts(title_opts=opts.TitleOpts(title="BioC2014-2020"))
    .render("twitter/BioC20142020.html")
)
