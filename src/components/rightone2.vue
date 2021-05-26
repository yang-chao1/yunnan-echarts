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
    };
  },
  mounted() {
    this.initChart();
    window.addEventListener("resize", this.screenAdapter);
    this.screenAdapter();
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.hot_ref);
      // console.log( this.chartInstance )
      const initOption = {
        color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
        grid: {
        top : 40,    //距离容器上边界40像素
                    bottom: 10,   //距离容器下边界30像素
                    left:10,
                    right:20,
        containLabel: true
    },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
           top: '7%',
          data: ["调入", "调出"],
           textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
        },
        
       
        xAxis: [
          { axisTick: {
            show: true
            },
            axisLabel: {
                          textStyle: {
                            color: 'rgba(255,255,255,.8)'
                          }
                        },
            type: "category",
            boundaryGap: false,
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],

          },
        ],
        yAxis: [
          {splitLine: { show: false }, //去除网格线
            type: "value",
              name: '数量（头）',
             nameTextStyle:{
                         color:"rgba(255,255,255,.8)", 
                        },
                         axisLabel: {
            textStyle: {
                            color: 'rgba(255,255,255,.8)'
                          },
          
        }
          },
        ],
        series: [
          {
            name: "调入",
            type: "line",
            stack: "总量",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(55, 162, 255)'
                }, {
                    offset: 1,
                    color: 'rgba(116, 21, 219)'
                }])
            },
            emphasis: {
              focus: "series",
            },
            data: [140, 232, 101, 264, 90, 140, 232, 101, 264, 90, 340, 250],
          },
          {
            name: "调出",
            type: "line",
            stack: "总量",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 191, 0)'
                }, {
                    offset: 1,
                    color: 'rgba(224, 62, 76)'
                }])
            },
            emphasis: {
              focus: "series",
            },
            data: [120, 282, 111, 234, 220, 340, 310,120, 282, 111, 234, 220],
          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },
    screenAdapter() {
      const titleFontSize = (this.$refs.hot_ref.offsetWidth / 100) * 3;

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
      this.chartInstance.resize();
    },
  },
};
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