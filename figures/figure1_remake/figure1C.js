import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: 'Increased % of Gender',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Female', 'Male']
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
            name: 'Female',
            type: 'bar',
            data: [34.22, 44.22],
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
            name: 'Male',
            type: 'bar',
            data: [65.78, 55.77],
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
