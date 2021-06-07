<template>
  <div class="com-container">
    <div ref="righttree_ref" class="com-chart"></div>
    <div ref="righttree_ref1" class="com-chart"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartInstance: null,
      chartInstance1: null,
      sericeData: [
        {
          name: "屠宰",
          value: 70,
          itemStyle: { color: "#0BA82C" }, // 颜色
        },
        {
          name: "饲养",
          value: 68,
          itemStyle: { color: "#2E72BF" }, // 颜色
        },
        {
          name: "种用",
          value: 48,
          itemStyle: { color: "#23E5E5" }, // 颜色
        },
      ],
      sericeData1: [
        {
          name: "屠宰",
          value: 70,
          itemStyle: { color: "#0BA82C" }, // 颜色
        },
        {
          name: "饲养",
          value: 68,
          itemStyle: { color: "#2E72BF" }, // 颜色
        },
        {
          name: "种用",
          value: 48,
          itemStyle: { color: "#23E5E5" }, // 颜色
        },
      ],
    };
  },
  mounted() {
    this.initChart();
     this.initChart1();
    window.addEventListener("resize", this.screenAdapter);
    this.screenAdapter();
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.righttree_ref);
      const initOption = {
            tooltip: {
                trigger: 'item',
               formatter: "{b} : {c} ({d}%)"
            },
            legend: {
			
				top:'7%',
                data: ['图例1', '图例2', '图例3', '图例4', '图例5'],
                icon: 'circle',
                textStyle: {
                    color: 'rgba(255,255,255,.8)',
                }
            },
            calculable: true,
            series: [{
                name: '',
				color: ['#62c98d', '#2f89cf', '#4cb9cf', '#53b666', '#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9','#c96262'],	
                type: 'pie',
                //起始角度，支持范围[0, 360]
                startAngle: 0,
                //饼图的半径，数组的第一项是内半径，第二项是外半径
                radius: [51, 100],
                //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                center: ['50%', '45%'],
				
                //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                //  'area' 所有扇区面积相同，仅通过半径展现数据大小
                roseType: 'area',
                //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                      //  formatter: '{c}辆'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length2: 1,
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [
                    {value: 1,name: '图例1',},
                    {value: 4,name: '图例2',},
                    {value: 5,name: '图例3',},
                    {value: 6,name: '图例4',},
                    {value: 9,name: '图例5',},
         
                   

                    {value: 0, name: "",label: {show: false},labelLine: {show: false}},
                    {value: 0, name: "",label: {show: false},labelLine: {show: false}},
                    {value: 0, name: "",label: {show: false},labelLine: {show: false}},
                    {value: 0, name: "",label: {show: false},labelLine: {show: false}},
                    {value: 0, name: "",label: {show: false},labelLine: {show: false}},

                   
                ]
            }]
        };
      this.chartInstance.setOption(initOption);
    
    },
    initChart1() {
      this.chartInstance1 = this.$echarts.init(this.$refs.righttree_ref1);
      const initOption = {
            tooltip: {
                trigger: 'item',
               formatter: "{b} : {c} ({d}%)"
            },
            legend: {
			
				top:'7%',
                data: ['图例1', '图例2','图例3','图例4','图例5'],
                icon: 'circle',
                textStyle: {
                    color: 'rgba(255,255,255,.8)',
                }
            },
            calculable: true,
            series: [{
                name: '',
				color: ['#62c98d', '#2f89cf', '#4cb9cf', '#53b666', '#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9','#c96262'],	
                type: 'pie',
                //起始角度，支持范围[0, 360]
                startAngle: 0,
                //饼图的半径，数组的第一项是内半径，第二项是外半径
                radius: [51, 100],
                //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                center: ['50%', '45%'],
				
                //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                //  'area' 所有扇区面积相同，仅通过半径展现数据大小
                roseType: 'area',
                //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                      //  formatter: '{c}辆'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length2: 1,
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [
                    {value: 1,name: '图例1',},
                    {value:9,name: '图例2',},
                    {value: 5,name: '图例3',},
                    {value: 6,name: '图例4',},
                    {value: 9,name: '图例5',},
         
                 
                    {value: 0, name: "",label: {show: false},labelLine: {show: false}},
                    {value: 0, name: "",label: {show: false},labelLine: {show: false}},
                    {value: 0, name: "",label: {show: false},labelLine: {show: false}},
                    {value: 0, name: "",label: {show: false},labelLine: {show: false}},
                    {value: 0, name: "",label: {show: false},labelLine: {show: false}},

                   
                ]
            }]
        };
      this.chartInstance1.setOption(initOption);
    
    },
    screenAdapter() {
      const titleFontSize = (this.$refs.righttree_ref.offsetWidth / 100) * 7;

      const adapterOption = {
        title: {
          textStyle: {
            fontSize: titleFontSize,
          },
        },
        legend: {
          textStyle: {
            fontSize: titleFontSize / 2,
          },
        },
      };
      this.chartInstance.setOption(adapterOption);
      this.chartInstance1.setOption(adapterOption);

      this.chartInstance.resize();
       this.chartInstance1.resize();
    },
  },
};
</script>

<style scoped>
.com-container {
    display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.com-chart {
    flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>