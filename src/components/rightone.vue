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
        trigger: 'axis'
    },
    legend: {
         top:'7%',
                   textStyle: {
                            color: '#FFF'
                          },
        data: ['最高气温', '最低气温']
    },
    
    xAxis: {
      
        axisLabel: {
                          textStyle: {
                            color: '#FFF'
                          }
                        },
        type: 'category',
        boundaryGap: false,
        name: '时间',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
       nameTextStyle:{
                         color:"#FFF", 
                        },
        axisLabel: {
            textStyle: {
                            color: '#FFF'
                          },
            formatter: '{value} °C'
        }
    },
    series: [
        {
            
            name: '最高气温',
            type: 'line',
             itemStyle:{
                                    normal:{
                                        color:'#4ad2ff'
                                    }
                                },
            data: [11, 11, 15, 13, 12, 13, 10],
            // markPoint: {
            //     data: [
            //         {type: 'max', name: '最大值'},
            //         {type: 'min', name: '最小值'}
            //     ]
            // },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
              itemStyle:{
                                    normal:{
                                        color:'#FF0087'
                                    }
                                },
            name: '最低气温',
            type: 'line',
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
                data: [
                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'},
                    [{
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                    }, {
                        symbol: 'circle',
                        label: {
                            position: 'start',
                            formatter: '最大值'
                        },
                        type: 'max',
                        name: '最高点'
                    }]
                ]
            }
        }
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
  overflow: hidden;
}

</style>