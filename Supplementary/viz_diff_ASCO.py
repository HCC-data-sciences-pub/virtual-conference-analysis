ASCO2020 = {'Pre3': 476, 'Pre2': 604, 'Pre1': 1469, 'Day1': 4453, 'Day2': 4684, 'Day3': 3878, 'Day4': 1156, 'Day5': 591, 'Post1': 506, 'Post2': 359, 'Post3': 0}
ASCO2019 = {'Pre3': 460, 'Pre2': 815, 'Pre1': 1558, 'Day1': 4388, 'Day2': 5664, 'Day3': 5836, 'Day4': 5831, 'Day5': 2716, 'Post1': 958, 'Post2': 617, 'Post3': 456}
ASCO2018 = {'Pre3': 383, 'Pre2': 587, 'Pre1': 1128, 'Day1': 3592, 'Day2': 5831, 'Day3': 5986, 'Day4': 5857, 'Day5': 2409, 'Post1': 744, 'Post2': 449, 'Post3': 325}
ASCO2017 = {'Pre3': 412, 'Pre2': 628, 'Pre1': 1186, 'Day1': 4145, 'Day2': 5759, 'Day3': 5902, 'Day4': 5799, 'Day5': 2581, 'Post1': 721, 'Post2': 401, 'Post3': 297}
ASCO2016 = {'Pre3': 396, 'Pre2': 492, 'Pre1': 916, 'Day1': 3003, 'Day2': 5254, 'Day3': 5135, 'Day4': 5483, 'Day5': 1892, 'Post1': 651, 'Post2': 393, 'Post3': 283}
ASCO2015 = {'Pre3': 298, 'Pre2': 509, 'Pre1': 827, 'Day1': 2693, 'Day2': 5052, 'Day3': 4718, 'Day4': 4974, 'Day5': 1941, 'Post1': 661, 'Post2': 377, 'Post3': 316}
ASCO2014 = {'Pre3': 327, 'Pre2': 314, 'Pre1': 608, 'Day1': 2210, 'Day2': 3674, 'Day3': 3850, 'Day4': 3795, 'Day5': 1569, 'Post1': 476, 'Post2': 310, 'Post3': 177}
ASCO2013 = {'Pre3': 111, 'Pre2': 202, 'Pre1': 429, 'Day1': 1300, 'Day2': 1985, 'Day3': 2123, 'Day4': 2158, 'Day5': 986, 'Post1': 308, 'Post2': 173, 'Post3': 151}
ASCO2012 = {'Pre3': 1611, 'Pre2': 1583, 'Pre1': 1715, 'Day1': 2113, 'Day2': 2698, 'Day3': 3009, 'Day4': 3264, 'Day5': 2199, 'Post1': 1730, 'Post2': 1657, 'Post3': 1018} #token error
ASCO2011 = {'Pre3': 597, 'Pre2': 663, 'Pre1': 836, 'Day1': 1236, 'Day2': 1545, 'Day3': 1735, 'Day4': 1614, 'Day5': 1009, 'Post1': 712, 'Post2': 623, 'Post3': 521}
ASCO2010 = {'Pre3': 104, 'Pre2': 162, 'Pre1': 218, 'Day1': 486, 'Day2': 1144, 'Day3': 1016, 'Day4': 896, 'Day5': 385, 'Post1': 192, 'Post2': 136, 'Post3': 91} #token error

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
    .add_yaxis("ASCO2012", list(ASCO2012.values()),label_opts=opts.LabelOpts(font_size=40),linestyle_opts=opts.LineStyleOpts(width=3,),color="black")
    .add_yaxis("ASCO2013", list(ASCO2013.values()),label_opts=opts.LabelOpts(is_show=False),linestyle_opts=opts.LineStyleOpts(opacity=0.5),is_symbol_show=False,color="gray")
    .add_yaxis("ASCO2014", list(ASCO2014.values()),label_opts=opts.LabelOpts(is_show=False),linestyle_opts=opts.LineStyleOpts(opacity=0.5),is_symbol_show=False,color="purple")
    .add_yaxis("ASCO2015", list(ASCO2015.values()),label_opts=opts.LabelOpts(is_show=False),linestyle_opts=opts.LineStyleOpts(opacity=0.5),is_symbol_show=False,color="pink")
    .add_yaxis("ASCO2016", list(ASCO2016.values()),label_opts=opts.LabelOpts(is_show=False),linestyle_opts=opts.LineStyleOpts(opacity=0.5),is_symbol_show=False,color="yellow")
    .add_yaxis("ASCO2017", list(ASCO2017.values()),label_opts=opts.LabelOpts(is_show=False),linestyle_opts=opts.LineStyleOpts(opacity=0.5),is_symbol_show=False,color="cyan")
    .add_yaxis("ASCO2018", list(ASCO2018.values()),label_opts=opts.LabelOpts(is_show=False),linestyle_opts=opts.LineStyleOpts(opacity=0.5),is_symbol_show=False,color="green")
    .add_yaxis("ASCO2019", list(ASCO2019.values()),label_opts=opts.LabelOpts(font_size=40),linestyle_opts=opts.LineStyleOpts(width=3,),color="orange")
    .add_yaxis("ASCO2020", list(ASCO2020.values()),label_opts=opts.LabelOpts(font_size=40),linestyle_opts=opts.LineStyleOpts(width=3,),color="brown")
    .set_global_opts(legend_opts=opts.LegendOpts(textstyle_opts=opts.TextStyleOpts(font_size=20)),
                         xaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(font_size=40)),yaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(font_size=40)),)
    .render("twitter/ASCO20102020.html")
)
