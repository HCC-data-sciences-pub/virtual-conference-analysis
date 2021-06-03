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
        data: ['Hispanic 2019', 'Hispanic 2020']
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
            name: 'Hispanic 2019',
            type: 'bar',
            data: [18],
            stack: "2019",
            label: {
                normal: {
                    show: true,
                    formatter: "18,   4.81% of the total",
                    textStyle: {
                        fontSize: 20,
                        fontWeight: 'bold'
                    }
                }
            }
        },
        {
            name: 'Hispanic 2020',
            type: 'bar',
            data: [316],
            stack: "2020",
            label: {
                normal: {
                    show: true,
                    formatter: "316,   8.08% of the total",
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
