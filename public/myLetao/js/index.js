$(function () {

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".bar"));

    // 指定图表的配置项和数据
    var option1 = {
        title: {
            text: '2019注册人数'
        },
        tooltip: {},
        legend: {
            data: ['销量', "人数"]
        },
        xAxis: {
            data: ["一月", "二月", "三月", "四月", "五月", "六月"]
        },
        yAxis: {},
        series: [{
                name: '销量',
                type: 'bar',
                data: [55, 134, 78, 100, 80, 120]
            },
            {
                name: '人数',
                type: 'bar',
                data: [50, 200, 343, 123, 100, 200]
            },

        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option1);


    // 饼图
    // 基于准备好的dom，初始化echarts实例
    var myPie = echarts.init(document.querySelector(".pie"));

    // 指定图表的配置项和数据
    var option2 = {
        title: {
            text: '热门品牌销售',
            subtext: '2019年2月',
            x: 'center',
            textStyle: {
                color: "red",
                fontSize: 26
            }

        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['耐克', '阿迪', '老北京', '老奶奶', '回力']
        },
        series: [{
            name: '品牌销售',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [{
                    value: 335,
                    name: '耐克'
                },
                {
                    value: 310,
                    name: '阿迪'
                },
                {
                    value: 234,
                    name: '老北京'
                },
                {
                    value: 135,
                    name: '老奶奶'
                },
                {
                    value: 1548,
                    name: '回力'
                }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 50,
                    shadowOffsetX: 0,
                    shadowColor: 'yellow'
                }
            }
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myPie.setOption(option2);
})