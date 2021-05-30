import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['African 2019', 'African 2020']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            data: ["2019                                                                                   2020"]
        }
    ],
    yAxis: [{
        type: "value",
    }],
    series: [
        {
            name: 'African 2019',
            type: 'bar',
            data: [5],
            stack: "2019",
            label: {
                normal: {
                    show: true,
                    formatter: "5,   1.34% of total",
                    textStyle: {
                        fontWeight: 'bold'
                    }
                }
            }
        },
        {
            name: 'African 2020',
            type: 'bar',
            data: [71],
            stack: "2020",
            label: {
                normal: {
                    show: true,
                    formatter: "71,   1.81% of total",
                    textStyle: {
                        fontWeight: 'bold'
                    }
                }
            }
        }
    ]
};

option && myChart.setOption(option);
