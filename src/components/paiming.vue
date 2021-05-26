<template>
  <div class="com-container">
     <!-- <div  class="but">
      <button class="button">动物排名</button>
      <button  class="button1">产品排名</button>
    </div> -->
       <div class="com-chart" ref="hot_ref"></div>
  </div>
</template>

<script>

var data = {
    etc: {
        name: `省内动物调运数量排名（猪）`,
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
        }],
    },
    notEtc: {
        name: `跨州市动物调运数量排名（猪）`,
        data: [{
            value: 115,
            label: '大理州'
        }, {
            value: 191,
            label: '文山州'
        }, {
            value: 233,
            label: '临沧市'
        }, {
            value: 43,
            label: '德宏州'
        }, {
            value: 364,
            label: '迪庆州'
        }, {
            value: 153,
            label: '昆明市'
        }, {
            value: 312,
            label: '玉溪市'
        }, {
            value: 134,
            label: '昭通市'
        }, {
            value: 234,
            label: '保山市'
        }, {
            value: 234,
            label: '丽江市'
        },{
            value: 97,
            label: '怒江州'
        }, {
            value: 129,
            label: '普洱市'
        }, {
            value: 233,
            label: '西双版纳州'
        }, {
            value: 253,
            label: '楚雄州'
        }, {
            value: 243,
            label: '红河州'
        }, {
            value: 123,
            label: '曲靖市'
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
                    backgroundColor: "#009DFF",
                    color: '#fff',

                },
                b: {
                    padding: [8, 15, 8, 15],
                    align: 'center',
                    backgroundColor: "#f9c807",
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
                formatter: function(params) {
                    return params.value 
                }
            },
            itemStyle: {
                color: '#298bf6',
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
                formatter: function(params) {
                    return params.value 
                }
            },
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: legendData[1],
            itemStyle: {
                color: '#f9c807',
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
        data: [`省内动物调运数量排名（${this.$store.state.animal}）`,`跨州市动物调运数量排名（${this.$store.state.animal}）`],
          formatter: (name) => {
            if (name == `省内动物调运数量排名（${this.$store.state.animal}）`) {
               
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
                    backgroundColor: "#009DFF",
                    color: '#fff',

                },
                b: {
                    padding: [8, 15, 8, 15],
                    align: 'center',
                    backgroundColor: "#f9c807",
                    color: '#fff',
                }
            }
        },
          textStyle: {
            fontSize:titleFontSize/2
          }
        },
       
    series: [{
            name: `省内动物调运数量排名（${this.$store.state.animal}）`,
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
                    return params.value + `${this.$store.state.unit}`
                }
            },
            itemStyle: {
                color: '#298bf6',
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
                    return params.value +`${this.$store.state.unit}`
                }
            },
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: `跨州市动物调运数量排名（${this.$store.state.animal}）`,
            itemStyle: {
                color: '#f9c807',
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
.but {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
}
.but .button {
  padding: 5px 10px;
  border-radius: 5px;
  background: rgba(128, 255, 115,.8);
  /*3e4e68 */
  color: #fff;
  z-index: 999;
  cursor: pointer;
}
.but .button1 {
  padding: 5px 10px;
  border-radius: 5px;
  background: #3e4e68;
  /*3e4e68 */
  color: #fff;
   z-index: 999;
    cursor: pointer;
}
</style>