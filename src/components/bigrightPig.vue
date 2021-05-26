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
    <div ref="righttree_ref" class="com-chart"></div>
    <div ref="righttree_ref1" class="com-chart"></div>
    <!-- <div ref="righttree_ref2" class="com-chart"></div>
    <div ref="righttree_ref3" class="com-chart"></div> -->
  </div>
</template>

<script>
var color = [
  "#00ffff",
  "#00cfff",
  "#006ced",
  "#ffe000",
  "#ffa800",
  "#ff5b00",
  "#ff3000",
  "#00ffff",
  "#00cfff",
  "#006ced",
  "#ffe000",
  "#ffa800",
  "#ff5b00",
  "#ff3000",
  "#00ffff",
  "#00cfff",
  "#006ced",
  "#ffe000",
  "#ffa800",
  "#ff5b00",
  "#ff3000",
];
export default {
  data() {
    return {
      changed: 0,
      animalList: ["全部", "商品猪", "仔猪", "种猪", "其它猪"],
      chartInstance: null,
      chartInstance1: null,
      chartInstance2: null,
      chartInstance3: null,
      colorList: [
        "rgba(50,123,250,0.7)",
        "rgba(181, 195, 52,0.7)",
        "rgba(252, 206, 16,0.7)",
        "rgba(232, 124, 37,0.7)",
        "rgba(39, 114, 123,0.7)",
        "rgba(128, 0, 0,0.7)",
        "rgba(220, 20, 60,0.7)",
        "rgba(199, 21, 133,0.7)",
        "rgba(75, 0, 130,0.7)",
        "rgba(153, 50, 204,0.7)",
        "rgba(255, 228, 181,0.7)",
        "rgba(102, 226, 164,0.7)",
        "rgba(205, 133, 63,0.7)",
        "rgba(153, 50, 204,0.7)",
        "rgba(34, 139, 34,0.7)",
      ],
      colorList1: [
        "rgba(50,123,250,1)",
        "rgba(181, 195, 52,1)",
        "rgba(252, 206, 16,1)",
        "rgba(232, 124, 37,1)",
        "rgba(39, 114, 123,1)",
        "rgba(128, 0, 0,1)",
        "rgba(220, 20, 60,1)",
        "rgba(199, 21, 133,1)",
        "rgba(75, 0, 130,1)",
        "rgba(153, 50, 204,1)",
        "rgba(255, 228, 181,1)",
        "rgba(102, 226, 164,1)",
        "rgba(205, 133, 63,1)",
        "rgba(153, 50, 204,1)",
        "rgba(34, 139, 34,1)",
      ],
      shi: [
        {
          value: 115,
          label: "昆明市",
        },
        {
          value: 19,
          label: "曲靖市",
        },
        {
          value: 23,
          label: "昭通市",
        },
        {
          value: 43,
          label: "德宏州",
        },
        {
          value: 34,
          label: "迪庆州",
        },
        {
          value: 53,
          label: "大理州",
        },
        {
          value: 12,
          label: "玉溪市",
        },
        {
          value: 34,
          label: "临沧市",
        },
        {
          value: 34,
          label: "保山市",
        },
        {
          value: 34,
          label: "丽江市",
        },
        {
          value: 7,
          label: "怒江州",
        },
        {
          value: 19,
          label: "普洱市",
        },
        {
          value: 23,
          label: "西双版纳州",
        },
        {
          value: 23,
          label: "楚雄州",
        },
        {
          value: 23,
          label: "红河州",
        },
        {
          value: 23,
          label: "文山州",
        },
      ],
    };
  },
  mounted() {
    this.initChart();
    this.initChart1();
    //  this.initChart2();
    // this.initChart3();
    window.addEventListener("resize", this.screenAdapter);
    this.screenAdapter();
  },
  methods: {
    handLi(index) {
      this.changed = index;
      this.updateChart()
       this.updateChart1()
         this.screenAdapter();
    },
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.righttree_ref);
      const data = this.shi.map((item, i) => {
        return {
          name: item.label,
          value: item.value,
          itemStyle: {
            normal: {
              borderWidth: 5,
              shadowBlur: 20,
              borderColor: color[i],
              shadowColor: color[i],
            },
          },
        };
      });
      var seriesOption = [
        {
          name: "",
          type: "pie",
          clockWise: false,
          radius: ["20%", "40%"],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "outside",
                color: "rgba(250,250,250,0.8)",
                fontSize: 9,
              },
              labelLine: {
                show: true,
              },
            },
          },
          data: data,
        },
      ];
      const initOption = {
        color: color,
        title: {
          text: "调入动物产品数量分布",
          x: "center",
          y: "85%",
          textStyle: {
            color: "#fff",
            fontSize: 8,
          },
        },

        tooltip: {
          trigger: "item",
          formatter: "{b}: ({d}%)",
        },
        legend: {
          icon: "circle",
          orient: "horizontal",
          // x: 'left',
          show: false,
          right: 340,
          bottom: 150,
          align: "right",
          textStyle: {
            color: "#fff",
          },
          itemGap: 20,
        },
        toolbox: {
          show: false,
        },
        series: seriesOption,
      };
      this.chartInstance.setOption(initOption);
    },
    initChart1() {
      this.chartInstance1 = this.$echarts.init(this.$refs.righttree_ref1);
      const data = this.shi.map((item, i) => {
        return {
          name: item.label,
          value: item.value,
          itemStyle: {
            normal: {
              borderWidth: 5,
              shadowBlur: 20,
              borderColor: color[i],
              shadowColor: color[i],
            },
          },
        };
      });
      var seriesOption = [
        {
          name: "",
          type: "pie",
          clockWise: false,
          radius: ["20%", "40%"],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "outside",
                color: "rgba(250,250,250,0.8)",
                fontSize: 9,
              },
              labelLine: {
                length: 10,
                length2: 10,
                show: true,
                color: "#00ffff",
              },
            },
          },
          data: data,
        },
      ];
      const initOption = {
        color: color,
        title: {
          text: "调出动物产品数量分布",
          x: "center",
          y: "85%",
          textStyle: {
            color: "#fff",
            fontSize: 8,
          },
        },

        tooltip: {
          trigger: "item",
          formatter: "{b}:({d}%)",
        },
        legend: {
          icon: "circle",
          orient: "horizontal",
          // x: 'left',
          show: false,
          right: 340,
          bottom: 150,
          align: "right",
          textStyle: {
            color: "#fff",
          },
          itemGap: 20,
        },
        toolbox: {
          show: false,
        },
        series: seriesOption,
      };
      this.chartInstance1.setOption(initOption);
    },
     updateChart() {
      this.chartInstance = this.$echarts.init(this.$refs.righttree_ref);
      const data = this.shi.map((item, i) => {
        return {
          name: item.label,
          value: item.value+Math.round(Math.random() * 500),
          itemStyle: {
            normal: {
              borderWidth: 5,
              shadowBlur: 20,
              borderColor: color[i],
              shadowColor: color[i],
            },
          },
        };
      });
      var seriesOption = [
        {
          name: "",
          type: "pie",
          clockWise: false,
          radius: ["20%", "40%"],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "outside",
                color: "rgba(250,250,250,0.8)",
                fontSize: 9,
              },
              labelLine: {
                show: true,
              },
            },
          },
          data: data,
        },
      ];
      const initOption = {
        color: color,
        title: {
          text: "调入动物产品数量分布",
          x: "center",
          y: "85%",
          textStyle: {
            color: "#fff",
            fontSize: 8,
          },
        },

        tooltip: {
          trigger: "item",
          formatter: "{b}: ({d}%)",
        },
        legend: {
          icon: "circle",
          orient: "horizontal",
          // x: 'left',
          show: false,
          right: 340,
          bottom: 150,
          align: "right",
          textStyle: {
            color: "#fff",
          },
          itemGap: 20,
        },
        toolbox: {
          show: false,
        },
        series: seriesOption,
      };
      this.chartInstance.setOption(initOption);
    },
    updateChart1() {
      this.chartInstance1 = this.$echarts.init(this.$refs.righttree_ref1);
      const data = this.shi.map((item, i) => {
        return {
          name: item.label,
          value: item.value+Math.round(Math.random() * 500),
          itemStyle: {
            normal: {
              borderWidth: 5,
              shadowBlur: 20,
              borderColor: color[i],
              shadowColor: color[i],
            },
          },
        };
      });
      var seriesOption = [
        {
          name: "",
          type: "pie",
          clockWise: false,
          radius: ["20%", "40%"],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "outside",
                color: "rgba(250,250,250,0.8)",
                fontSize: 9,
              },
              labelLine: {
                length: 10,
                length2: 10,
                show: true,
                color: "#00ffff",
              },
            },
          },
          data: data,
        },
      ];
      const initOption = {
        color: color,
        title: {
          text: "调出动物产品数量分布",
          x: "center",
          y: "85%",
          textStyle: {
            color: "#fff",
            fontSize: 8,
          },
        },

        tooltip: {
          trigger: "item",
          formatter: "{b}:({d}%)",
        },
        legend: {
          icon: "circle",
          orient: "horizontal",
          // x: 'left',
          show: false,
          right: 340,
          bottom: 150,
          align: "right",
          textStyle: {
            color: "#fff",
          },
          itemGap: 20,
        },
        toolbox: {
          show: false,
        },
        series: seriesOption,
      };
      this.chartInstance1.setOption(initOption);
    },

    screenAdapter() {
      const titleFontSize = (this.$refs.righttree_ref.offsetWidth / 100) * 7;

      const adapterOption = {
        title: {
          textStyle: {
            fontSize: titleFontSize / 1.5,
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
  /* flex-wrap: wrap;
  justify-content: start; */
}
.com-chart {
  flex: 100%;
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