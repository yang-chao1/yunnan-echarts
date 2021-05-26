<template>
  <div class="com-container">
    
       <div class="com-chart" ref="hot_ref"></div>
  </div>
</template>

<script>
import getyear from '@/utils/getyear'
import getmonth from '@/utils/getmonth'
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
                  grid : {
                    top: "17%",
          left: "7%",
          right: "5%",
          bottom: "8%",

                },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#dddc6b'
                    }
                }
            },
            legend: {
                top: '7%',
             
                data: ['调入', '调出'],
                textStyle: {
                    color: 'rgba(255,255,255,.8)',
                    fontSize: '12',
                }
            },
           

            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.8)",
                        fontSize: 12,
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }

                },

                 data: getmonth(),

            }, {

                axisPointer: { show: false },
                axisLine: { show: false },
                position: 'bottom',
                offset: 20,



            }],

            yAxis: [{
                type: 'value',
                name: '数量（头）',
                axisTick: { show: false },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.8)'
                    }
                },
                  min: 0,
                        max: 1000,
                        interval: 200,
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.8)",
                        fontSize: 12,
                    },
                },

                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                }
            }],
            series: [
                {
                    name: '调入',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {

                        normal: {
                            color: '#E38EFF',
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(1, 132, 213, 0.4)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(1, 132, 213, 0.1)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#E38EFF',
                            borderColor: 'rgba(221, 220, 107, .1)',
                            borderWidth: 12
                        }
                    },
                    data: [123,154,234,133,546,234,564,678,234,567,666,222]

                },
                {
                    name: '调出',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {

                        normal: {
                            color: '#FFCC22',
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0, 216, 135, 0.4)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(0, 216, 135, 0.1)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#FFCC22',
                            borderColor: 'rgba(221, 220, 107, .1)',
                            borderWidth: 12
                        }
                    },
                    data: [678,453,713,435,234,546,357,234,587,976,456,454]

                },

            ]

        };
              this.chartInstance.setOption(initOption)
              // console.log(this.chartInstance)
        },
            screenAdapter() {
       const titleFontSize = this.$refs.hot_ref.offsetWidth /70*3

      const adapterOption = {
        title: {
          textStyle: {
            fontSize: titleFontSize
          }
        },
        legend: {
             
          textStyle: {
            fontSize:titleFontSize/2
          }
        },
         yAxis: [{
            name: `数量（${this.$store.state.unit}）`,

         }]
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    },
      updateYear() {
      const updateOption = {
        xAxis: [
          {
            data: getyear(),
          },
        ],
      };
      this.chartInstance.setOption(updateOption);
      this.chartInstance.resize();
    },
     updateMonth() {
      const updateOption = {
        xAxis: [
          {
            data: getmonth(),
          },
        ],
      };
      this.chartInstance.setOption(updateOption);
      this.chartInstance.resize();
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