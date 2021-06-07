<template>
  <div class="com-container">
    <!-- <div  class="but">
      <button class="button">动物排名</button>
      <button  class="button1">产品排名</button>
    </div> -->
    <div class="com-chart" ref="hot_ref"></div>
    <div class="com-chart" ref="hot_ref1"></div>
  </div>
</template>

<script>
 var colorList = ['#FF6D00','#FF9201','#FFAB40','#FFD180']
var data = {
  etc: {
    name: `省内动物调运数量排名（猪）`,
    data: [
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
  },
  notEtc: {
    name: `跨州市动物调运数量排名（猪）`,
    data: [
      {
        value: 115,
        label: "大理州",
      },
      {
        value: 191,
        label: "文山州",
      },
      {
        value: 233,
        label: "临沧市",
      },
      {
        value: 43,
        label: "德宏州",
      },
      {
        value: 364,
        label: "迪庆州",
      },
      {
        value: 153,
        label: "昆明市",
      },
      {
        value: 312,
        label: "玉溪市",
      },
      {
        value: 134,
        label: "昭通市",
      },
      {
        value: 234,
        label: "保山市",
      },
      {
        value: 234,
        label: "丽江市",
      },
      {
        value: 97,
        label: "怒江州",
      },
      {
        value: 129,
        label: "普洱市",
      },
      {
        value: 233,
        label: "西双版纳州",
      },
      {
        value: 253,
        label: "楚雄州",
      },
      {
        value: 243,
        label: "红河州",
      },
      {
        value: 123,
        label: "曲靖市",
      },
    ],
  },
};
var legendData = ["商品猪", "仔猪", "种猪", "其它猪"];
var y_data = data.etc.data.map((item) => item.label);
var y_data1 = data.notEtc.data.map((item) => item.label);

var _datamax = [100, 100, 100, 100, 100, 100],
  _data1 = [10, 15, 10, 13, 5, 11, 15, 10, 13, 15, 11, 15, 10, 13, 15, 60],
  _data2 = [10, 5, 20, 13, 10, 21, 15, 10, 13, 15, 11, 15, 10, 13, 65, 60],
  _data3 = [10, 15, 10, 13, 5, 11, 15, 35, 13, 15, 11, 15, 10, 67, 15, 11],
  _data4 = [10, 10, 10, 13, 32, 11, 15, 10, 33, 35, 51, 45, 60, 13, 15, 11];
var fomatter_fn = function (v) {
  // console.log(v)
  if (v.value > 0) {
    return v.value;
  } else {
    return "";
  }
};
var _label = {
  normal: {
    show: false,
    position: "inside",
    formatter: fomatter_fn,
    textStyle: {
      color: "#fff",
      fontSize: 16,
    },
  },
};
export default {
  data() {
    return {
      chartInstance: null,
      chartInstance1: null,
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
      this.chartInstance1 = this.$echarts.init(this.$refs.hot_ref1);

      const initOption = {
       title: {
          text: "出省动物调运数量排名（猪）",
           textStyle:{
            color:"#fff",
           
        },
           top: '4%',
          left: '5%'
       },
        grid: {
          containLabel: true,
          left: "0%",
          right: 15,
          bottom: 30,
        },
        legend: {
          data: ["商品猪", "仔猪"],
          right: 0,
          top: 20,
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          show: true,
          backgroundColor: "#fff",
          borderColor: "#ddd",
          borderWidth: 1,
          textStyle: {
            color: "#3c3c3c",
            fontSize: 16,
          },
          formatter: (p)=> {
              // console.log(p);
              // var _arr = p.seriesName.split('/'),
              // idx = p.seriesIndex;//1，2，3
              return '种类：' +p.marker+ p.seriesName + '<br>'  + '数量：' + p.value+this.$store.state.unit;
          },
          extraCssText: "box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)",
        },
        xAxis: {
          inverse: true,

          axisLabel: {
            show: false,
            formatter: function (v) {
              var _v = ((v / _max) * 100).toFixed(0);
              return _v == 0 ? _v : _v + "%";
            },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: [
          {
            position: "right",
            data: y_data,
            axisLabel: {
              fontSize: 16,
              color: "rgba(255,255,255,.8)",
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
              length: 100,
              lineStyle: {
                color: "#204485",
                type: "dashed",
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            type: "bar",
            name: "商品猪",
            stack: "2",
            label: _label,
              barWidth : '50%',//柱图宽度
            legendHoverLink: false,
           
            itemStyle: {
              normal: {
                color: colorList[0]
              
               
               
              },
              emphasis: {
                color:  colorList[0]
              },
            },
            data: _data1,
          },
          {
              barWidth : '50%',//柱图宽度

            type: "bar",
            name: "仔猪",
            stack: "2",
            legendHoverLink: false,
           
            label: _label,
            itemStyle: {
              normal: {
                color:  colorList[1]
              
              },
              emphasis: {
                color:  colorList[1]
              },
            },
            data: _data2,
          },
          {
              barWidth : '50%',//柱图宽度

            type: "bar",
            stack: "2",
            name: "种猪",

            legendHoverLink: false,
          
            label: _label,
            itemStyle: {
              normal: {
                color: colorList[2]
              
              },
              emphasis: {
                color:  colorList[2]
              },
            },
            data: _data3,
          },
          {

            type: "bar",
            stack: "2",
            name: "其它猪",
            legendHoverLink: false,
               barWidth : '50%',//柱图宽度
           
            label: _label,
            itemStyle: {
              normal: {
                color:  colorList[3]
               
              },
              emphasis: {
                color: colorList[3]
              },
            },
            data: _data4,
          },
        ],
      };
      const initOption1 = {
        title: {
          text: "出省动物产品调运数量排名（猪）",
           textStyle:{
            color:"#fff",
           
        },
          top: '4%',
          right: '5%'
       },
        grid: {
          containLabel: true,
          left: "0%",
          right: 15,
          bottom: 30,
        },
        legend: {
          data: ["种猪", "其它猪"],
          left: 0,
          top: 20,
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          show: true,
          backgroundColor: "#fff",
          borderColor: "#ddd",
          borderWidth: 1,
          textStyle: {
            color: "#3c3c3c",
            fontSize: 16,
          },
          // formatter: function(p) {
          //     console.log(p);
          //     var _arr = p.seriesName.split('/'),
          //     idx = p.seriesIndex;//1，2，3
          //     return '名称：' + p.seriesName + '<br>' + '完成：' + p.value + '<br>' + '占比：' + (p.value / _max * 100).toFixed(0) + '%';
          // },
          extraCssText: "box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)",
        },
        xAxis: {
        

          axisLabel: {
            show: false,
            formatter: function (v) {
              var _v = ((v / _max) * 100).toFixed(0);
              return _v == 0 ? _v : _v + "%";
            },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: [
          {
            // position: "right",
            data: y_data1,
            axisLabel: {
              fontSize: 16,
              color: "rgba(255,255,255,.8)",
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
              length: 100,
              lineStyle: {
                color: "#204485",
                type: "dashed",
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            type: "bar",
            name: "商品猪",
            stack: "2",
            label: _label,
              barWidth : '50%',//柱图宽度
            legendHoverLink: false,
           
            itemStyle: {
              normal: {
                color:  colorList[0]
              
               
               
              },
              emphasis: {
                color:  colorList[0]
              },
            },
            data: _data1,
          },
          {

            type: "bar",
            name: "仔猪",
            stack: "2",
            legendHoverLink: false,
              barWidth : '50%',//柱图宽度
           
            label: _label,
            itemStyle: {
              normal: {
                color:  colorList[1]
              
              },
              emphasis: {
                color:  colorList[1]
              },
            },
            data: _data2,
          },
          {
              barWidth : '50%',//柱图宽度

            type: "bar",
            stack: "2",
            name: "种猪",

            legendHoverLink: false,
          
            label: _label,
            itemStyle: {
              normal: {
                color:  colorList[2]
           
              },
              emphasis: {
                color:  colorList[2]
              },
            },
            data: _data3,
          },
          {

            type: "bar",
            stack: "2",
            name: "其它猪",
            legendHoverLink: false,
               barWidth : '50%',//柱图宽度
           
            label: _label,
            itemStyle: {
              normal: {
                color:  colorList[3]
               
              },
              emphasis: {
                color:  colorList[3]
              },
            },
            data: _data4,
          },
        ],
      };
      this.chartInstance.setOption(initOption);
      this.chartInstance1.setOption(initOption1);
      // console.log(this.chartInstance)
    },
    screenAdapter() {
      const titleFontSize = (this.$refs.hot_ref.offsetWidth / 100) * 3;

      const adapterOption = {
        title: {
          textStyle: {
            fontSize: titleFontSize,
          },
        },
      };
      this.chartInstance.setOption(adapterOption);
      this.chartInstance.resize();
       this.chartInstance1.setOption(adapterOption);
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
  flex: 100%;
  width: 100%;
  height: 100%;
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
  background: rgba(128, 255, 115, 0.8);
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