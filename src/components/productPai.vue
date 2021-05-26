<template>
  <div class="com-container">
    <!-- <div  class="but">
      <button @click="ani" :class="[isPai?'button':'button1']">动物排名</button>
      <button @click="pai" :class="[!isPai?'button':'button1']">产品排名</button>
    </div> -->
    <div class="com-chart" ref="hot_ref"></div>
  </div>
</template>

<script>
var arr = [
  "昆明市",
  "曲靖市",
  "玉溪市",
  "保山市",
  "昭通市",
  "临沧市",
  "文山州",
  "红河州",
  "楚雄州",
  "大理州",
  "丽江市",
  "普洱市",
  "德宏州",
  "怒江州",
  "迪庆州",
  "西双版纳州",
];

import Bus from "@/utils/bus";
export default {
  data() {
    return {
      isPai: true,
      istrue: false,
      chartInstance: null,
      numArr: [
        600,
        790,
        900,
        1320,
        2560,
        2670,
        3060,
        3520,
        3660,
        3800,
        3990,
        4380,
        4670,
        5540,
        6340,
        7210,
      ],
    };
  },
  mounted() {
    this.initChart();
    window.addEventListener("resize", this.screenAdapter);
    this.screenAdapter();
    Bus.$on("getdata", (msg) => {
      console.log(msg);
      this.updateChart();
    });
  },
    destroyed() {
     window.removeEventListener('resize',this.screenAdapter)
     
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.hot_ref);
      const initOption = {
        grid: {
          top: 20, //距离容器上边界40像素
          bottom: 40, //距离容器下边界30像素
          left: 130,
          right: 75,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
          formatter: "{b}</br>数量: {c}",
        },

        legend: {
          show: false,
          top: "2%",
          textStyle: {
            color: "rgba(255,255,255,.8)",
          },
          data: ["动物A/B证合计数"],
        },
        xAxis: [
          {
            type: "value",
            name: `数量（${this.$store.state.unit}）`,
            nameTextStyle: {
              color: "rgba(255,255,255,.8)",
            },
            axisTick: { show: false },
            min: 0,
            // max: 1000,
            // interval: 200,

            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.8)",
              },
              formatter: "{value}",
            },
            splitLine: {
              // 刻度
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "category",
            data: arr,
            axisPointer: {
              type: "shadow",
            },
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.8)",
              },
            },
          },
        ],
        series: [
          {
            name: "动物A/B证合计数",
            type: "bar",
            itemStyle: {
              normal: {
                barBorderRadius: [0, 10, 10, 0],
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: "#3B80E2" },
                  { offset: 1, color: "#49BEE5" },
                ]),
              },
            },
            data: this.numArr,
          },
          // {
          //     name: '产品A/B证合计',
          //     type: 'bar',
          //       itemStyle:{
          //                 normal:{
          //                     barBorderRadius: [0,10,10,0],
          //                        color:  new this.$echarts.graphic.LinearGradient(0,0,1,0,[
          //                     {offset: 0,color: '#5052EE'},{offset: 1, color: '#AB6EE5'}
          //                   ])
          //                 }
          //             },
          //               xAxisIndex: 1,
          //     data: [20, 49, 70, 232, 256, 767, 136, 162, 36, 200, 64, 33,767, 136, 162, 36]
          // },
        ],
      };
      this.chartInstance.setOption(initOption);
      // console.log(this.chartInstance)
       this.chartInstance.on('mouseover',()=>{
       this.$emit('clearTime')
      })
      this.chartInstance.on('mouseout',()=>{
        this.$emit('getTime')
      })
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
        xAxis: [
          {
            name: `数量（${this.$store.state.unit}）`,
          },
        ],
      };
      this.chartInstance.setOption(adapterOption);
      this.chartInstance.resize();
    },
    updateChart() {
      this.istrue = !this.istrue;
      this.numArr = this.numArr.map((item) => {
        if (this.istrue) {
          return item - 20;
        } else {
          return item + 20;
        }
      });

      var obj = {
        name: "动物A/B证合计数",
        type: "bar",
        itemStyle: {
          normal: {
            barBorderRadius: [0, 10, 10, 0],
            color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: "#5052EE" },
              { offset: 1, color: "#AB6EE5" },
            ]),
          },
        },
        data: this.numArr,
      };
      const dataOption = {
        series: [obj],
      };
      this.chartInstance.setOption(dataOption);
    },
    updateYear() {
      console.log("updateYear");
    },
    ani() {
      if(!this.isPai) {
        this.isPai = true
        this.initChart()
      }
     
    },
    pai() {
       
        const updateChart = {
        xAxis: [
          {
            type: "value",
            name: `数量（吨）`,
            nameTextStyle: {
              color: "rgba(255,255,255,.8)",
            },
            axisTick: { show: false },
            min: 0,
            // max: 1000,
            // interval: 200,

            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.8)",
              },
              formatter: "{value}",
            },
            splitLine: {
              // 刻度
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
          },
        ],
         series: [
          {
            name: "动物A/B证合计数",
            type: "bar",
            itemStyle: {
              normal: {
                barBorderRadius: [0, 10, 10, 0],
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: "#3B80E2" },
                  { offset: 1, color: "#49BEE5" },
                ]),
              },
            },
            data: this.numArr.map(item =>item/10-17),
          },
         ]
      };
      this.chartInstance.setOption(updateChart);
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
 margin-top: 20px;
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
  background: #4b8df8;
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