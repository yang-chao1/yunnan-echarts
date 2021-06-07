<template>
  <div class="com-container">
       <div class="bar">
                    <div class="barbox">
                        <ul class="clearfix">
                            <li class="pulll_left counter">             
                              <h5><span class="scend">动物B</span>3223<span class="scend">(张)</span>  348424 <span class="scend">头</span></h5>
                              <h5><span class="scend">产品B</span>7389<span class="scend">(张)</span>  34287 <span class="scend">公斤</span></h5>
                            </li>
                            <li class="pulll_left counter">             
                              <h5><span class="scend">动物A</span>2753 <span class="scend">(张)</span>  348424 <span class="scend">头</span></h5>
                              <h5><span class="scend">产品A</span>7373 <span class="scend">(张)</span>  87967 <span class="scend">公斤</span></h5>
                            </li>
                             <li class="pulll_left counter">             
                              <h5><span class="scend">动物A</span>7357 <span class="scend">(张)</span>  78042 <span class="scend">头</span></h5>
                              <h5><span class="scend">产品A</span>6435 <span class="scend">(张)</span>  90643 <span class="scend">公斤</span></h5>
                            </li>
                        </ul>
                    </div>
                    <div class="barbox2">
                        <ul class="clearfix">
                            <li class="pulll_left">检疫出证合计（省内） </li>
                             <li class="pulll_left">检疫出证合计（省外调入） </li>
                              <li class="pulll_left">检疫出证合计（省内调出） </li>
                        </ul>
                    </div>
                </div>
    <!-- <div style="height:100px;background:red"></div> -->
     <div class="map1"><img src="../views/img/lbx.png"></div>
                    <!-- <div class="map2"><img src="../views/img/jt.png"></div> -->
                    <div class="map3"><img src="../views/img/map.png"></div>
    <div ref="map_ref" class="com-chart"></div>
  </div>
</template>

<script>
var chinaGeoCoordMap = {
        '黑龙江': [127.9688, 45.368],
        '内蒙古': [110.3467, 41.4899],
        "吉林": [125.8154, 44.2584],
        '北京市': [116.4551, 40.2539],
        "辽宁": [123.1238, 42.1216],
        "河北": [114.4995, 38.1006],
        "天津": [117.4219, 39.4189],
        "山西": [112.3352, 37.9413],
        "陕西": [109.1162, 34.2004],
        "甘肃": [103.5901, 36.3043],
        "宁夏": [106.3586, 38.1775],
        "青海": [101.4038, 36.8207],
        "新疆": [87.9236, 43.5883],
        "西藏": [91.11, 29.97],
        "四川": [103.9526, 30.7617],
        "重庆": [108.384366, 30.439702],
        "山东": [117.1582, 36.8701],
        "河南": [113.4668, 34.6234],
        "江苏": [118.8062, 31.9208],
        "安徽": [117.29, 32.0581],
        "湖北": [114.3896, 30.6628],
        "浙江": [119.5313, 29.8773],
        "福建": [119.4543, 25.9222],
        "江西": [116.0046, 28.6633],
        "湖南": [113.0823, 28.2568],
        "贵州": [106.6992, 26.7682],
        "云南": [102.9199, 25.4663],
        "广东": [113.12244, 23.009505],
        "广西": [108.479, 23.1152],
        "海南": [110.3893, 19.8516],
        '上海': [121.4648, 31.2891]
    };

function randomData() {
  return Math.round(Math.random() * 500)
}
export default {

  data() {
    return {
      chartInstance: null,
      mapData: [
        { name: '北京', value: randomData() },
        { name: '天津', value: randomData() },
        { name: '上海', value: randomData() },
        { name: '重庆', value: randomData() },
        { name: '河北', value: randomData() },
        { name: '河南', value: randomData() },
        { name: '云南', value: randomData() },
        { name: '辽宁', value: randomData() },
        { name: '黑龙江', value: randomData() },
        { name: '湖南', value: randomData() },
        { name: '安徽', value: randomData() },
        { name: '山东', value: randomData() },
        { name: '新疆', value: randomData() },
        { name: '江苏', value: randomData() },
        { name: '浙江', value: randomData() },
        { name: '江西', value: randomData() },
        { name: '湖北', value: randomData() },
        { name: '广西', value: randomData() },
        { name: '甘肃', value: randomData() },
        { name: '山西', value: randomData() },
        { name: '内蒙古', value: randomData() },
        { name: '陕西', value: randomData() },
        { name: '吉林', value: randomData() },
        { name: '福建', value: randomData() },
        { name: '贵州', value: randomData() },
        { name: '广东', value: randomData() },
        { name: '青海', value: randomData() },
        { name: '西藏', value: randomData() },
        { name: '四川', value: randomData() },
        { name: '宁夏', value: randomData() },
        { name: '海南', value: randomData() },
        { name: '台湾', value: randomData() },
        { name: '香港', value: randomData() },
        { name: '澳门', value: randomData() }
      ]
    }
  },
  mounted() {
    this.initCharts()
      window.addEventListener('resize',this.screenAdapter)
      this.screenAdapter()
    // this.updateChart()
  },
  methods: {
    initCharts() {
      // 基于准备好的dom，初始化echarts实例
      // var mapChart = this.$echarts.init(this.$refs.mapChart);
      this.chartInstance = this.$echarts.init(this.$refs.map_ref)
   

      const initOption = {
      
        backgroundColor: '', // 背景颜色
        title: {
        //   text: '中国',
          // subtext: 'China',
        //   color: '#fff',
          x: 'center'
        },
        // 是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
        visualMap: {
          top: '100%',
          min: 0, // 最小值
          max: 100, // 最大值
          calculable: true, // 是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
          inRange: {
            color: ['#70b4f4', '#4169E1']
            // color: ['#fb714c', '#70b4f4', '#70e4f4', '#f09640', '#f9d9bb'] // 颜色
          },
          textStyle: {
            color: '#FFF'
          }
        },
        // 提示框，鼠标移入
        tooltip: {
          show: true, // 鼠标移入是否触发数据
          trigger: 'item', // 出发方式
          formatter: '{b}:{c}'
        },
          // xAxis: {
          //     type: "value",
          //     scale: true,
          //     position: "top",
          //     splitNumber: 1,
          //     boundaryGap: false,
          //     splitLine: {
          //       show: false
          //     },
          //     axisLine: {
          //       show: false
          //     },
          //     axisTick: {
          //       show: false
          //     },
          //     axisLabel: {
          //       margin: 2,
          //       textStyle: {
          //         color: "#aaa"
          //       }
          //     }
          //   },
          //   yAxis: {
          //     type: "category",
          //     nameGap: 16,
          //     axisLine: {
          //       show: false,
          //       lineStyle: {
          //         color: "#ddd"
          //       }
          //     },
          //     axisTick: {
          //       show: false,
          //       lineStyle: {
          //         color: "#ddd"
          //       }
          //     },
          //     axisLabel: {
          //       interval: 0,
          //       textStyle: {
          //         color: "#999"
          //       }
          //     },
          //     data: [1,2,3,5,56,]
          //   },

     geo: {
          map: "china",
          scaleLimit: {
            min: 1,
            max: 2
          },
            regions: [
            {
              name: "南海诸岛",
              
              itemStyle: {
                normal: {
                  opacity: 0, 
                }
              },
              label: {
                    show: false
                  }
            }
          ],
           top: 0,
           
            zoom: 1, // 放大比例
            aspectScale: 0.8, // 长宽比
            zoom: 1, // 放大比例
          label: {
            normal: {
              show:true,
              fontSize: "14",
              color: "#FFF"
            }
          },
          itemStyle: {
            normal: {
                color:'#3333FF',
              borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
              areaColor: "#f2d5ad",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0
            }
          }
        },
      // 配置地图的数据，并且显示
        series: [
          {
            // name: '地图',
            // type: 'map', // 地图种类
            // map: 'china', // 地图类型。
             type: 'map',
            // coordinateSystem: 'geo',
            data: this.mapData,
             geoIndex: 0,
        
            itemStyle: { // 地图区域的多边形 图形样式。
              emphasis: { // 高亮状态下的样试
                label: {
                  show: true
                }
              },
              normal:{
        	   label:{show:true}
        	   ,areaStyle:{color:'green'}
        }
            },
          
            // aspectScale: 1.5, // 长宽比
            // zoom: 1.7, // 放大比例
            label: { // 图形上的文本标签，可用于说明图形的一些数据信息
              normal: {
                show: false, //显示省份标签
                textStyle: {
                  color: "#fff"
                } //省份标签字体颜色
              },
              emphasis: { //对应的鼠标悬浮效果
                show: true,
                textStyle: {
                  color: "#000"
                }
              }
            }
          }

        ]
      }
      this.chartInstance.setOption(initOption)
    },
     screenAdapter() {
        this.chartInstance.resize()
     }
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
  z-index: 6;
}
.bar{height:15%; background:rgba(101,132,226,.1); padding: 1.15rem;}
.barbox li,.barbox2 li{ width:33%; text-align: center; position: relative; z-index: 100;}
.barbox:before,
.barbox:after{ position:absolute; width: .3rem; height: .1rem; content: ""; }
.barbox:before{border-left: 2px solid #02a6b5;left: 0;border-top: 2px solid #02a6b5; }
.barbox:after{border-right: 2px solid #02a6b5; right: 0; bottom: 0;border-bottom: 2px solid #02a6b5; }

.barbox li:first-child:before{ position:absolute; content: ""; height:50%; width: 0.1rem; background: rgba(255,255,255,.2); right: 0; top: 25%;}
.barbox li:nth-child(2):before{ position:absolute; content: ""; height:50%; width: 0.1rem; background: rgba(255,255,255,.2); right: 0; top: 25%;}

.barbox{  border: 1px solid rgba(25,186,139,.17); position: relative;height:90%}
.barbox li{height: 100%;; font-size: .7rem; color: #00e4ff; padding: .05rem 0;  font-family:electronicFont; font-weight: bold;}
.barbox li h5{font-size: 30px; height: 50%; display: flex;justify-content: center;align-items: baseline;}

.barbox li h5 .scend {font-size: 15px;}
.barbox2 li{  color:rgba(255,255,255,.9); padding-top: .1rem;}
.pulll_left{float:left;}
.pulll_right{float:right;}
.clearfix {height:100%}
.clearfix:after, .clearfix:before {
	display: table;
	content: " "
}
 .clearfix:after {
	clear: both
}
.map1,
.map2,
.map3 {
  position: absolute;
  opacity: 0.5;
}
.map1 img {
  width: 100%;
}
.map3 img {
  width: 100%;
}
.map1 {
  left: 15%;
  top: 20%;
  width: 70%;
  animation: myfirst2 15s infinite linear;
}
/* .map1{left:5%;top:0%; animation: myfirst2 15s infinite linear;} */
.map3 {
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  z-index: 1;
}
@keyframes myfirst2 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

@keyframes myfirst {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-359deg);
  }
}
</style>
