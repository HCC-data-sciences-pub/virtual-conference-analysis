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
            data: ["2019                                                                                   2020"]
        }
    ],
    yAxis: [{
        type: "value",
    }],
    series: [
        {
            name: 'Female',
            type: 'bar',
            data: [128],
            stack: "2019",
            label: {
                normal: {
                    show: true,
                    formatter: "128,  34.22% of total",
                    textStyle: {
                        fontWeight: 'bold'
                    }
                }
            }
        },
        {
            name: 'Female',
            type: 'bar',
            data: [1730],
            stack: "2020",
            label: {
                normal: {
                    show: true,
                    formatter: "1730, \n\n44.22% of total",
                    textStyle: {
                        fontWeight: 'bold'
                    }
                }
            }
        },
        {
            name: 'Male',
            type: 'bar',
            data: [246],
            stack: "2019",
            label: {
                normal: {
                    show: true,
                    formatter: "246,  65.78% of total",
                    textStyle: {
                        fontWeight: 'bold'
                    }
                }
            }
        },
        {
            name: 'Male',
            type: 'bar',
            data: [2183],
            stack: "2020",
            label: {
                normal: {
                    show: true,
                    formatter: "2183,  \n\n 55.78% of total",
                    textStyle: {
                        fontWeight: 'bold'
                    }
                }
            }
        }
    ]
};

option && myChart.setOption(option);
