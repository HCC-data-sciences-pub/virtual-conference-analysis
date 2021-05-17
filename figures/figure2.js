import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: 'Increased Participants by Counties'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        left: 400,
        top: 10,
        data: ['United States', 'Canada', 'Germany', 'Italy', 'France', 'Iceland', 'Switzerland', 'United Kingdom', 'Spain', 'Hungary', 'Russia', 'Netherlands', 'Poland', 'South Korea', 'China', 'Israel', 'Mongolia', 'Georgia', 'India', 'Ghana']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2019', '2020']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Ghana',
            type: 'line',
            stack: 'amount',
            data: [1, 1],
            symbolSize: 10,
            endLabel: {
                show: true,
                formatter: 'Ghana'
            }
        }, {
            name: 'Mongolia',
            type: 'line',
            stack: 'amount',
            data: [2, 1],
            symbolSize: 10,
            endLabel: {
                show: true,
                formatter: 'Mongolia'
            }
        },
        {
            name: 'Iceland',
            type: 'line',
            stack: 'amount',
            data: [3, 1],
            symbolSize: 10,
            endLabel: {
                show: true,
                formatter: 'Iceland'
            }
        }, {
            name: 'Hungary',
            type: 'line',
            stack: 'amount',
            data: [1, 7],
            symbolSize: 10,
            endLabel: {
                show: true,
                formatter: 'Hungary'
            }
        }, {
            name: 'South Korea',
            type: 'line',
            stack: 'amount',
            data: [6, 11],
            symbolSize: 10,
            endLabel: {
                show: true,
                formatter: 'South Korea'
            }
        }, {
            name: 'Russia',
            type: 'line',
            stack: 'amount',
            data: [1, 18],
            symbolSize: 10,
            endLabel: {
                show: true,
                formatter: 'Russia'
            }
        },
        {
            name: 'Spain',
            type: 'line',
            stack: 'amount',
            data: [1, 26],
            symbolSize: 10,
            endLabel: {
                show: true,
                formatter: 'Spain'
            }
        },
        {
            name: 'Colombia',
            type: 'line',
            stack: 'amount',
            data: [0, 28],
            symbolSize: 10,
            endLabel: {
                show: true,
                formatter: 'Colombia'
            }
        },
        {
            name: 'Netherlands',
            type: 'line',
            stack: 'amount',
            data: [1, 37],
            symbolSize: 10,
            endLabel: {
                show: true,
                formatter: 'Netherlands'
            }
        },
        {
            name: 'Poland',
            type: 'line',
            stack: 'amount',
            data: [1, 41],
            symbolSize: 10,
            endLabel: {
                show: true,
                formatter: 'Poland'
            }
        },
        {
            name: 'Switzerland',
            type: 'line',
            stack: 'amount',
            data: [2, 61],
            symbolSize: 10,
            endLabel: {
                show: true,
                formatter: 'Switzerland'
            }
        },
        {
            name: 'Israel',
            type: 'line',
            stack: 'amount',
            data: [5, 64],
            symbolSize: 10,
            endLabel: {
                show: true,
                formatter: 'Israel'
            }
        }, {
            name: 'France',
            type: 'line',
            stack: 'amount',
            data: [3, 81],
            symbolSize: 10,
            endLabel: {
                show: true,
                formatter: 'France'
            }
        },
        {
            name: 'India',
            type: 'line',
            stack: 'amount',
            data: [1, 88],
            symbolSize: 10,
            endLabel: {
                show: true,
                formatter: 'India'
            }
        }, {
            name: 'Italy',
            type: 'line',
            stack: 'amount',
            data: [7, 105],
            symbolSize: 10,
            endLabel: {
                show: true,
                formatter: 'Italy'
            }
        }, {
            name: 'China',
            type: 'line',
            stack: 'amount',
            data: [12, 116],
            symbolSize: 10,
            endLabel: {
                show: true,
                formatter: 'China'
            }
        }, {
            name: 'Brazil',
            type: 'line',
            stack: 'amount',
            data: [0, 136],
            symbolSize: 10,
            endLabel: {
                show: true,
                formatter: 'Brazil'
            }
        }, {
            name: 'United Kingdom',
            type: 'line',
            stack: 'amount',
            data: [2, 150],
            symbolSize: 10,
            endLabel: {
                show: true,
                formatter: 'United Kingdom'
            }
        }, {
            name: 'Canada',
            type: 'line',
            stack: 'amount',
            data: [7, 188],
            symbolSize: 10,
            endLabel: {
                show: true,
                formatter: 'Canada'
            }
        },
        {
            name: 'Germany',
            type: 'line',
            stack: 'amount',
            data: [14, 213],
            symbolSize: 10,
            endLabel: {
                show: true,
                formatter: 'Germany'
            }
        },
        {
            name: 'United States',
            type: 'line',
            stack: 'amount',
            data: [303, 1899],
            symbolSize: 10,
            endLabel: {
                show: true,
                formatter: 'United States'
            }
        }
    ]
};

option && myChart.setOption(option);
