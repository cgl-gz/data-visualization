// echarts
const chartStore = {
    pie: null,
    bar: null,
    line: null,
}

const optionForPie = function(data) {
    let option = {
        title: {
            text: '朝阳区二手房位置分布占比',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                name: '地理位置',
                type: 'pie',
                radius: '60%',
                center: ['50%', '50%'],
                data: data,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }

    return option
}

const optionForArea = function(area) {
    let data = _.map(area, (v, k) => {
        let avg = _.meanBy(v, 'averagePrice')
        let o = {
            name: k,
            value: [v.length, avg.toFixed(0)],
        }
        return o
    })
    let num = 0
    let totalPrices = 0
    let d = []
    for (let i = 0; i < data.length; i++) {
        let n = data[i].value
        if (n[0] > 2) {
            let o = {
                name: data[i].name,
                value: [n[0], ` 平均价：${n[1]}`],
            }
            console.log('1', data[i] ,o)
            d.push(o)
        } else {
            num += n[0]
            totalPrices += (n[1] * n[0])
        }
    }
    let avgPrices = totalPrices / num
    d.push({name:'其他', value: [num, ` 平均价：${avgPrices}`]})
    let option = optionForPie(d)
    return option
}

const optionForBar = function(data) {
    let option = {
        title: {
            text: '朝阳区二手房区域分布',
        },
        xAxis: {
            data: data.axis,
            name: '环城高速',
            axisLabel: {
                textStyle: {
                    color: '#000'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true
            },
            z: 10
        },
        yAxis: {
            name: '小区/公寓数量',
            axisLine: {
                show: true
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            }
        },
        series: [
            {
                type: 'bar',
                itemStyle: {
                    normal: {color: 'rgba(0,0,0,0.05)'}
                },
                barGap:'-100%',
                barCategoryGap:'75%',
                animation: false
            },
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#83bff6'},
                                {offset: 0.5, color: '#188df0'},
                                {offset: 1, color: '#188df0'}
                            ]
                        )
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2378f7'},
                                {offset: 0.7, color: '#2378f7'},
                                {offset: 1, color: '#83bff6'}
                            ]
                        )
                    }
                },
                data: data.data
            }
        ]
    }
    return option
}

const optionForLocation= function(location) {
    let data = {
        axis: [],
        data: [],
    }
    _.each(location, (v, k) => {
        data.axis.push(k)
        data.data.push(v.length)
    })
    let option = optionForBar(data)
    return option
}

const optionForLine = function(data) {
    let option = {
        title: {
            text: '朝阳区二手房价格'
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                params = params[0]
                let value = params.value
                let s = value[0] + ': ' + value[1]
                return s
            },
            axisPointer: {
                animation: false
            }
        },
        xAxis: {
            name: '竣工日期',
            type: 'time',
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            name: '平均价格',
            boundaryGap: [0, '100%'],
            splitLine: {
                show: false
            },
            min: 8,
        },
        series: [{
            name: '模拟数据',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data
        }]
    };
    return option
}

const optionForPrice = function(price) {
    let data = _.map(price, (v, k) => {
        let avg = _.meanBy(v, 'averagePrice')
        let o = {
            name: k,
            value: [k, avg.toFixed(2)],
        }
        return o
    })
    let option = optionForLine(data)
    return option
}

const renderChart = function(d) {
    let data = d

    let area = _.groupBy(data, 'area')
    let areaOption = optionForArea(area)
    let pie = chartStore.pie
    pie.setOption(areaOption)

    let location = _.groupBy(data, 'location')
    let locationOption = optionForLocation(location)
    let bar = chartStore.bar
    bar.setOption(locationOption)

    let price = _.groupBy(data, 'completiondDate')
    let priceOption = optionForPrice(price)
    let line = chartStore.line
    line.setOption(priceOption)
}

const fetchCommunitys = function() {
    let protocol = location.protocol
    // 如果是通过 node 运行的, prototol 是 http
    // 则调用 api 来获取电影数据
    // 否则直接调用 movieJSON 函数获取电影数据
    if (protocol === 'http:') {
        // 使用 ajax 动态获取数据
        api.fetchCommunitys(function (d) {
            d = JSON.parse(d)
            renderChart(d)
        })
    } else {
        // 直接使用 JSON 数据 不从后台获取
        let d = CommunityJSON()
        renderChart(d)
    }
}

const initedChart = function() {
    _.each(chartStore, (v, k) => {
        let selector = '#' + k
        let element = document.querySelector(selector)
        let chart = echarts.init(element)
        // console.log(chart)
        chartStore[k] = chart
    })
}

const __main = function() {
    initedChart()
    fetchCommunitys()
}

// $(document).ready() 这个东西是 jQuery 的回调函数
// 是页面内容(只包括元素, 不包括元素引用的图片)载入完毕之后的回调事件
$(document).ready(function() {
    __main()
})
