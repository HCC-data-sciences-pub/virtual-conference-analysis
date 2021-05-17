# AACR2020_1 = {'5/2/2020': 37, '5/1/2020': 93, '4/30/2020': 128, '4/29/2020': 218, '4/28/2020': 1035, '4/27/2020': 1269, '4/26/2020': 57, '4/25/2020': 55, '4/24/2020': 74, '4/23/2020': 44, '4/22/2020': 57, '4/21/2020': 6}
# AACR2020_2 = {'6/28/2020': 24, '6/27/2020': 26, '6/26/2020': 90, '6/25/2020': 130, '6/24/2020': 731, '6/23/2020': 903, '6/22/2020': 1248, '6/21/2020': 62, '6/20/2020': 55, '6/19/2020': 106, '6/18/2020': 114, '6/17/2020': 85, '6/16/2020': 2}
# AACR2019 = {'4/7/2019': 44, '4/6/2019': 91, '4/5/2019': 219, '4/4/2019': 289, '4/3/2019': 1132, '4/2/2019': 2284, '4/1/2019': 2723, '3/31/2019': 2625, '3/30/2019': 1165, '3/29/2019': 771, '3/28/2019': 433, '3/27/2019': 216, '3/26/2019': 203, '3/25/2019': 177, '3/24/2019': 25, '3/23/2019': 1}
# AACR2018 = {'4/22/2018': 69, '4/21/2018': 140, '4/20/2018': 150, '4/19/2018': 211, '4/18/2018': 1272, '4/17/2018': 2470, '4/16/2018': 3178, '4/15/2018': 2902, '4/14/2018': 1622, '4/13/2018': 541, '4/12/2018': 249, '4/11/2018': 160, '4/10/2018': 139, '4/9/2018': 124, '4/8/2018': 5}
# AACR2017 = {'4/9/2017': 25, '4/8/2017': 13, '4/7/2017': 136, '4/6/2017': 189, '4/5/2017': 1133, '4/4/2017': 2360, '4/3/2017': 3462, '4/2/2017': 2663, '4/1/2017': 1593, '3/31/2017': 446, '3/30/2017': 206, '3/29/2017': 181, '3/28/2017': 123, '3/27/2017': 110, '3/26/2017': 15, '3/25/2017': 4}
# AACR2016 = {'4/24/2016': 19, '4/23/2016': 57, '4/22/2016': 110, '4/21/2016': 180, '4/20/2016': 1973, '4/19/2016': 2360, '4/18/2016': 2331, '4/17/2016': 2509, '4/16/2016': 1189, '4/15/2016': 366, '4/14/2016': 173, '4/13/2016': 154, '4/12/2016': 97, '4/11/2016': 93, '4/10/2016': 3}
# AACR2015 = {'4/26/2015': 32, '4/25/2015': 39, '4/24/2015': 75, '4/23/2015': 128, '4/22/2015': 893, '4/21/2015': 2021, '4/20/2015': 2016, '4/19/2015': 2152, '4/18/2015': 1377, '4/17/2015': 355, '4/16/2015': 140, '4/15/2015': 141, '4/14/2015': 89, '4/13/2015': 46, '4/12/2015': 1}

AACR2020_1 = {'Day4': 128, 'Day3': 218, 'Day2': 1035, 'Day1': 1269}
AACR2020_2 = {'Day4': 130, 'Day3': 731, 'Day2': 903, 'Day1': 1248}
AACR2019 = {'Day4': 2723, 'Day3': 2625, 'Day2': 1165, 'Day1': 771}
AACR2018 = {'Day4': 2470, 'Day3': 3178, 'Day2': 2902, 'Day1': 1622}
AACR2017 = {'Day4': 2360, 'Day3': 3462, 'Day2': 2663, 'Day1': 1593}
AACR2016 = {'Day4': 2360, 'Day3': 2331, 'Day2': 2509, 'Day1': 1189}
AACR2015 = {'Day4': 2021, 'Day3': 2016, 'Day2': 2152, 'Day1': 1377}

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
    .add_xaxis(list(AACR2020_1.keys()))
    .add_yaxis("AACR2015", list(AACR2015.values()))
    .add_yaxis("AACR2016", list(AACR2016.values()))
    .add_yaxis("AACR2017", list(AACR2017.values()))
    .add_yaxis("AACR2018", list(AACR2018.values()))
    .add_yaxis("AACR2019", list(AACR2019.values()))
    .add_yaxis("AACR2020_1", list(AACR2020_1.values()))
    .add_yaxis("AACR2020_2", list(AACR2020_2.values()))
    .set_global_opts(title_opts=opts.TitleOpts(title="AACR2015-2020"))
    .render("twitter/AACR20152020.html")
)
