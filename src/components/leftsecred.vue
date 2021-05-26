<template>
  <div class="com-container">
    
       <div class="com-chart" ref="hot_ref"></div>
  </div>
</template>

<script>
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
        top : 40,    //距离容器上边界40像素
        bottom: 30,   //距离容器下边界30像素
        left:50,
        right:50

    },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
             
                // legend: {
                //    top:'7%',
                //    textStyle: {
                //             color: 'rgba(255,255,255,.8)'
                //           },
                //     data: ['数量', '百分比']
                // },
                xAxis: [
                    {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLabel: {
                          textStyle: {
                            color: 'rgba(255,255,255,.8)'
                          }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '数量（头）',
                         axisTick: { show: false },
                         nameTextStyle:{
                         color:"rgba(255,255,255,.8)", 
                        },
                          min: 0,
                        max: 1000,
                        interval: 200,
                         axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.8)'
                    }
                },
                 splitLine: { // 刻度
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                        axisLabel: {
                           textStyle: {
                            color: 'rgba(255,255,255,.8)'
                          },
                            formatter: '{value}'
                        }
                    },
                //     {
                //         type: 'value',
                //         name: '百分比',
                //          nameTextStyle:{
                //          color:"rgba(255,255,255,.8)", 
                //         },
                //          splitLine: {
                //     lineStyle: {
                //         color: 'rgba(255,255,255,.1)'
                //     }
                // },
                //        min: 0,
                //         max: 100,
                //         interval: 20,
                //          axisLine: {
                //     lineStyle: {
                //         color: 'rgba(255,255,255,.1)'
                //     }
                // },
                //         axisLabel: {
                //            textStyle: {
                //             color: 'rgba(255,255,255,.8)'
                //           },
                //             formatter: '{value} %'
                //         }
                //     }
                ],
                series: [
                    {
                        name: '数量',
                        type: 'bar',
                          itemStyle:{
                                    normal:{
                                        barBorderRadius: [20,20,0,0],

                                        color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[
                                        {offset: 0,color: '#0BA82C'},{offset: 1, color: '#4FF778'}
                                      ])
                                    }
                                },
                                  data: [20, 49, 70, 232, 256, 767, 136, 162, 36, 200, 64, 33]
                         },
                  
                    // {
                    //    smooth: true,

                    //     name: '百分比',
                    //     type: 'line',
                    //     yAxisIndex: 1,
                    //      itemStyle:{
                    //                 normal:{
                    //                     color:'#37A2FF'
                    //                 }
                    //             },
                    //         data: [20, 22, 33, 45, 63, 52, 43, 34, 20, 16, 12, 6]

                    // }
                ]
            }
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
        // legend: {
             
        //   textStyle: {
        //     fontSize:titleFontSize/2
        //   }
        // }
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