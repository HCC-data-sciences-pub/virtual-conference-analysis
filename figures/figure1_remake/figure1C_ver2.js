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
        data: ['Hispanic', 'Not Hispanic']
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
            name: 'Hispanic',
            type: 'bar',
            data: [18],
            stack: "2019",
            label: {
                normal: {
                    show: true,
                    formatter: "18,   4.81% of total",
                    textStyle: {
                        fontWeight: 'bold'
                    }
                }
            }
        },
        {
            name: 'Hispanic',
            type: 'bar',
            data: [316],
            stack: "2020",
            label: {
                normal: {
                    show: true,
                    formatter: "316,   8.08% of total",
                    textStyle: {
                        fontWeight: 'bold'
                    }
                }
            }
        },
        {
            name: 'Not Hispanic',
            type: 'bar',
            data: [356],
            stack: "2019",
            label: {
                normal: {
                    show: true,
                    formatter: "356,  95.19% of total",
                    textStyle: {
                        fontWeight: 'bold'
                    }
                }
            }
        },
        {
            name: 'Not Hispanic',
            type: 'bar',
            data: [3597],
            stack: "2020",
            label: {
                normal: {
                    show: true,
                    formatter: "3597,  \n\n 91.92% of total",
                    textStyle: {
                        fontWeight: 'bold'
                    }
                }
            }
        }
    ]
};

option && myChart.setOption(option);
