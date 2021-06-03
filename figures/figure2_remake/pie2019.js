import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        data: ['America', 'Europe', 'Asia', 'Africa']
    },
    series: [
        {
            name: 'Numbers \n  of countries',
            type: 'pie',
            selectedMode: 'single',
            color: ['#99d64f', '#36b381', '#58aee0', '#d19fad'],
            radius: [0, '30%'],
            label: {
                formatter: '  {a|{a}  }{abg|}\n{hr|}\n {b|{b}} ',
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,

                rich: {
                    a: {
                        color: '#6E7079',
                        lineHeight: 15,
                        align: 'center'
                    },
                    hr: {
                        borderColor: '#8C8D8E',
                        width: '100%',
                        borderWidth: 1,
                        height: 0
                    },
                    b: {
                        color: '#4C5058',
                        fontSize: 10,
                        fontWeight: 'bold',
                        lineHeight: 20,
                        align: 'center'
                    }
                }
            },
            data: [
                { value: 331, name: 'America: 2' },
                { value: 36, name: 'Europe: 11' },
                { value: 26, name: 'Asia: 5' },
                { value: 1, name: 'Africa: 1' }
            ]
        },
        {
            name: 'Numbers of participants',
            type: 'pie',
            color: ['#99d64f', '#36b381', '#58aee0', '#d19fad'],
            radius: ['45%', '60%'],
            labelLine: {
                length: 30,
            },
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,

                rich: {
                    a: {
                        color: '#6E7079',
                        lineHeight: 22,
                        align: 'center'
                    },
                    hr: {
                        borderColor: '#8C8D8E',
                        width: '100%',
                        borderWidth: 1,
                        height: 0
                    },
                    b: {
                        color: '#4C5058',
                        fontSize: 14,
                        fontWeight: 'bold',
                        lineHeight: 33
                    },
                    per: {
                        color: '#fff',
                        backgroundColor: '#4C5058',
                        padding: [3, 4],
                        borderRadius: 4
                    }
                }
            },
            data: [
                { value: 331, name: 'America' },
                { value: 36, name: 'Europe' },
                { value: 26, name: 'Asia' },
                { value: 1, name: 'Africa' }
            ]
        }
    ]
};

option && myChart.setOption(option);
