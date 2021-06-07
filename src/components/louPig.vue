<template>
  <div class="com-container">
    <!-- <div class="divInput">
      <div class="input" @click="openValue">
        <input ref="input" v-model="value" type="text" />
      
      </div>
      <div class="list" v-show="show">
        <ul>
          <li
            @click="getvalue(index, item)"
            v-for="(item, index) in tableData"
            :key="item.index"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div> -->
    <div ref="righttree_ref" class="com-chart"></div>
    <div ref="righttree_ref1" class="com-chart"></div>
    <!-- <div ref="righttree_ref2" class="com-chart"></div>
    <div ref="righttree_ref3" class="com-chart"></div> -->
  </div>
</template>

<script>
import posi from "@/utils/position";
export default {
  data() {
    return {
      tableData: [
        {
          name: "全部",
        },
        {
          name: "商品猪",
        },
        {
          name: "仔猪",
        },
        {
          name: "种猪",
        },
        {
          name: "其它猪",
        },
      ],
      show: false,
      value: "全部",
      chartInstance: null,
      chartInstance1: null,
      chartInstance2: null,
      chartInstance3: null,
        colorList: [
		  '#AE1A4C','#FE260F','#FA4E04','#FA9600',
		  '#F7BA00','#FDFC30','#CDE829','##63AE2F',
		  '#0090CC','#0046FD','#3C00A2','#8300AE',
		  '#C0047F','#EC3069','#B2C12A','#2A9085'
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
      //    "昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "临沧市",
      //                        "文山州", "红河州", "楚雄州", "大理州",
      //                         "丽江市", "普洱市", "德宏州", "怒江州",
      //                       "迪庆州", "西双版纳州"
      shi: [
        {
          value: 10 * 1.5,
          label: "昆明市",
        },
        {
          value: 13.2 * 1.5,
          label: "曲靖市",
        },
        {
          value: 16.4 * 1.5,
          label: "昭通市",
        },
        {
          value: 19.6 * 1.5,
          label: "德宏州",
        },
        {
          value: 22.8 * 1.5,
          label: "迪庆州",
        },
        {
          value: 26 * 1.5,
          label: "大理州",
        },
        {
          value: 29.2 * 1.5,
          label: "玉溪市",
        },
        {
          value: 32.4 * 1.5,
          label: "临沧市",
        },
        {
          value: 35.6 * 1.5,
          label: "保山市",
        },
        {
          value: 38.8 * 1.5,
          label: "丽江市",
        },
        {
          value: 42 * 1.5,
          label: "怒江州",
        },
        {
          value: 45.2 * 1.5,
          label: "普洱市",
        },
        {
          value: 48.4 * 1.5,
          label: "西双版纳州",
        },
        {
          value: 51.6 * 1.5,
          label: "楚雄州",
        },
        {
          value: 54.8 * 1.5,
          label: "红河州",
        },
        {
          value: 58 * 1.5,
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
      yi() {
           this.show =false
      },
    openValue() {
      this.show = !this.show;
    },
    getvalue(index, item) {
      this.value = item.name;
      this.show = false;
      this.updateChart()
       this.updateChart1()
        this.screenAdapter();
    },
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.righttree_ref);
      const data = this.shi.map((item, index) => {
        return {
          name: item.label,
          value: item.value,
          itemStyle: { color: this.colorList[index] },
        };
      });
      const initOption = {
        title: {
          show: false,
          text: "调入",
          x: "10%",
          y: "80%",
          textStyle: {
            color: "#fff",
            fontSize: 8,
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} : {d}%",
          position: function (point, params, dom, rect, size) {
            //其中point为当前鼠标的位置，size中有两个属性：viewSize和contentSize，分别为外层div和tooltip提示框的大小
            var x = point[0]; //
            var y = point[1];
            var viewWidth = size.viewSize[0];
            var viewHeight = size.viewSize[1];
            var boxWidth = size.contentSize[0];
            var boxHeight = size.contentSize[1];
            var posX = 0; //x坐标位置
            var posY = 0; //y坐标位置

            if (x < boxWidth) {
              //左边放不开
              posX = 5;
            } else {
              //左边放的下
              posX = x - boxWidth;
            }

            if (y < boxHeight) {
              //上边放不开
              posY = 5;
            } else {
              //上边放得下
              posY = y - boxHeight;
            }

            return [posX, posY];
          },
        },

        legend: {
          show: false,
          data: this.shi.map((item) => {
            return item.label;
          }),
        },

        series: [
          {
            type: "funnel",
            left: "10%",
            top: 20,
            //x2: 80,
            bottom: 10,
            width: "70%",
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            // minSize: '0%',
            // maxSize: '100%',
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "inside",
              color: "rgba(255,255,255,.8)",

              formatter: function (d) {
                return "{aa|" + d.name + "}";
              },
              rich: {
                aa: {
                  align: "center",
                  color: "rgba(255,255,255,.8)",
                  fontSize: "12",
                  lineHeight: "20",
                },
              },
            },
            labelLine: {
              show: false,
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            // itemStyle: {
            //     borderColor: '#fff',
            //     borderWidth: 1
            // },
            emphasis: {
              label: {
                fontSize: 10,
              },
            },

            data: data,
          },
          {
            type: "funnel",
            left: "10%",
            top: 20,
            //x2: 80,
            bottom: 10,
            width: "70%",
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            // minSize: '0%',
            // maxSize: '100%',
            sort: "descending",
            gap: 2,
            label: {
              color: "rgba(255,255,255,.8)",

              formatter: function (d) {
                return "{d|" + d.percent + "%}";
              },
              rich: {
                d: {
                  padding: [0, 0, 0, 30],
                  color: "rgba(255,255,255,.8)",
                },
              },
            },
            labelLine: {
              show: false,
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            // itemStyle: {
            //     borderColor: '#fff',
            //     borderWidth: 1
            // },
            emphasis: {
              label: {
                fontSize: 10,
                position: "inside",
              },
            },

            data: data,
          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },
    initChart1() {
      const data = this.shi.map((item, index) => {
        return {
          name: item.label,
          value: item.value,
          itemStyle: { color: this.colorList[index] },
        };
      });
      this.chartInstance1 = this.$echarts.init(this.$refs.righttree_ref1);
      const initOption = {
        title: {
          show: false,
          text: "调出",
          x: "80%",
          y: "20%",
          textStyle: {
            color: "#fff",
            fontSize: 8,
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} : {d}%",
          position: function (point, params, dom, rect, size) {
            //其中point为当前鼠标的位置，size中有两个属性：viewSize和contentSize，分别为外层div和tooltip提示框的大小
            var x = point[0]; //
            var y = point[1];
            var viewWidth = size.viewSize[0];
            var viewHeight = size.viewSize[1];
            var boxWidth = size.contentSize[0];
            var boxHeight = size.contentSize[1];
            var posX = 0; //x坐标位置
            var posY = 0; //y坐标位置

            if (x < boxWidth) {
              //左边放不开
              posX = 5;
            } else {
              //左边放的下
              posX = x - boxWidth;
            }

            if (y < boxHeight) {
              //上边放不开
              posY = 5;
            } else {
              //上边放得下
              posY = y - boxHeight;
            }

            return [posX, posY];
          },
        },

        legend: {
          show: false,
          data: this.shi.map((item) => {
            return item.label;
          }),
        },

        series: [
          {
            type: "funnel",
            left: "20%",
            top: 20,
            //x2: 80,
            bottom: 10,
            width: "70%",

            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "ascending",
            gap: 2,
            label: {
              show: true,
              position: "inside",
              color: "rgba(255,255,255,.8)",
              formatter: function (d) {
                return "{aa|" + d.name + "}";
              },
              rich: {
                aa: {
                  align: "center",
                  color: "rgba(255,255,255,.8)",
                  fontSize: "12",
                  lineHeight: "20",
                },
              },
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
            },
            emphasis: {
              label: {
                fontSize: 20,
              },
            },
            data: data,
          },
          {
            type: "funnel",
            left: "20%",
            top: 20,
            //x2: 80,
            bottom: 10,
            width: "70%",

            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "ascending",
            gap: 2,
            label: {
              position: "left",
              color: "rgba(255,255,255,.8)",
              formatter: function (d) {
                return "{d|" + d.percent + "%}";
              },
              rich: {
                d: {
                  align: "center",
                  color: "rgba(255,255,255,.8)",

                  padding: [0, 30, 0, 0],
                },
              },
            },
            labelLine: {
              show: false,
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
            },
            emphasis: {
              label: {
                fontSize: 20,
              },
            },
            data: data,
          },
        ],
      };
      this.chartInstance1.setOption(initOption);
    },
    updateChart() {
      this.chartInstance = this.$echarts.init(this.$refs.righttree_ref);
      const data = this.shi.map((item, index) => {
        return {
          name: item.label,
          value: item.value+10,
          itemStyle: { color: this.colorList[index] },
        };
      });
      const initOption = {
        title: {
          show: false,
          text: "调入",
          x: "10%",
          y: "80%",
          textStyle: {
            color: "#fff",
            fontSize: 8,
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} : {d}%",
          position: function (point, params, dom, rect, size) {
            //其中point为当前鼠标的位置，size中有两个属性：viewSize和contentSize，分别为外层div和tooltip提示框的大小
            var x = point[0]; //
            var y = point[1];
            var viewWidth = size.viewSize[0];
            var viewHeight = size.viewSize[1];
            var boxWidth = size.contentSize[0];
            var boxHeight = size.contentSize[1];
            var posX = 0; //x坐标位置
            var posY = 0; //y坐标位置

            if (x < boxWidth) {
              //左边放不开
              posX = 5;
            } else {
              //左边放的下
              posX = x - boxWidth;
            }

            if (y < boxHeight) {
              //上边放不开
              posY = 5;
            } else {
              //上边放得下
              posY = y - boxHeight;
            }

            return [posX, posY];
          },
        },

        legend: {
          show: false,
          data: this.shi.map((item) => {
            return item.label;
          }),
        },

        series: [
          {
            type: "funnel",
            left: "10%",
            top: 20,
            //x2: 80,
            bottom: 10,
            width: "70%",
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            // minSize: '0%',
            // maxSize: '100%',
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "inside",
              color: "rgba(255,255,255,.8)",

              formatter: function (d) {
                return "{aa|" + d.name + "}";
              },
              rich: {
                aa: {
                  align: "center",
                  color: "rgba(255,255,255,.8)",
                  fontSize: "12",
                  lineHeight: "20",
                },
              },
            },
            labelLine: {
              show: false,
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            // itemStyle: {
            //     borderColor: '#fff',
            //     borderWidth: 1
            // },
            emphasis: {
              label: {
                fontSize: 10,
              },
            },

            data: data,
          },
          {
            type: "funnel",
            left: "10%",
            top: 20,
            //x2: 80,
            bottom: 10,
            width: "70%",
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            // minSize: '0%',
            // maxSize: '100%',
            sort: "descending",
            gap: 2,
            label: {
              color: "rgba(255,255,255,.8)",

              formatter: function (d) {
                return "{d|" + d.percent + "%}";
              },
              rich: {
                d: {
                  padding: [0, 0, 0, 30],
                  color: "rgba(255,255,255,.8)",
                },
              },
            },
            labelLine: {
              show: false,
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            // itemStyle: {
            //     borderColor: '#fff',
            //     borderWidth: 1
            // },
            emphasis: {
              label: {
                fontSize: 10,
                position: "inside",
              },
            },

            data: data,
          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },
    updateChart1() {
      const data = this.shi.map((item, index) => {
        return {
          name: item.label,
          value: item.value+10,
          itemStyle: { color: this.colorList[index] },
        };
      });
      this.chartInstance1 = this.$echarts.init(this.$refs.righttree_ref1);
      const initOption = {
        title: {
          show: false,
          text: "调出",
          x: "80%",
          y: "20%",
          textStyle: {
            color: "#fff",
            fontSize: 8,
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} : {d}%",
          position: function (point, params, dom, rect, size) {
            //其中point为当前鼠标的位置，size中有两个属性：viewSize和contentSize，分别为外层div和tooltip提示框的大小
            var x = point[0]; //
            var y = point[1];
            var viewWidth = size.viewSize[0];
            var viewHeight = size.viewSize[1];
            var boxWidth = size.contentSize[0];
            var boxHeight = size.contentSize[1];
            var posX = 0; //x坐标位置
            var posY = 0; //y坐标位置

            if (x < boxWidth) {
              //左边放不开
              posX = 5;
            } else {
              //左边放的下
              posX = x - boxWidth;
            }

            if (y < boxHeight) {
              //上边放不开
              posY = 5;
            } else {
              //上边放得下
              posY = y - boxHeight;
            }

            return [posX, posY];
          },
        },

        legend: {
          show: false,
          data: this.shi.map((item) => {
            return item.label;
          }),
        },

        series: [
          {
            type: "funnel",
            left: "20%",
            top: 20,
            //x2: 80,
            bottom: 10,
            width: "70%",

            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "ascending",
            gap: 2,
            label: {
              show: true,
              position: "inside",
              color: "rgba(255,255,255,.8)",
              formatter: function (d) {
                return "{aa|" + d.name + "}";
              },
              rich: {
                aa: {
                  align: "center",
                  color: "rgba(255,255,255,.8)",
                  fontSize: "12",
                  lineHeight: "20",
                },
              },
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
            },
            emphasis: {
              label: {
                fontSize: 20,
              },
            },
            data: data,
          },
          {
            type: "funnel",
            left: "20%",
            top: 20,
            //x2: 80,
            bottom: 10,
            width: "70%",

            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "ascending",
            gap: 2,
            label: {
              position: "left",
              color: "rgba(255,255,255,.8)",
              formatter: function (d) {
                return "{d|" + d.percent + "%}";
              },
              rich: {
                d: {
                  align: "center",
                  color: "rgba(255,255,255,.8)",

                  padding: [0, 30, 0, 0],
                },
              },
            },
            labelLine: {
              show: false,
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
            },
            emphasis: {
              label: {
                fontSize: 20,
              },
            },
            data: data,
          },
        ],
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
.divInput {
  position: absolute;
  top: 5%;
  right: 10px;
  z-index: 1002;
}
ul li {
  list-style: none;
}
.input {
  width: 102px;
  height: 30px;
  line-height: 30px;
  /* padding-left: 10px; */
  position: relative;
}
.input input {
  outline: none;
  height: 100%;
  width: 100%;
  /* padding-left: 10px; */
  background: #3187b9;
  color: #fff;
  border: 1px solid rgb(204, 204, 204);
}
.input img {
  position: absolute;
  right: 34px;
  top: 48%;
}
.list {
  width: 102px;
  /* margin-left: 10px; */
  background: #3187b9;
  border: 1px solid rgb(204, 204, 204);

  /* border: 1px solid #3e4e68; */
  overflow: hidden;
}
.list ul li {
  width: 100%;
  height: 30px;
  cursor: pointer;
  line-height: 30px;
  color: #fff;
  font-size: 16px;
  /* padding-left: 10px; */
}
.list ul li:hover {
  background-color: #cccccc;
}
</style>