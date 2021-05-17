import * as echarts from 'echarts';

var app = {};

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];

app.configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: posList.reduce(function (map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 100
    }
};

app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
        var labelOption = {
            normal: {
                rotate: app.config.rotate,
                align: app.config.align,
                verticalAlign: app.config.verticalAlign,
                position: app.config.position,
                distance: app.config.distance
            }
        };
        myChart.setOption({
            series: [{
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }]
        });
    }
};


var labelOption = {
    show: true,
    position: app.config.position,
    distance: app.config.distance,
    align: app.config.align,
    verticalAlign: app.config.verticalAlign,
    rotate: app.config.rotate,
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
        name: {
        }
    }
};

option = {
    title: {
        text: 'Increased % Participants by Counties (Excluded contries that has less than 5 participants in 2019)',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        top: 35,
        data: ['United States', 'Germany', 'Canada', 'China', 'Italy', 'Israel', 'South Korea']
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    xAxis: [
        {
            type: 'category',
            axisTick: { show: false },
            data: ['2019-2020']
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
            name: 'United States',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [526.73]
        },
        {
            name: 'Germany',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [1421.42]
        },
        {
            name: 'Canada',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [2585.71]
        },
        {
            name: 'China',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [866.67]
        },
        {
            name: 'Italy',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [1400]
        },
        {
            name: 'Israel',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [1180]
        },
        {
            name: 'South Korea',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [83.33]
        }
    ]
};

option && myChart.setOption(option);
