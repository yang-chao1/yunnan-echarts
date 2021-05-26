<template>
  <div class="com-container">
    <div class="datatime">
      <ul>
        <li
          @click="handLi(index)"
          :key="index"
          v-for="(item, index) in animalList"
          :class="[index == changed ? 'nav_active' : 'nav_ho']"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="com-chart" ref="hot_ref"></div>
  </div>
</template>

<script>
import getmonth from "@/utils/getmonth";
import getyear from "@/utils/getyear";
export default {
  data() {
    return {
      changed: 0,
      animalList: ["全部", "商品猪", "仔猪", "种猪", "其它猪"],

      chartInstance: null,
    };
  },
  mounted() {
    this.initChart();
    window.addEventListener("resize", this.screenAdapter);
    this.screenAdapter();
  },
  methods: {
    handLi(index) {
      this.changed = index;
      this.updateChart();
      this.screenAdapter();
    },
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.hot_ref);
      const initOption = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 255, 233,0)",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(255, 255, 255,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 255, 233,0)",
                  },
                ],
                global: false,
              },
            },
          },
        },
        grid: {
          top: "27%",
          left: "7%",
          right: "5%",
          bottom: "8%",
          // containLabel: true
        },
        legend: {
          top: "17%",
          data: ["非跨州市", "跨州市"],
         
          textStyle: {
            color: "rgba(255,255,255,.8)",
            fontSize: "12",
          },
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              show: true,
            },
            splitArea: {
              // show: true,
              color: "#f00",
              lineStyle: {
                color: "#f00",
              },
            },
            axisLabel: {
              color: "#fff",
            },
            splitLine: {
              show: false,
            },
            boundaryGap: false,
            data: getmonth(),
          },
        ],

        yAxis: [
          {
            type: "value",

            name: `数量（${this.$store.state.unit}）`,
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,0.1)",
              },
            },
            axisLine: {
              lineStyle: {
                width: 1,
                color: "rgba(255,255,255,.8)",
              },
            },
            axisLabel: {
              margin: 5,
              textStyle: {
                color: "rgba(255,255,255,.8)",
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "跨州市",
            type: "line",
            smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: "circle",
            symbolSize: 15,
            lineStyle: {
              normal: {
                color: "#00b3f4",
                shadowColor: "rgba(0, 0, 0, .8)",
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5,
              },
            },
            label: {
              show: false,
              position: "top",
              textStyle: {
                color: "#00b3f4",
              },
            },
            itemStyle: {
              color: "#00b3f4",
              borderColor: "#fff",
              borderWidth: 3,
              shadowColor: "rgba(0, 0, 0, .8)",
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2,
            },

            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0,179,244,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(0,179,244,0)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0,179,244, 0.9)",
                shadowBlur: 20,
              },
            },
            data: [
              12502,
              23205,
              12332,
              11281,
              12398,
              10214,
              11502,
              11205,
              12332,
              10281,
              11398,
              12214,
            ],
          },
          {
            name: "非跨州市",
            type: "line",
            smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: "circle",
            symbolSize: 15,
            lineStyle: {
              normal: {
                color: "#00ca95",
                shadowColor: "rgba(0, 0, 0, .3)",
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5,
              },
            },
            label: {
              show: false,
              position: "top",
              textStyle: {
                color: "#00ca95",
              },
            },

            itemStyle: {
              color: "#00ca95",
              borderColor: "#fff",
              borderWidth: 3,
              shadowColor: "rgba(0, 0, 0, .3)",
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2,
            },

            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0,202,149,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(0,202,149,0)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0,202,149, 0.9)",
                shadowBlur: 20,
              },
            },
            data: [
              11281,
              12398,
              11214,
              12179,
              11289,
              12356,
              11281,
              12398,
              11214,
              12179,
              11289,
              10356,
            ],
          },
        ],
      };
      this.chartInstance.setOption(initOption);
      // console.log(this.chartInstance)
    },
     updateChart() {
      this.chartInstance = this.$echarts.init(this.$refs.hot_ref);
      const initOption = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 255, 233,0)",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(255, 255, 255,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 255, 233,0)",
                  },
                ],
                global: false,
              },
            },
          },
        },
        grid: {
          top: "27%",
          left: "7%",
          right: "5%",
          bottom: "8%",
          // containLabel: true
        },
        legend: {
          top: "17%",
          data: ["非跨州市", "跨州市"],
         
          textStyle: {
            color: "rgba(255,255,255,.8)",
            fontSize: "12",
          },
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              show: true,
            },
            splitArea: {
              // show: true,
              color: "#f00",
              lineStyle: {
                color: "#f00",
              },
            },
            axisLabel: {
              color: "#fff",
            },
            splitLine: {
              show: false,
            },
            boundaryGap: false,
            data: getmonth(),
          },
        ],

        yAxis: [
          {
            type: "value",

            name: `数量（${this.$store.state.unit}）`,
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,0.1)",
              },
            },
            axisLine: {
              lineStyle: {
                width: 1,
                color: "rgba(255,255,255,.8)",
              },
            },
            axisLabel: {
              margin: 5,
              textStyle: {
                color: "rgba(255,255,255,.8)",
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "跨州市",
            type: "line",
            smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: "circle",
            symbolSize: 15,
            lineStyle: {
              normal: {
                color: "#00b3f4",
                shadowColor: "rgba(0, 0, 0, .8)",
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5,
              },
            },
            label: {
              show: false,
              position: "top",
              textStyle: {
                color: "#00b3f4",
              },
            },
            itemStyle: {
              color: "#00b3f4",
              borderColor: "#fff",
              borderWidth: 3,
              shadowColor: "rgba(0, 0, 0, .8)",
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2,
            },

            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0,179,244,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(0,179,244,0)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0,179,244, 0.9)",
                shadowBlur: 20,
              },
            },
            data: [
              12502,
              23205,
              12332,
              11281,
              12398,
              10214,
              11502,
              11205,
              12332,
              10281,
              11398,
              12214,
            ].map(item=>item+Math.round(Math.random() * 1000)),
          },
          {
            name: "非跨州市",
            type: "line",
            smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: "circle",
            symbolSize: 15,
            lineStyle: {
              normal: {
                color: "#00ca95",
                shadowColor: "rgba(0, 0, 0, .3)",
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5,
              },
            },
            label: {
              show: false,
              position: "top",
              textStyle: {
                color: "#00ca95",
              },
            },

            itemStyle: {
              color: "#00ca95",
              borderColor: "#fff",
              borderWidth: 3,
              shadowColor: "rgba(0, 0, 0, .3)",
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2,
            },

            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0,202,149,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(0,202,149,0)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0,202,149, 0.9)",
                shadowBlur: 20,
              },
            },
            data: [
              11281,
              12398,
              11214,
              12179,
              11289,
              12356,
              11281,
              12398,
              11214,
              12179,
              11289,
              10356,
            ],
          },
        ],
      };
      this.chartInstance.setOption(initOption);
      // console.log(this.chartInstance)
    },
    screenAdapter() {
      const titleFontSize = (this.$refs.hot_ref.offsetWidth / 70) * 3;

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
        yAxis: [
          {
            name: `数量（${this.$store.state.unit}）`,
          },
        ],
      };
      this.chartInstance.setOption(adapterOption);
      this.chartInstance.resize();
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
.datatime {
  position: absolute;
  top: 8%;
  width: 100%;
  display: flex;
  z-index: 101;
  justify-content: center;
}
.datatime ul {
  flex: 60%;
  display: flex;

  justify-content: space-evenly;
}
.datatime ul li {
  color: #fff;
  padding: 3px;
  width: 80px;
  text-align: center;
  cursor: pointer;
}
.nav_active {
  /* border-bottom: 4px solid #4b8df8; */
  box-shadow: -10px 0px 10px #4b8df8 inset, 0px -10px 10px #4b8df8 inset,
    10px 0px 10px #4b8df8 inset, 0px 10px 10px #4b8df8 inset;

  box-sizing: border-box;
}
.nav_ho {
  box-shadow: -10px 0px 15px #3e4e68 inset, 0px -10px 15px #3e4e68 inset,
    10px 0px 15px #3e4e68 inset, 0px 10px 15px #3e4e68 inset;

  box-sizing: border-box;
}
</style>