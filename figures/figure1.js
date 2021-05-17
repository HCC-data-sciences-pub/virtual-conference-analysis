import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: 'Increased % of Female, Minorities, and Under-Developed Countries',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'     
        }
    },
    legend: {
        data: ['female', 'black', 'hispanic']
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
            name: 'black',
            type: 'bar',
            data: [1, 4],
            markPoint: {
                data: [
                    {type: 'max', name: 'max'},
                    {type: 'min', name: 'min'}
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
                    [{type: 'min'}, {type: 'max'}]
                ]
            }
        },
        {
            name: 'hispanic',
            type: 'bar',
            data: [4, 8],
            markPoint: {
                data: [
                    {type: 'max', name: 'max'},
                    {type: 'min', name: 'min'}
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
                    [{type: 'min'}, {type: 'max'}]
                ]
            }
        },
        {
            name: 'female',
            type: 'bar',
            data: [34, 44],
            markPoint: {
                data: [
                    {type: 'max', name: 'max'},
                    {type: 'min', name: 'min'}
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
                    [{type: 'min'}, {type: 'max'}]
                ]
            }
        }
    ]
};

option && myChart.setOption(option);
