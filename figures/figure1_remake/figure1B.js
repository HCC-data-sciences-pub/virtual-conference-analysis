import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: 'Increased % of Ethinicity',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Hispanic', 'Non-Hispanic']
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
            name: 'Hispanic',
            type: 'bar',
            data: [4.01, 8.05],
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
            name: 'Non-Hispanic',
            type: 'bar',
            data: [95.99, 91.94],
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
