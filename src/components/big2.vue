<template>
  <div class="com-container">
    <div ref="righttree_ref" class="com-chart"></div>
    <div ref="righttree_ref1" class="com-chart"></div>
    <!-- <div ref="righttree_ref2" class="com-chart"></div>
    <div ref="righttree_ref3" class="com-chart"></div> -->
  </div>
</template>

<script>
function randomData() {
  return Math.round(Math.random() * 100);
}
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
        { label: "昆明市", value: 23 },
        { label: "曲靖市", value: 123 },
        { label: "玉溪市", value: 45 },
        { label: "保山市", value: 23 },
        { label: "昭通市", value: 65 },
        { label: "临沧市", value: 213 },
        { label: "文山州", value: 123 },
        { label: "红河州", value: 543 },
        { label: "楚雄州", value: 123 },
        { label: "大理州", value: 231 },
        { label: "丽江市", value: 178 },
        { label: "普洱市", value: 123 },
        { label: "德宏州", value: 212 },
        { label: "怒江州", value: 123 },
        { label: "迪庆州", value: 123 },
        { label: "西双版纳州", value: 123 },
      ],

      s: [
        { label: "昆明市", value: 23 },
        { label: "曲靖市", value: 123 },
        { label: "玉溪市", value: 45 },
        { label: "保山市", value: 23 },
        { label: "昭通市", value: 65 },
        { label: "临沧市", value: 213 },
        { label: "文山州", value: 123 },
        { label: "红河州", value: 543 },
        { label: "楚雄州", value: 123 },
        { label: "大理州", value: 231 },
        { label: "丽江市", value: 178 },
        { label: "普洱市", value: 123 },
        { label: "德宏州", value: 212 },
        { label: "怒江州", value: 123 },
        { label: "迪庆州", value: 123 },
        { label: "西双版纳州", value: 123 },
      ],

      n: [
        { label: "昆明市", value: 23 },
        { label: "曲靖市", value: 123 },
        { label: "玉溪市", value: 45 },
        { label: "保山市", value: 23 },
        { label: "昭通市", value: 65 },
        { label: "临沧市", value: 213 },
        { label: "文山州", value: 123 },
        { label: "红河州", value: 543 },
        { label: "楚雄州", value: 123 },
        { label: "大理州", value: 231 },
        { label: "丽江市", value: 178 },
        { label: "普洱市", value: 123 },
        { label: "德宏州", value: 212 },
        { label: "怒江州", value: 123 },
        { label: "迪庆州", value: 123 },
        { label: "西双版纳州", value: 123 },
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
      const zhong = this.s.map((item, index) => {
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
      const data = this.n.map((item, index) => {
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
          formatter: `{b}: {c} ${this.$store.state.unit} ({d}%)`,
        },
        legend: {
          show: false,
          data: [
            "直达",
            "营销广告",
            "搜索引擎",
            "邮件营销",
            "联盟广告",
            "视频广告",
            "百度",
            "谷歌",
            "必应",
            "其他",
          ],
        },
        series: [
          {
            type: "pie",
            selectedMode: "single",
            radius: [0, "25%"],
            label: {
              position: "inner",
              fontSize: 8,
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: zhong,
          },
          {
            name: "",
            type: "pie",
            radius: ["35%", "50%"],
            label: {
              show: true,
              normal: {
                position: "outside",
                fontSize: 10,
                color: "rgba(250,250,250,0.8)",
                 formatter: '{b}({d}%)'
              },
            },
            labelLine: {
              length: 1,
              length1: 1,
              fontSize: 8,
            },

            data: data,
          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },
    initChart1() {
      const zhong = this.s.map((item, index) => {
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
      const data = this.n.map((item, index) => {
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
          formatter: "{b}: {c} ({d}%)",
        },
        legend: {
          show: false,
          data: [
            "直达",
            "营销广告",
            "搜索引擎",
            "邮件营销",
            "联盟广告",
            "视频广告",
            "百度",
            "谷歌",
            "必应",
            "其他",
          ],
        },
        series: [
          {
            type: "pie",
            selectedMode: "single",
            radius: [0, "25%"],
            label: {
              show: false,
              position: "inner",
              fontSize: 8,
              
            },
            labelLine: {
              show: false,
            },
            data: zhong,
          },
          {
            name: "",
            type: "pie",
            radius: ["35%", "50%"],
            label: {
              show: true,
              normal: {
                position: "outside",
                fontSize: 10,
                color: "rgba(250,250,250,0.8)",
                 formatter: '{b}({d}%)'
              },
            },
            labelLine: {
              length: 1,
              length1: 1,
              fontSize: 8,
            },

            data: data,
          },
        ],
      };
      this.chartInstance1.setOption(initOption);
    },
 
    screenAdapter() {
      const titleFontSize = (this.$refs.righttree_ref.offsetWidth / 150) * 7;

      const adapterOption = {
        tooltip: {
          position: ["20%", "50%"],
          trigger: "item",
          formatter: `{b}: ({d}%)`,
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