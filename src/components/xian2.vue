<template>
  <div class="com-container">
    
       <div class="com-chart" ref="hot_ref"></div>
  </div>
</template>

<script>
import getyear from "@/utils/getyear"
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
	color:['#f0c725','#16f892'],
  
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['非跨州市', '跨州市'],
        x: 'center',
		top:'7%',
        textStyle: {
			color:'#c1cadf',
			"fontSize": 10
		}
    },
    grid: {
		left: '6%',
		right: '4%',
		top:'17%',
		bottom: '1%',
		containLabel: true
	},
    toolbox: {
        show : true,
        orient: 'vertical',
        x: 'right',
        y: 'center'
    },
    xAxis : [
        {
            type : 'category',
			boundaryGap: false,
                 data: getmonth(),

          axisLine:{
				lineStyle:{
					color:'rgba(240,199,37,0.5)'
				}
			},
            axisLabel :{  
                interval:0,
			
				color:'#c1cadf'
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
			name: '数量（吨）',
			nameTextStyle:{
				color:'#c1cadf',
				align:'right',
				lineHeight:10
			},
			axisLine:{
				lineStyle:{
					color:'rgba(240,199,37,0.5)'
				}
			},
            axisLabel :{  
                interval:0,
				color:'#c1cadf'
            },
			splitLine: {
				show: false
			}
        }
    ],
    series : [
        {
            name:'非跨州市',
            type:'line',
			smooth: true,
			symbolSize: 8,
			areaStyle: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(240,199,37,0.5)'
				}, {
					offset: 1,
					color: 'rgba(240,199,37,0.01)'
				}])
			},
            data:[30,54,132,225,261,313,150,118,152,222,226,131,],
            barWidth: '30%',
            itemStyle:{ normal:{ color:'#f0c725' } }
        },{
            name:'跨州市',
            type:'line',
			smooth: true,
			symbolSize: 8,
			areaStyle: {
				color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(22,248,146,0.5)'
				}, {
					offset: 1,
					color: 'rgba(22,248,146,0.01)'
				}])
			},
            data:[534,123,320,227,342,411,358,313,215,327,342,311,198,],
            barWidth: '30%',
            itemStyle:{ normal:{ color:'#16f892' } }
        }
        
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