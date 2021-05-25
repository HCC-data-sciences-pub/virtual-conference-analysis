var echarts = require('echarts');

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['African', 'Hispanic', 'Other']
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
            name: 'African',
            type: 'bar',
            data: [1.34, 1.81],
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
            name: 'Hispanic',
            type: 'bar',
            data: [4.81, 8.08],
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
            data: [93.85, 90.10],
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
