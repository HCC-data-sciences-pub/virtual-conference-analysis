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
        data: ['African', 'Not African']
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
            name: 'African',
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
            name: 'African',
            type: 'bar',
            data: [71],
            stack: "2020",
            label: {
                normal: {
                    show: true,
                    formatter: "1730,   1.81% of total",
                    textStyle: {
                        fontWeight: 'bold'
                    }
                }
            }
        },
        {
            name: 'Not African',
            type: 'bar',
            data: [369],
            stack: "2019",
            label: {
                normal: {
                    show: true,
                    formatter: "369,  98.66% of total",
                    textStyle: {
                        fontWeight: 'bold'
                    }
                }
            }
        },
        {
            name: 'Not African',
            type: 'bar',
            data: [3842],
            stack: "2020",
            label: {
                normal: {
                    show: true,
                    formatter: "3842,  \n\n 98.19% of total",
                    textStyle: {
                        fontWeight: 'bold'
                    }
                }
            }
        }
    ]
};

option && myChart.setOption(option);
