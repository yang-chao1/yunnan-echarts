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
        top : 60,    //距离容器上边界40像素
        bottom: 30,   //距离容器下边界30像素
        left:130,
        right:70

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
             
                legend: {
                   top:'2%',
                   textStyle: {
                            color: 'rgba(255,255,255,.8)'
                          },
                    data: ['动物A/B证合计数', '产品A/B证合计']
                },
                xAxis: [
                  
                     {
                        type: 'value',
                        name: '数量（吨）',
                         nameTextStyle:{
                         color:"rgba(255,255,255,.8)", 
                        },
                         axisTick: { show: false },
                        min: 0,
                        // max: 1000,
                        // interval: 200,
                        
                        axisLabel: {
                           textStyle: {
                            color: 'rgba(255,255,255,.8)'
                          },
                            formatter: '{value}'
                        },
                        splitLine: { // 刻度
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                    },
                     {
                        type: 'value',
                        name: '数量（头）',
                         nameTextStyle:{
                         color:"rgba(255,255,255,.8)", 
                        },
                        min: 0,
                        // max: 1000,
                        // interval: 200,
                        
                        axisLabel: {
                           textStyle: {
                            color: 'rgba(255,255,255,.8)'
                          },
                            formatter: '{value}'
                        },
                        splitLine: { // 刻度
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                    },
                ],
                yAxis: [
                      {
                        type: 'category',
                        data: [
                          "昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "临沧市",
                           "文山州", "红河州", "楚雄州", "大理州",
                            "丽江市", "普洱市", "德宏州", "怒江州",
                          "迪庆州", "西双版纳州", 
                        ],
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
                series: [
                    {
                        name: '动物A/B证合计数',
                        type: 'bar',
                          itemStyle:{
                                    normal:{
                                        barBorderRadius: [0,10,10,0],
                                       color:new this.$echarts.graphic.LinearGradient(0,0,1,0,[
                                        {offset: 0,color: '#0BA82C'},{offset: 1, color: '#4FF778'}
                                      ])
                                    }
                                },
            data: [20, 49, 70, 232, 256, 767, 136, 162, 36, 200, 64, 33,767, 136, 162, 36]
                    },
                    {
                        name: '产品A/B证合计',
                        type: 'bar',
                          itemStyle:{
                                    normal:{
                                        barBorderRadius: [0,10,10,0],
                                           color:  new this.$echarts.graphic.LinearGradient(0,0,1,0,[
                                        {offset: 0,color: '#5052EE'},{offset: 1, color: '#AB6EE5'}
                                      ])
                                    }
                                },
                                  xAxisIndex: 1,
                        data: [20, 49, 70, 232, 256, 767, 136, 162, 36, 200, 64, 33,767, 136, 162, 36]
                    },
                   
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
        legend: {
             
          textStyle: {
            fontSize:titleFontSize/2
          }
        }
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
  margin-top: 20px;
  overflow: hidden;
}

</style>