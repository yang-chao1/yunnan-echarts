<template>
  <div class="com-container">
    
       <div class="com-chart" ref="hot_ref"></div>
  </div>
</template>

<script>
var data = {
    etc: {
        name: '出省动物调运数量排名（猪）',
        data:[{
            value: 115,
            label: '昆明市'
        }, {
            value: 19,
            label: '曲靖市'
        }, {
            value: 23,
            label: '昭通市'
        }, {
            value: 43,
            label: '德宏州'
        }, {
            value: 34,
            label: '迪庆州'
        }, {
            value: 53,
            label: '大理州'
        }, {
            value: 12,
            label: '玉溪市'
        }, {
            value: 34,
            label: '临沧市'
        }, {
            value: 34,
            label: '保山市'
        }, {
            value: 34,
            label: '丽江市'
        },{
            value: 7,
            label: '怒江州'
        }, {
            value: 19,
            label: '普洱市'
        }, {
            value: 23,
            label: '西双版纳州'
        }, {
            value: 23,
            label: '楚雄州'
        }, {
            value: 23,
            label: '红河州'
        }, {
            value: 23,
            label: '文山州'
        }]
    },
    notEtc: {
        name: '出省动物产品调运数量排名（猪）',
        data:  [{
            value: 233,
            label: '大理州'
        }, {
            value: 243,
            label: '曲靖市'
        }, {
            value: 213,
            label: '迪庆州'
        }, {
            value: 243,
            label: '德宏州'
        }, {
            value: 134,
            label: '昭通市'
        }, {
            value: 178,
            label: '昆明市'
        }, {
            value: 190,
            label: '保山市'
        }, {
            value: 109,
            label: '临沧市'
        }, {
            value: 34,
            label: '玉溪市'
        }, {
            value: 45,
            label: '丽江市'
        },{
            value: 97,
            label: '普洱市'
        }, {
            value: 149,
            label: '怒江州'
        }, {
            value: 243,
            label: '西双版纳州'
        }, {
            value: 123,
            label: '文山州'
        }, {
            value: 423,
            label: '红河州'
        }, {
            value: 523,
            label: '楚雄州'
        }],
    },
}
let legendData = [data.etc.name, data.notEtc.name];
let yAxisDataN = data.etc.data.map(e => e.label);
let yAxisDataV = data.notEtc.data.map(e => e.label);
let yAxisLabelN = data.etc.data.map(e => e.value).sort((a, b) => a - b);
let yAxisLabelV = data.notEtc.data.map(e => e.value).sort((a, b) => a - b);
let rankData = data.etc.data.map((item, index) => index)
let top = 70;
let bottom = 10;
var labelSetting = {
    label: "16",
    yLabel: "16"
}
export default {
      data() {
            return {
            chartInstance: null,
            }
        },
    mounted() {
      this.initChart()
      window.addEventListener('resize',this.screenAdapter)
      this.screenAdapter()
    },
    methods: {
        initChart() {
       
           this.chartInstance  = this.$echarts.init(this.$refs.hot_ref)
            const initOption =  {
    title:{
        text:"",
        x:'center',
        textStyle:{
            color:"#fff",
            fontSize:22
        }
    },
    backgroundColor: "#00000000",
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        left: 'center',
        top: 25,
        bottom: 0,
        itemWidth: 0, //图例标记的图形宽度
        itemHeight: 0, //图例标记的图形高度
        y: 'center',
        borderRadius: 0,
        inactiveColor: '#FFF',
        formatter: (name) => {
            if (name == data.etc.name) {
               
                return '{a|' + name + '}'
            } else {
                return '{b|' + name + '}'
            }
        },
        textStyle: {
            rich: {
                a: {
                    padding: [8, 15, 8, 15],
                    align: 'center',
                    backgroundColor: "#00e473",
                    color: '#fff',

                },
                b: {
                    padding: [8, 15, 8, 15],
                    align: 'center',
                    backgroundColor: "#009DFF",
                    color: '#fff',
                }
            }
        },
        data: legendData
    },
    grid:[{
        right: '70%',
        containLabel: false,
        bottom,
        top,
    }, {
        left: '70%',
        bottom:0,
        width: 0,
        top: top,
        bottom: bottom
    }, {
        left: '70%',
        containLabel: false,
        bottom,
        top
    }],
    xAxis: [{
        type: 'value',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    }, {
        gridIndex: 1,
        show: false
    }, {
        gridIndex: 2,
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    }],
    yAxis: [{
            position: 'right',
            axisLabel: {
                color: '#fff',
                fontSize: 16
            },
            axisLine: {
                show: false
            },
            type: 'category',
            inverse: false,
            axisTick: {
                show: false
            },
            data: yAxisDataN
        },
        {
            gridIndex: 1,
            position: 'center',
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                margin: 0,
                color: "#fff",
                fontSize: labelSetting.yLabel
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: []
        },
        {
            gridIndex: 2,
            position: 'left',
            axisLabel: {
                color: `#fff`,
                fontSize: labelSetting.yLabel
            },
            axisLine: {
                show: false
            },
            type: 'category',
            inverse: false,
            axisTick: {
                show: false
            },
            data: yAxisDataV
        }
    ],
    series: [{
            name: legendData[0],
            type: 'bar',
            barWidth: '50%',
            label: {
                show: true,
                fontFamily: 'Rubik-Medium',
                fontSize: labelSetting.label,
                distance: 10,
                color: '#fff',
                position: 'left',
                formatter: (params)=> {
                    return params.value
                }
            },
            itemStyle: {
                color: '#00e473',
            },
            data: yAxisLabelN
        },
        {
            type: 'bar',
            barWidth: '50%',
            label: {
                show: true,
                fontFamily: 'Rubik-Medium',
                fontSize: labelSetting.label,
                distance: 10,
                color: '#fff',
                position: 'right',
                formatter: (params)=> {
                    return params.value 
                }
            },
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: legendData[1],
            itemStyle: {
                color: '#009DFF',
            },
            data: yAxisLabelV
        },
    ]
}
              this.chartInstance.setOption(initOption)
              // console.log(this.chartInstance)
        },
            screenAdapter() {
       const titleFontSize = this.$refs.hot_ref.offsetWidth /100*3

      const adapterOption = {
        title: {
          textStyle: {
            fontSize: titleFontSize
          }
        },
        legend: {
        data: [`出省动物调运数量排名（${this.$store.state.animal}）`,`出省动物产品调运数量排名（${this.$store.state.animal}）`],
              formatter: (name) => {
            if (name == `出省动物调运数量排名（${this.$store.state.animal}）`) {
               
                return '{a|' + name + '}'
            } else {
                return '{b|' + name + '}'
            }
        },
        textStyle: {
            rich: {
                a: {
                    padding: [8, 15, 8, 15],
                    align: 'center',
                    backgroundColor: "#00e473",
                    color: '#fff',

                },
                b: {
                    padding: [8, 15, 8, 15],
                    align: 'center',
                    backgroundColor: "#009DFF",
                    color: '#fff',
                }
            }
        },
          textStyle: {
            fontSize:titleFontSize/2
          }
        },
         series: [{
            name: `出省动物调运数量排名（${this.$store.state.animal}）`,
            type: 'bar',
            barWidth: '50%',
            label: {
                show: true,
                fontFamily: 'Rubik-Medium',
                fontSize: labelSetting.label,
                distance: 10,
                color: '#fff',
                position: 'left',
                formatter: (params)=> {
                    return params.value  +`${this.$store.state.unit}`
                }
            },
            itemStyle: {
                color: '#00e473',
            },
            data: yAxisLabelN
        },
        {
            type: 'bar',
            barWidth: '50%',
            label: {
                show: true,
                fontFamily: 'Rubik-Medium',
                fontSize: labelSetting.label,
                distance: 10,
                color: '#fff',
                position: 'right',
                formatter: (params)=> {
                    return params.value  +`${this.$store.state.unit}`
                }
            },
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: `出省动物产品调运数量排名（${this.$store.state.animal}）`,
            itemStyle: {
                color: '#009DFF',
            },
            data: yAxisLabelV
        },
    ]
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    },
    }

}
</script>

<style scoped>
.com-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.com-chart {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

</style>