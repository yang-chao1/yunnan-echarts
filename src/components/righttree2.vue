<template>
  <div class="com-container">
    <div ref="righttree_ref" class="com-chart"></div>
    <div ref="righttree_ref1" class="com-chart"></div>
    <!-- <div ref="righttree_ref2" class="com-chart"></div>
    <div ref="righttree_ref3" class="com-chart"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartInstance: null,
      chartInstance1: null,
      chartInstance2: null,
      chartInstance3: null,
      colorList: [
       "#CE364F",
        "#F55233",
        "#F97731",
        "#FEA12A",
        "#F2C548",
        "#F6E442",
        "#D6D041",
        "#6FAC53",
        "#2293D1",
        "#486DB4",
        "#564798",
        "#8B54A3",
        "#D66251",
        "rgba(153, 50, 204,1)",
        "rgba(34, 139, 34,1)",
      ],
      colorList1: [
         "#CE364F",
        "#F55233",
        "#F97731",
        "#FEA12A",
        "#F2C548",
        "#F6E442",
        "#D6D041",
        "#6FAC53",
        "#2293D1",
        "#486DB4",
        "#564798",
        "#8B54A3",
        "#D66251",
        "rgba(153, 50, 204,1)",
        "rgba(34, 139, 34,1)",
      ],
      shi: [
        {
          value: 15,
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
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.righttree_ref);
      const data = this.shi.map((item, index) => {
        return {
          name: item.label,
          value: item.value,
          itemStyle: {
            color: this.colorList[index],
            borderColor: this.colorList1[index],
            borderWidth: 3,
          },
        };
      });
    const initOption = {
        legend: {
          show: false,
          orient: "vertical",
          top: "center",
          right: "5%",
          // data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7'],
          textStyle: {
            color: "#fff",
            fontSize: 16,
          },
        },
        title: {
          text: "非跨州市调运分布",
          x: "center",
          y: "85%",
          textStyle: {
            color: "#fff",
            fontSize: 8,
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} :  ({d}%)",
        },
        series: {
          // name: '半径模式',
          type: "pie",
          radius: ["20%", "40%"],
          center: ["50%", "50%"],

          labelLine: {
            normal: {
              length: 10,
              length2: 10,
              color: "#00ffff",
            },
          },

          label: {
            show: true,
            normal: {
              position: "outside",
              fontSize: 10,
              color: "rgba(250,250,250,0.8)",
            },
          },

          data: data,
        },
      };
      this.chartInstance.setOption(initOption);
    },
    initChart1() {
      const data = this.shi.map((item, index) => {
        return {
          name: item.label,
          value: item.value,
          itemStyle: {
            color: this.colorList[index],
            borderColor: this.colorList1[index],
            borderWidth: 3,
          },
        };
      });
      this.chartInstance1 = this.$echarts.init(this.$refs.righttree_ref1);
      const initOption = {
        legend: {
          show: false,
          orient: "vertical",
          top: "center",
          right: "5%",
          // data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7'],
          textStyle: {
            color: "#fff",
            fontSize: 16,
          },
        },
        title: {
          text: "跨州市调运分布",
          x: "center",
          y: "85%",
          textStyle: {
            color: "#fff",
            fontSize: 8,
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} :  ({d}%)",
        },
        series: {
          // name: '半径模式',
          type: "pie",
          radius: ["0", "40%"],
          center: ["50%", "50%"],

          labelLine: {
            normal: {
              length: 10,
              length2: 10,
              color: "#00ffff",
            },
          },

          label: {
            show: true,
            normal: {
              position: "outside",
              fontSize: 10,
              color: "rgba(250,250,250,0.8)",
            },
          },

          data: data,
        },
      };
      this.chartInstance1.setOption(initOption);
    },
    initChart2() {
      this.chartInstance2 = this.$echarts.init(this.$refs.righttree_ref2);
      const initOption = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "7%",
          left: "center",
          textStyle: {
            color: "#FFF",
          },
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: 1048,
                name: "动物A调入",
                itemStyle: { color: "#23E5E5" },
              },
              {
                value: 735,
                name: "动物A调出",
                itemStyle: { color: "#91CC75" },
              },
            ],
          },
        ],
      };
      this.chartInstance2.setOption(initOption);
    },
    initChart3() {
      this.chartInstance3 = this.$echarts.init(this.$refs.righttree_ref3);
      const initOption = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "7%",
          left: "center",
          textStyle: {
            color: "#FFF",
          },
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: 1048,
                name: "产品A调入",
                itemStyle: { color: "#23E5E5" },
              },
              {
                value: 735,
                name: "产品A调出",
                itemStyle: { color: "#91CC75" },
              },
            ],
          },
        ],
      };
      this.chartInstance3.setOption(initOption);
    },
    screenAdapter() {
      const titleFontSize = (this.$refs.righttree_ref.offsetWidth / 150) * 7;

      const adapterOption = {
          tooltip: {
        trigger: 'item',
         position: ['20%', '50%'],
        formatter: `{b}: ({d}%)`
    },
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
      // this.chartInstance2.setOption(adapterOption);
      //     this.chartInstance3.setOption(adapterOption);
      this.chartInstance.resize();
      this.chartInstance1.resize();
      //   this.chartInstance2.resize();
      // this.chartInstance3.resize();
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
</style>