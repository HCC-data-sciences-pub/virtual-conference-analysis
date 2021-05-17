ASCO2020 = {'Post3': 0, 'Post2': 359, 'Post1': 506, 'Day5': 591, 'Day4': 1156, 'Day3': 3878, 'Day2': 4684, 'Day1': 4453, 'Pre1': 1469, 'Pre2': 604, 'Pre3': 476}
ASCO2019 = {'Post3': 456, 'Post2': 617, 'Post1': 958, 'Day5': 2716, 'Day4': 5831, 'Day3': 5836, 'Day2': 5664, 'Day1': 4388, 'Pre1': 1558, 'Pre2': 815, 'Pre3': 460}
ASCO2018 = {'Post3': 325, 'Post2': 449, 'Post1': 744, 'Day5': 2409, 'Day4': 5857, 'Day3': 5986, 'Day2': 5831, 'Day1': 3592, 'Pre1': 1128, 'Pre2': 587, 'Pre3': 383}
ASCO2017 = {'Post3': 297, 'Post2': 401, 'Post1': 721, 'Day5': 2581, 'Day4': 5799, 'Day3': 5902, 'Day2': 5759, 'Day1': 4145, 'Pre1': 1186, 'Pre2': 628, 'Pre3': 412}
ASCO2016 = {'Post3': 283, 'Post2': 393, 'Post1': 651, 'Day5': 1892, 'Day4': 5483, 'Day3': 5135, 'Day2': 5254, 'Day1': 3003, 'Pre1': 916, 'Pre2': 492, 'Pre3': 396}
ASCO2015 = {'Post3': 316, 'Post2': 377, 'Post1': 661, 'Day5': 1941, 'Day4': 4974, 'Day3': 4718, 'Day2': 5052, 'Day1': 2693, 'Pre1': 827, 'Pre2': 509, 'Pre3': 298}
ASCO2014 = {'Post3': 177, 'Post2': 310, 'Post1': 476, 'Day5': 1569, 'Day4': 3795, 'Day3': 3850, 'Day2': 3674, 'Day1': 2210, 'Pre1': 608, 'Pre2': 314, 'Pre3': 327}
ASCO2013 = {'Post3': 151, 'Post2': 173, 'Post1': 308, 'Day5': 986, 'Day4': 2158, 'Day3': 2123, 'Day2': 1985, 'Day1': 1300, 'Pre1': 429, 'Pre2': 202, 'Pre3': 111}
ASCO2012 = {'Post3': 1018, 'Post2': 1657, 'Post1': 1730, 'Day5': 2199, 'Day4': 3264, 'Day3': 3009, 'Day2': 2698, 'Day1': 2113, 'Pre1': 1715, 'Pre2': 1583, 'Pre3': 1611} #token error
ASCO2011 = {'Post3': 521, 'Post2': 623, 'Post1': 712, 'Day5': 1009, 'Day4': 1614, 'Day3': 1735, 'Day2': 1545, 'Day1': 1236, 'Pre1': 836, 'Pre2': 663, 'Pre3': 597}
ASCO2010 = {'Post3': 91, 'Post2': 136, 'Post1': 192, 'Day5': 385, 'Day4': 896, 'Day3': 1016, 'Day2': 1144, 'Day1': 486, 'Pre1': 218, 'Pre2': 162, 'Pre3': 104} #token error

from pyecharts import options as opts
from pyecharts.globals import ThemeType
from pyecharts.charts import Line, Grid
from pyecharts.commons.utils import JsCode


area_color_js = (
    "new echarts.graphic.LinearGradient(0, 0, 0, 1, "
    "[{offset: 0, color: '#eb64fb'}, {offset: 1, color: '#3fbbff0d'}], false)"
)

line = (
    Line(init_opts=opts.InitOpts(width="2000px",renderer="svg",height='1400px'))
    .add_xaxis(list(ASCO2010.keys()))
    .add_yaxis("ASCO2010", list(ASCO2010.values()),label_opts=opts.LabelOpts(is_show=False),linestyle_opts=opts.LineStyleOpts(opacity=0.5),is_symbol_show=False,color="red")
    .add_yaxis("ASCO2011", list(ASCO2011.values()),label_opts=opts.LabelOpts(is_show=False),linestyle_opts=opts.LineStyleOpts(opacity=0.5),is_symbol_show=False,color="blue")
    .add_yaxis("ASCO2012", list(ASCO2012.values()),linestyle_opts=opts.LineStyleOpts(width=3,),color="black")
    .add_yaxis("ASCO2013", list(ASCO2013.values()),label_opts=opts.LabelOpts(is_show=False),linestyle_opts=opts.LineStyleOpts(opacity=0.5),is_symbol_show=False,color="gray")
    .add_yaxis("ASCO2014", list(ASCO2014.values()),label_opts=opts.LabelOpts(is_show=False),linestyle_opts=opts.LineStyleOpts(opacity=0.5),is_symbol_show=False,color="purple")
    .add_yaxis("ASCO2015", list(ASCO2015.values()),label_opts=opts.LabelOpts(is_show=False),linestyle_opts=opts.LineStyleOpts(opacity=0.5),is_symbol_show=False,color="pink")
    .add_yaxis("ASCO2016", list(ASCO2016.values()),label_opts=opts.LabelOpts(is_show=False),linestyle_opts=opts.LineStyleOpts(opacity=0.5),is_symbol_show=False,color="yellow")
    .add_yaxis("ASCO2017", list(ASCO2017.values()),label_opts=opts.LabelOpts(is_show=False),linestyle_opts=opts.LineStyleOpts(opacity=0.5),is_symbol_show=False,color="cyan")
    .add_yaxis("ASCO2018", list(ASCO2018.values()),label_opts=opts.LabelOpts(is_show=False),linestyle_opts=opts.LineStyleOpts(opacity=0.5),is_symbol_show=False,color="green")
    .add_yaxis("ASCO2019", list(ASCO2019.values()),linestyle_opts=opts.LineStyleOpts(width=3,),color="orange")
    .add_yaxis("ASCO2020", list(ASCO2020.values()),linestyle_opts=opts.LineStyleOpts(width=3,),color="brown")
    .set_global_opts(title_opts=opts.TitleOpts(title="Conference Tweets Trend from 2010 to 2020"))
    .render("twitter/ASCO20102020.html")
)
