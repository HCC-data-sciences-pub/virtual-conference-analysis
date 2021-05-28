import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter(params) {
            let relVal = params[0].name
            for (var i = 0, l = params.length; i < l; i++) {
                // console.log(params)
                let circle = `<i class="iconfont icon-yuan" style="margin-right:4px;font-size:14px;color:${params[i].color}"></i>`
                params[i].value = Math.abs(params[i].value)
                relVal += '<br/>' + circle + params[i].seriesName + ' : ' + params[i].value + 'ms'
            }
            return relVal
        }
    },
    legend: {
        data: ['2019 American', '2020 American', '2019 Europe', '2020 Europe', '2019 Asia', '2020 Asia', '2019 Oceania', '2020 Oceania', '2019 Africa', '2020 Africa']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#888'
                }
            },
            axisLabel: {
                formatter(value) {
                    return Math.abs(value)
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'category',
            axisTick: { show: false },
            axisLine: {
                lineStyle: {
                    color: '#999'
                }
            }
        }
    ],
    series: [
        {
            name: '2020 American',
            type: 'bar',
            stack: 'United States',
            barMaxWidth: '18',
            color: '#4f66d6',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    formatter(params) {
                        let htmlStr = "United States    " + 1899
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 600
                }
            ]
        },
        {
            name: '2019 American',
            type: 'bar',
            stack: 'United States',
            barMaxWidth: '18',
            color: '#99d64f',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "                                                      "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: -304
                },
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Canada',
            color: '#4f66d6',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#4f66d6',
                    formatter(params) {
                        let htmlStr = "                                  Canada    " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 188
                }
            ]
        }, {
            name: '2019 American',
            type: 'bar',
            stack: 'Canada',
            color: '#99d64f',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: -7
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Brazil',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + " "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Brazil',
            barMaxWidth: '18',
            color: '#4f66d6',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#4f66d6',
                    formatter(params) {
                        let htmlStr = "                         Brazil    " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 136
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Colombia',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + " "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Colombia',
            color: '#4f66d6',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#4f66d6',
                    formatter(params) {
                        let htmlStr = "      Colombia    " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 28
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Chile',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + " "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Chile',
            color: '#4f66d6',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#4f66d6',
                    formatter(params) {
                        let htmlStr = "   Chile    " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 8
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Mexico',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + " "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Mexico',
            color: '#4f66d6',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#4f66d6',
                    formatter(params) {
                        let htmlStr = "   Mexico    " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 7
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Peru',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + " "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Peru',
            color: '#4f66d6',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#4f66d6',
                    formatter(params) {
                        let htmlStr = "   Peru    " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 6
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Argentina',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + " "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Argentina',
            color: '#4f66d6',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#4f66d6',
                    formatter(params) {
                        let htmlStr = "   Argentina    " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 4
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Guyana',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + " "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Guyana',
            color: '#4f66d6',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#4f66d6',
                    formatter(params) {
                        let htmlStr = "  Guyana    " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Bolivia',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + " "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Bolivia',
            color: '#4f66d6',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#4f66d6',
                    formatter(params) {
                        let htmlStr = "  Bolivia    " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Costa Rica',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + " "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Costa Rica',
            color: '#4f66d6',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#4f66d6',
                    formatter(params) {
                        let htmlStr = "  Costa Rica    " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Ecuador',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + " "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Ecuador',
            color: '#4f66d6',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#4f66d6',
                    formatter(params) {
                        let htmlStr = "  Ecuador    " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020 Europe',
            type: 'bar',
            stack: 'Germany',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "                                       Germany    " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 213
                }
            ]
        }, {
            name: '2019 Europe',
            type: 'bar',
            stack: 'Germany',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "   "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: -14
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Italy',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "                     Italy   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 105
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Italy',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: -7
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'France',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "                France   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 81
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'France',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + " "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: -3
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Iceland',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "  Iceland   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Iceland',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + " "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: -3
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Switzerland',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "            Switzerland   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 61
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Switzerland',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + " "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: -2
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'United Kingdom',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "                            United Kingdom   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 150
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'United Kingdom',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + " "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: -2
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Spain',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "      Spain   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 26
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Spain',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + " "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: -1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Hungary',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "   Hungary   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 7
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Hungary',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + " "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: -1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Russia',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "     Russia   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 18
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Russia',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + " "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: -1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Netherlands',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "        Netherlands   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 37
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Netherlands',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + " "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: -1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Poland',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "         Poland   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 41
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Poland',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + " "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: -1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Denmark',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "          Denmark   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 45
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Denmark',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "                 "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Sweden',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "         Sweden   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 43
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Sweden',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "                "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Finland',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "     Finland   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 23
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Finland',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "         "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Austria',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "     Austria   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 19
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Austria',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "        "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Belgium',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "     Belgium   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 19
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Belgium',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "        "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Portugal',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "     Portugal   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 18
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Portugal',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "        "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Norway',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "   Norway   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 7
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Norway',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "    "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Czech Republic',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "   Czech Republic   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 7
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Czech Republic',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "    "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Greece',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "   Greece   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 5
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Greece',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "   "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Ireland',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "   Ireland   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 5
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Ireland',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "   "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Latvia',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "  Latvia   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 2
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Latvia',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Bulgaria',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "  Bulgaria   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Bulgaria',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Ukraine',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "  Ukraine   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Ukraine',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Belarus',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "  Belarus   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Belarus',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Estonia',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "  Estonia   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Estonia',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Slovenia',
            color: '#7036b3',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "  Slovenia   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Slovenia',
            color: '#36b381',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020 Asia',
            type: 'bar',
            stack: 'South Korea',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "     South Korea   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 16
                }
            ]
        }, {
            name: '2019 Asia',
            type: 'bar',
            stack: 'South Korea',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: -6
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'China',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "                 China   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 91
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'China',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: -6
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Hong Kong',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "      Hong Kong   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 25
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Hong Kong',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: -6
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Israel',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "             Israel   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 64
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Israel',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: -5
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Mongolia',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "  Mongolia   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Mongolia',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: -2
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'India',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "                 India   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 86
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'India',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: -1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Turkey',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "         Turkey   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 42
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Turkey',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "                "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Iran',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "         Iran   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 41
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Iran',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "                "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Bangladesh',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "        Bangladesh   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 37
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Bangladesh',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "              "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Japan',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "        Japan   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 36
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Japan',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "              "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Afghanistan',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "    Afghanistan   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 18
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Afghanistan',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "       "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Singapore',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "    Singapore   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 17
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Singapore',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "       "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Korea, Republic of',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "    Korea, Republic of   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 14
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Korea, Republic of',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "      "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Taiwan',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "    Taiwan   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 8
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Taiwan',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "    "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Myanmar',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "    Myanmar   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 8
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Myanmar',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "    "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Saudi Arabia',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "    Saudi Arabia   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 7
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Saudi Arabia',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "    "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Malaysia',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "    Malaysia   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 7
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Malaysia',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "    "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Philippines',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "    Philippines   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 4
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Philippines',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "   "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Kazakhstan',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "    Kazakhstan   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 3
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Kazakhstan',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "   "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Nepal',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "  Nepal   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Nepal',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Sri Lanka',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "  Sri Lanka   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Sri Lanka',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Iraq',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "  Iraq   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Iraq',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Qatar',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "  Qatar   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Qatar',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }
        , {
            name: '2020',
            type: 'bar',
            stack: 'Thailand',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "  Thailand   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Thailand',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Cyprus',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "  Cyprus   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Cyprus',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Indonesia',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "  Indonesia   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Indonesia',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Vietnam',
            color: '#b33668',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "  Vietnam   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Vietnam',
            color: '#58aee0',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "  "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020 Oceania',
            type: 'bar',
            stack: 'Australia',
            color: '#b38936',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b38936',
                    formatter(params) {
                        let htmlStr = "         Australia   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 42
                }
            ]
        }, {
            name: '2019 Oceania',
            type: 'bar',
            stack: 'Australia',
            color: '#a28db5',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "                 "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'New Zealand',
            color: '#b38936',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#b38936',
                    formatter(params) {
                        let htmlStr = "    N0ew Zealand   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 13
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'New Zealand',
            color: '#b38936',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "       "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020 Africa',
            type: 'bar',
            stack: 'Ghana',
            color: '#64b336',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#64b336',
                    formatter(params) {
                        let htmlStr = "   Ghana   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2019 Africa',
            type: 'bar',
            stack: 'Ghana',
            color: '#d19fad',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "   "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Mauritius',
            color: '#64b336',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#64b336',
                    formatter(params) {
                        let htmlStr = "   Mauritius   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 14
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Mauritius',
            color: '#64b336',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "       "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'South Africa',
            color: '#64b336',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#64b336',
                    formatter(params) {
                        let htmlStr = "   South Africa   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 3
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'South Africa',
            color: '#64b336',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "   "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Egypt',
            color: '#64b336',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#64b336',
                    formatter(params) {
                        let htmlStr = "  Egypt   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 2
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Egypt',
            color: '#64b336',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "   "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Nigeria',
            color: '#64b336',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#64b336',
                    formatter(params) {
                        let htmlStr = "  Nigeria   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Nigeria',
            color: '#64b336',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "   "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Namibia',
            color: '#64b336',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#64b336',
                    formatter(params) {
                        let htmlStr = "  Namibia   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Namibia',
            color: '#64b336',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "   "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Morocco',
            color: '#64b336',
            barMaxWidth: '18',
            label: {
                normal: {
                    show: true,
                    align: 'left',
                    color: '#64b336',
                    formatter(params) {
                        let htmlStr = "  Morocco   " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 1
                }
            ]
        }, {
            name: '2020',
            type: 'bar',
            stack: 'Morocco',
            color: '#64b336',
            barMaxWidth: '30',
            label: {
                normal: {
                    show: true,
                    align: 'right',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "   "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 0
                }
            ]
        }
    ]
}

option && myChart.setOption(option);