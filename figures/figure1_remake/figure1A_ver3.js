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
        textStyle :{fontSize: 20},
        data: ['Female 2019', 'Female 2020']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            data: ["2019                                             2020"]
        , axisLabel: {
            show: true,
            textStyle: {
                 fontSize: 20
            }
        }
        }
    ],
    yAxis: [{
        type: "value",
        axisLabel: {
            show: true,
            textStyle: {
                 fontSize: 20
            }
        }
    }],
    series: [
        {
            name: 'Female 2019',
            type: 'bar',
            data: [128],
            stack: "2019",
            label: {
                normal: {
                    show: true,
                    formatter: "128,  34.22% of the total",
                    textStyle: {
                        fontSize: 20,
                        fontWeight: 'bold'
                    }
                }
            }
        },
        {
            name: 'Female 2020',
            type: 'bar',
            data: [1730],
            stack: "2020",
            label: {
                normal: {
                    show: true,
                    formatter: "1730, \n\n44.22% of the total",
                    textStyle: {
                        fontSize: 20,
                        fontWeight: 'bold'
                    }
                }
            }
        }
    ]
};

option && myChart.setOption(option);
    