import * as echarts from 'echarts';

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
        data: ['Japanese', 'Africans', 'Hispanic', 'IndianSubContinent', 'Muslim',
            'French', 'Germanic', 'Italian', 'Nordic', 'Jewish', 'EastEuropean', 'EastAsian', 'British']

    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '1%',
        top: '6%',
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
            name: 'Japanese',
            type: 'bar',
            data: [0.27, 2.35],
            stack: "Ethnicity",
            itemStyle: {
                color: '#2f4f4f'
            },
            markPoint: {
                data: [
                    { type: 'max', name: 'max' },
                    { type: 'min', name: 'min' }
                ]
            },
            emphasis: {
                focus: 'series'
            }
        }
        , {
            name: 'EastAsian',
            type: 'bar',
            data: [24.87, 23.95],
            stack: "Ethnicity",
            itemStyle: {
                color: '#3a6d87'
            },
            markPoint: {
                data: [
                    { type: 'max', name: 'max' },
                    { type: 'min', name: 'min' }
                ]
            },
            emphasis: {
                focus: 'series'
            }
        }, {
            name: 'IndianSubContinent',
            type: 'bar',
            data: [7.49, 9.94],
            stack: "Ethnicity",
            itemStyle: {
                color: '#305bbf'
            },
            markPoint: {
                data: [
                    { type: 'max', name: 'max' },
                    { type: 'min', name: 'min' }
                ]
            },
            emphasis: {
                focus: 'series'
            }
        },
        {
            name: 'Africans',
            type: 'bar',
            data: [1.34, 1.81],
            stack: "Ethnicity",
            itemStyle: {
                color: '#0f0fba'
            },
            markPoint: {
                data: [
                    { type: 'max', name: 'max' },
                    { type: 'min', name: 'min' }
                ]
            },
            emphasis: {
                focus: 'series'
            }
        },
        {
            name: 'Muslim',
            type: 'bar',
            data: [4.28, 5.98],
            stack: "Ethnicity",
            itemStyle: {
                color: '#4518a8'
            },
            markPoint: {
                data: [
                    { type: 'max', name: 'max' },
                    { type: 'min', name: 'min' }
                ]
            },
            emphasis: {
                focus: 'series'
            }
        },
        {
            name: 'Hispanic',
            type: 'bar',
            data: [4.81, 8.08],
            stack: "Ethnicity",
            itemStyle: {
                color: '#79349e'
            },
            markPoint: {
                data: [
                    { type: 'max', name: 'max' },
                    { type: 'min', name: 'min' }
                ]
            },
            emphasis: {
                focus: 'series'
            }
        },
        {
            name: 'French',
            type: 'bar',
            data: [5.62, 6.06],
            stack: "Ethnicity",
            itemStyle: {
                color: '#984f9e'
            },
            markPoint: {
                data: [
                    { type: 'max', name: 'max' },
                    { type: 'min', name: 'min' }
                ]
            },
            emphasis: {
                focus: 'series'
            }
        },
        {
            name: 'Germanic',
            type: 'bar',
            data: [2.67, 2.79],
            stack: "Ethnicity",
            itemStyle: {
                color: '#dda0dd'
            },
            markPoint: {
                data: [
                    { type: 'max', name: 'max' },
                    { type: 'min', name: 'min' }
                ]
            },
            emphasis: {
                focus: 'series'
            }
        },
        {
            name: 'Italian',
            type: 'bar',
            data: [6.68, 7.97],
            stack: "Ethnicity",
            itemStyle: {
                color: '#d971ba'
            },
            markPoint: {
                data: [
                    { type: 'max', name: 'max' },
                    { type: 'min', name: 'min' }
                ]
            },
            emphasis: {
                focus: 'series'
            }
        },
        {
            name: 'Nordic',
            type: 'bar',
            data: [1.34, 1.58],
            stack: "Ethnicity",
            itemStyle: {
                color: '#d94384'
            },
            markPoint: {
                data: [
                    { type: 'max', name: 'max' },
                    { type: 'min', name: 'min' }
                ]
            },
            emphasis: {
                focus: 'series'
            }
        },
        {
            name: 'EastEuropean',
            type: 'bar',
            data: [7.75, 5.98],
            stack: "Ethnicity",
            itemStyle: {
                color: '#d95c50'
            },
            markPoint: {
                data: [
                    { type: 'max', name: 'max' },
                    { type: 'min', name: 'min' }
                ]
            },
            emphasis: {
                focus: 'series'
            }
        },
        {
            name: 'Jewish',
            type: 'bar',
            data: [6.95, 6.03],
            stack: "Ethnicity",
            itemStyle: {
                color: '#e0ad4f'
            },
            markPoint: {
                data: [
                    { type: 'max', name: 'max' },
                    { type: 'min', name: 'min' }
                ]
            },
            emphasis: {
                focus: 'series'
            }
        },
        {
            name: 'British',
            type: 'bar',
            data: [25.93, 17.47],
            stack: "Ethnicity",
            itemStyle: {
                color: '#fced79'
            },
            markPoint: {
                data: [
                    { type: 'max', name: 'max' },
                    { type: 'min', name: 'min' }
                ]
            },
            emphasis: {
                focus: 'series'
            }
        },
        {
            name: 'Asian',
            type: 'bar',
            barWidth: '70',
            stack: 'names',
            barGap: '5%',
            color: '#95c2b9',
            itemStyle: {
                normal: {
                    label: {
                        formatter: "Asian\n{c}",
                        show: true,
                        textStyle: {
                            fontWeight: "bolder",
                            fontSize: "16",
                            color: "#005443"
                        }
                    }
                }
            },
            emphasis: {
                focus: 'series'
            },
            data: [32.62, 36.23]
        },
        {
            name: 'GreaterAfrican',
            type: 'bar',
            color: '#d0c0fa',
            itemStyle: {
                normal: {
                    label: {
                        formatter: "Greater\nAfrican\n{c}",
                        show: true,
                        textStyle: {
                            fontWeight: "bolder",
                            fontSize: "16",
                            color: "#290099"
                        }
                    }
                }
            },
            stack: 'names',
            emphasis: {
                focus: 'series'
            },
            data: [5.62, 7.79]
        },
        {
            name: 'WestEuropean',
            type: 'bar',
            color: '#fae1f6',
            itemStyle: {
                normal: {
                    label: {
                        formatter: "West\nEuropean\n{c}",
                        show: true,
                        textStyle: {
                            fontWeight: "bolder",
                            fontSize: "16",
                            color: "#cf72bf"
                        }
                    }
                }
            },
            stack: 'names',
            emphasis: {
                focus: 'series'
            },
            data: [21.12, 26.47]
        },
        {
            name: 'OtherEuropean',
            type: 'bar',
            color: '#ffd6ba',
            itemStyle: {
                normal: {
                    label: {
                        formatter: "Other\nEuropean\n{c}",
                        show: true,
                        textStyle: {
                            fontWeight: "bolder",
                            fontSize: "16",
                            color: "#de6f26"
                        }
                    }
                }
            },
            stack: 'names',
            emphasis: {
                focus: 'series'
            },
            data: [40.64, 29.49]
        }
    ]
};

option && myChart.setOption(option);