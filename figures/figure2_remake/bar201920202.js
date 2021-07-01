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
        textStyle: { fontSize: 25 },
        data: ['American', 'Europe', 'Asia', 'Oceania', 'Africa']
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
            name: 'American',
            type: 'bar',
            stack: 'Canada',
            color: '#4f66d6',
            barWidth: '20',
            label: {
                normal: {
                    textStyle: { fontSize: 20 },
                    show: true,
                    align: 'left',
                    color: '#4f66d6',
                    formatter(params) {
                        let htmlStr = "                              " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 12
                }
            ]
        }, {
            name: 'American',
            type: 'bar',
            stack: 'Canada',
            color: '#4f66d6',
            barWidth: '11',
            label: {
                normal: {
                    textStyle: { fontSize: 20 },
                    show: true,
                    align: 'right',
                    color: '#4f66d6',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "      "
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
            name: 'Europe',
            type: 'bar',
            stack: 'Germany',
            color: '#7036b3',
            barWidth: '20',
            label: {
                normal: {
                    textStyle: { fontSize: 20 },
                    show: true,
                    align: 'left',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = "                                                                 " + Math.abs(params.value)
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: 27
                }
            ]
        }, {
            name: 'Europe',
            type: 'bar',
            stack: 'Germany',
            color: '#7036b3',
            barWidth: '20',
            label: {
                normal: {
                    textStyle: { fontSize: 20 },
                    show: true,
                    align: 'right',
                    color: '#7036b3',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "                           "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: -11
                }
            ]
        }, {
            name: 'Asia',
            type: 'bar',
            stack: 'South Korea',
            color: '#b33668',
            barWidth: '20',
            label: {
                normal: {
                    textStyle: { fontSize: 20 },
                    show: true,
                    align: 'left',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = "                                                              " + Math.abs(params.value)
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
            name: ' Asia',
            type: 'bar',
            stack: 'South Korea',
            color: '#b33668',
            barWidth: '20',
            label: {
                normal: {
                    textStyle: { fontSize: 20 },
                    show: true,
                    align: 'right',
                    color: '#b33668',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "             "
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
            name: 'Oceania',
            type: 'bar',
            stack: 'Australia',
            color: '#b38936',
            barWidth: '20',
            label: {
                normal: {
                    textStyle: { fontSize: 20 },
                    show: true,
                    align: 'left',
                    color: '#b38936',
                    formatter(params) {
                        let htmlStr = "      " + Math.abs(params.value)
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
            name: 'Oceania',
            type: 'bar',
            stack: 'Australia',
            color: '#a28db5',
            barWidth: '20',
            label: {
                normal: {
                    textStyle: { fontSize: 20 },
                    show: true,
                    align: 'right',
                    color: '#b38936',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "           "
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
            name: 'Africa',
            type: 'bar',
            stack: 'Ghana',
            color: '#64b336',
            barWidth: '20',
            label: {
                normal: {
                    textStyle: { fontSize: 20 },
                    show: true,
                    align: 'left',
                    color: '#64b336',
                    formatter(params) {
                        let htmlStr = "                  " + Math.abs(params.value)
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
            name: '2019 Africa',
            type: 'bar',
            stack: 'Ghana',
            color: '#64b336',
            barWidth: '20',
            label: {
                normal: {
                    textStyle: { fontSize: 20 },
                    show: true,
                    align: 'right',
                    color: '#64b336',
                    formatter(params) {
                        let htmlStr = Math.abs(params.value) + "    "
                        return htmlStr
                    }
                }
            },
            data: [
                {
                    value: -1
                }
            ]
        }
    ]
}

option && myChart.setOption(option);
