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
        data: ['America', 'Europe', 'Asia', 'Oceania', 'Africa']
    },
    series: [
        {
            name: 'Numbers \n  of regions',
            type: 'pie',
            selectedMode: 'single',
            color: ['#4f66d6', '#7036b3', '#b33668', '#b38936', '#64b336'],
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
                { value: 2280, name: 'America: 12' },
                { value: 938, name: 'Europe: 27' },
                { value: 533, name: 'Asia: 27' },
                { value: 55, name: 'Oceania: 2' },
                { value: 23, name: 'Africa: 7' }
            ]
        },
        {
            name: 'Numbers of participants',
            type: 'pie',
            color: ['#4f66d6', '#7036b3', '#b33668', '#b38936', '#64b336'],
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
                { value: 2280, name: 'America' },
                { value: 938, name: 'Europe' },
                { value: 533, name: 'Asia' },
                { value: 55, name: 'Oceania' },
                { value: 23, name: 'Africa' }
            ]
        }
    ]
};

option && myChart.setOption(option);
