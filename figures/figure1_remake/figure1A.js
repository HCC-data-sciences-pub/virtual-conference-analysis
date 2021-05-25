import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: 'Increased % of Race',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Black', 'Asian/Pacific Islander', 'Other']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['2019', '2020']
        }
    ],
    yAxis: [{

        type: "value",
        name: "%",
        axisLabel: {
            formatter: "{value} %"
        }
    }],
    series: [
        {
            name: 'Black',
            type: 'bar',
            data: [1.07, 0.41],
            stack: "race",
            markPoint: {
                data: [
                    { type: 'max', name: 'max' },
                    { type: 'min', name: 'min' }
                ]
            },
            emphasis: {
                focus: 'series'
            },
            markLine: {
                label: {
                    normal: {
                        show: false
                    }
                },
                lineStyle: {
                    type: 'dashed'
                },
                data: [
                    [{ type: 'min' }, { type: 'max' }]
                ]
            }
        },
        {
            name: 'Asian/Pacific Islander',
            type: 'bar',
            data: [30.48, 32.89],
            stack: "race",
            markPoint: {
                data: [
                    { type: 'max', name: 'max' },
                    { type: 'min', name: 'min' }
                ]
            },
            emphasis: {
                focus: 'series'
            },
            markLine: {
                label: {
                    normal: {
                        show: false
                    }
                },
                lineStyle: {
                    type: 'dashed'
                },
                data: [
                    [{ type: 'min' }, { type: 'max' }]
                ]
            }
        },
        {
            name: 'Other',
            type: 'bar',
            data: [68.45, 66.69],
            stack: "race",
            markPoint: {
                data: [
                    { type: 'max', name: 'max' },
                    { type: 'min', name: 'min' }
                ]
            },
            emphasis: {
                focus: 'series'
            },
            markLine: {
                label: {
                    normal: {
                        show: false
                    }
                },
                lineStyle: {
                    type: 'dashed'
                },
                data: [
                    [{ type: 'min' }, { type: 'max' }]
                ]
            }
        }
    ]
};

option && myChart.setOption(option);
