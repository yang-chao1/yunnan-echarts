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
    <div class="map1"><img src="../views/img/lbx.png" /></div>
    <!-- <div class="map2"><img src="../views/img/jt.png"></div> -->
    <div class="map3"><img src="../views/img/map.png" /></div>
    <div ref="map_ref" class="com-chart"></div>
  </div>
</template>

<script>
import yunnan from '@/assets/yunnan.json'
function randomData() {
  return Math.round(Math.random() * 100)
}
export default {

  data() {
    return {
      chartInstance: null,
      mapData: [
       {name: "昆明市", value:  randomData()},
       {name: "曲靖市", value:  randomData()},
       {name: "玉溪市", value: randomData()},
       {name: "保山市", value: randomData()},
       {name: "昭通市", value: randomData()},
       {name: "临沧市", value: randomData()},
       {name: "文山州",  value: randomData()},
       {name: "红河州",  value: randomData() },
       {name: "楚雄州",  value: randomData()},
       {name: "大理州",  value: randomData()},
       {name: "丽江市", value: randomData()},
       {name: "普洱市", value: randomData()},
       {name: "德宏州",value: randomData()},
       {name: "怒江州",  value: randomData()},
       {name: "迪庆州", value: randomData()},
       {name: "西双版纳州",  value: randomData() },
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
         this.$echarts.registerMap('云南', yunnan)
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
          calculable: false, // 是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
          inRange: {
            color: ['#70b4f4', 'blue']
            // color: ['#fb714c', '#70b4f4', '#70e4f4', '#f09640', '#f9d9bb'] // 颜色
          },
          textStyle: {
            color: 'black'
          }
        },
        // 提示框，鼠标移入
        tooltip: {
          show: true, // 鼠标移入是否触发数据
          trigger: 'item', // 出发方式
          formatter: '{b}:{c}'
        },
    
        // 配置地图的数据，并且显示
        series: [
          {
            name: '地图',
            type: 'map', // 地图种类
            map: '云南', // 地图类型。
            // coordinateSystem: 'geo',
            data: this.mapData,
           
        
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
           top: -5,
            aspectScale: 1.2, // 长宽比
            zoom: 1, // 放大比例
            label: { // 图形上的文本标签，可用于说明图形的一些数据信息
              show: true,
               normal: {  
                            textStyle: {
                                fontSize: 12,
                                fontWeight: 'bold',
                                color: '#FFF'
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
