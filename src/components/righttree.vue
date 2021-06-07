<template>
  <div class="com-container">
     <div ref="righttree_ref" class="com-chart"></div>
      
  </div>
</template>

<script>
export default {
      data() {
            return {
            chartInstance: null,
           sericeData: [
                    {
                    name: '屠宰',
                    value: 70,
                    itemStyle: { color: '#0BA82C' } // 颜色
                    }, {
                    name: '饲养',
                    value: 68,
                    itemStyle: { color: '#2E72BF' } // 颜色
                    }, {
                    name: '种用',
                    value: 48,
                    itemStyle: { color: '#23E5E5' } // 颜色
                    }
                ]
            }
        },
    mounted() {
      this.initChart()
      window.addEventListener('resize',this.screenAdapter)
      this.screenAdapter()
    },
    methods: {
        initChart() {
       
           this.chartInstance  = this.$echarts.init(this.$refs.righttree_ref)
         const initOption = {
       
        tooltip: {
          show: true,
          trigger: 'item',
          formatter: '{b} {c} ({d}%)'
        },
        legend: {
             textStyle: { //图例文字的样式
                            color: '#FFF',
                          
                        },
          orient: 'vertical',
          left: 90,
          top: 50,
          icon: 'circle'
        },
        series: [
          { type: 'pie',
            label: { show: false },
            center: ['50%', '55%'],
            radius: '80px',
            data: this.sericeData,
            emphasis: {
              label: {
                show: true
              },
              labelLine: { show: false }
            }

          }

        ]
      }
              this.chartInstance.setOption(initOption)
              // console.log(this.chartInstance)
        },
            screenAdapter() {
       const titleFontSize = this.$refs.righttree_ref.offsetWidth /100*3

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