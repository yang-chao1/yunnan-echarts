<template>
  <div class="com-container">
    <div class="bar">
      <div class="barbox">
        <ul v-if="this.$store.state.animal==='猪'" class="clearfix">
          <li class="pulll_left counter">
            <span>省内动物调运数量({{this.$store.state.animal}})</span>
           <div class="num">
             <div class="first">
              <animate-number class="aimnum"  mode="manual" ref="animate" from="0" :to="num" /><span style="font-size:20px">{{this.$store.state.unit}}</span>
             </div>
             <div  class="two">
               <h5 style="color:#fe3e12"><span>商品猪</span><span class="s">123</span><span>{{this.$store.state.unit}}</span></h5>
               <h5 style="color:#12fe81"><span>仔猪</span><span  class="s">123</span><span>{{this.$store.state.unit}}</span></h5>
               <h5 style="color:#D29A0D"><span>种猪</span><span class="s">123</span><span>{{this.$store.state.unit}}</span></h5>
               <h5 style="color:#05DE99"><span>其它猪</span><span class="s">123</span><span>{{this.$store.state.unit}}</span></h5>
             </div>
           </div>
          </li>
          <li class="pulll_left counter">
            <span>跨州市动物调运数量({{this.$store.state.animal}})</span>
           <div class="num">
             <div class="first">
              <animate-number class="aimnum"  mode="manual" ref="animate1" from="0" :to="num" /><span style="font-size:20px">{{this.$store.state.unit}}</span>
             </div>
             <div  class="two">
               <h5 style="color:#fe3e12"><span>商品猪</span><span class="s">1223</span><span>{{this.$store.state.unit}}</span></h5>
               <h5 style="color:#12fe81"><span>仔猪</span><span  class="s">1223</span><span>{{this.$store.state.unit}}</span></h5>
               <h5 style="color:#D29A0D"><span>种猪</span><span class="s">2123</span><span>{{this.$store.state.unit}}</span></h5>
               <h5 style="color:#05DE99"><span>其它猪</span><span class="s">2123</span><span>{{this.$store.state.unit}}</span></h5>
             </div>
           </div>
          </li>
          <li class="pulll_left counter">
            <span>省内动物产品调运数量({{this.$store.state.animal}})</span>
            <h5><animate-number class="aimnum"  mode="manual" ref="animate2" from="0" to="63.575" :formatter="formatter"/><span  style="font-size:16px">吨</span></h5>
          </li>
          <li class="pulll_left counter">
            <span>跨州市动物产品调运数量({{this.$store.state.animal}})</span>
            <h5><animate-number class="aimnum"  mode="manual" ref="animate3" from="0" to="34.446" :formatter="formatter"/><span style="font-size:16px">吨</span></h5>
          </li>
        </ul>
         <ul v-else class="clearfix">
          <li class="pulll_left counter">
            <span>省内动物调运数量({{this.$store.state.animal}})</span>
            <h5><animate-number class="aimnum"  mode="manual" ref="animate" from="0" to="3456" /> <span style="font-size:16px">{{this.$store.state.unit}}</span>
                
            </h5>
            
          </li>
          <li class="pulll_left counter">
            <span>跨州市动物调运数量({{this.$store.state.animal}})</span>
            <h5> <animate-number class="aimnum"  mode="manual" ref="animate1" from="0" to="2267" /><span style="font-size:16px">{{this.$store.state.unit}}</span></h5>
          </li>
          <li class="pulll_left counter">
            <span>省内动物产品调运数量({{this.$store.state.animal}})</span>
            <h5><animate-number class="aimnum"  mode="manual" ref="animate2" from="0" to="63.575" :formatter="formatter"/><span style="font-size:16px">吨</span></h5>
          </li>
          <li class="pulll_left counter">
            <span>跨州市动物产品调运数量({{this.$store.state.animal}})</span>
            <h5><animate-number class="aimnum"  mode="manual" ref="animate3" from="0" to="34.446" :formatter="formatter"/><span style="font-size:16px">吨</span></h5>
          </li>
        </ul>
      </div>
      <!-- <div class="barbox2">
                        <ul class="clearfix">
                            <li class="pulll_left">检疫出证合计（省内） </li>
                             <li class="pulll_left">检疫出证合计（省外调入） </li>
                              <li class="pulll_left">检疫出证合计（省内调出） </li>
                        </ul>
                    </div> -->
    </div>
    <!-- <div class="btn_right">
                <div class="button_div">
                   中国地图   
                </div>
                 <div class="button_div">
                   中国地图   
                </div>
                </div> -->

    <!-- <div class="map1"><img src="../views/img/lbx.png" /></div>
    <div class="map3"><img src="../views/img/map.png" /></div> -->
    <div ref="map_ref" class="com-chart"></div>
  </div>
</template>

<script>
import {geoCoordMap,planePath} from "@/utils/mymapyn";
import Bus from "@/utils/bus";
import option from "@/utils/mymapyn";
import yunnan from "@/assets/yunnan.json";
function randomData() {
  return Math.round(Math.random() * 100);
}
export default {
  data() {
    return {
      num: 3456,
       timer: null,
      chartInstance: null,
      mapData: [
        { name: "昆明市", value: randomData() },
        { name: "曲靖市", value: randomData() },
        { name: "玉溪市", value: randomData() },
        { name: "保山市", value: randomData() },
        { name: "昭通市", value: randomData() },
        { name: "临沧市", value: randomData() },
        { name: "文山州", value: randomData() },
        { name: "红河州", value: randomData() },
        { name: "楚雄州", value: randomData() },
        { name: "大理州", value: randomData() },
        { name: "丽江市", value: randomData() },
        { name: "普洱市", value: randomData() },
        { name: "德宏州", value: randomData() },
        { name: "怒江州", value: randomData() },
        { name: "迪庆州", value: randomData() },
        { name: "西双版纳州", value: randomData() },
      ],
    };
  },
  mounted() {
    this.initCharts();
    window.addEventListener("resize", this.screenAdapter);
    this.screenAdapter();
    // this.updateChart()
       this.timer = setTimeout(()=>{
       
       this.animate()
        
         
       if(this.timer) {
         clearTimeout(this.timer)
       }
    },1500)
    
  },
  methods: {
     formatter: function (num) {
        return num.toFixed(3)
      },
    initCharts() {
      // 基于准备好的dom，初始化echarts实例
      // var mapChart = this.$echarts.init(this.$refs.mapChart);
      this.chartInstance = this.$echarts.init(this.$refs.map_ref);
      this.$echarts.registerMap("云南", yunnan);
    
     
     
      this.chartInstance.setOption(option);
      // this.chartInstance.on("click", async (arg) => {
      //   // console.log(arg.name)
      //    const da = [
      //    ['西双版纳州',[[{ name: "西双版纳州" }, { name: arg.name, value: 12 }]]],
      // ]
      // const shu = this.getxian(da)

  
      // option.series.push(...shu)
      //    this.chartInstance.setOption(option);
      //   Bus.$emit("getdata", arg.name);
      // });
    },
    screenAdapter() {
      this.chartInstance.resize();
    },

  convertData(data) {
     var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];

      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value
        });
      }
    }
    // console.log(res)
    return res;
  },

getxian(data) {
  // console.log(data)
  const d = []
  var color = ["#fff", "#fff", "#fff","#fff", "#fff", "#fff"]; //航线的颜色

  data.forEach((item, i) => {
    d.push(
      {
        name: item[0] + " Top1",
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 8,
          trailLength: 0.7,
          color: "red", //arrow箭头的颜色
          symbolSize: 3
        },
        lineStyle: {
          normal: {
            color: color[0],
            width: 0,
            curveness: 0.2
          }
        },
        data: this.convertData(item[1])
      },
      {
        name: item[0] + " Top2",
        type: "lines",
        zlevel: 2,
        symbol: ["none", "arrow"],
        symbolSize: 10,
        effect: {
          show: true,
          period: 8,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 20
        },
        lineStyle: {
          normal: {
            color: color[0],
            width: 2,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: this.convertData(item[1])
      },
      {
        name: item[0] + " Top3",
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke"
        },
        label: {
          normal: {
           
            show: false, // 飞线到达的文字显示
            position: "right",
            formatter: "{b}",
            offset: [5, 0], //偏移设置
          }
        },
        // symbolSize: function(val) {
        //   return val[2] / 8;
        // },
        itemStyle: {
          normal: {
            color: color[i],
            
          },
         
        },
        data: item[1].map((dataItem)=> {
           
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          };
        })
      },
    )
  });
  return d
},
getfei(data) {
  // console.log(data)
  const arr = [[data.address,[[{name: data.address},{name:data.address1,value:data.num}]]]]
   const s = this.getxian(arr)
   option.series = s // 2660ff
   // address
  option.geo.regions=[{name: data.address1,itemStyle: {normal: {opacity: 1,borderColor: "#fff",borderWidth: 2,areaColor: '#00e4ff'}}},
  {name: data.address,itemStyle: {normal: {opacity: 1,borderColor: "#fff",borderWidth: 2,areaColor: '#2B91B7'}}}
  
  ]
//  option.series.push(...s)
         this.chartInstance.setOption(option);

         

 
},
animate() {
  this.$nextTick(()=>{
   
  this.$refs.animate.start()
    this.$refs.animate1.start()
     this.$refs.animate2.start()
      this.$refs.animate3.start()
  })
 
}



  },
};
</script>

<style scoped>
.com-container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.com-chart {
  width: 100%;
  height: 100%;

  overflow: hidden;
  z-index: 6;
}
.bar {
  height: 15%;
  background: rgba(101, 132, 226, 0.1);
  padding: 1.15rem;
}
.barbox li,
.barbox2 li {
  width: 25%;
  text-align: center;
  position: relative;
  z-index: 100;
}
.barbox:before,
.barbox:after {
  position: absolute;
  width: 0.3rem;
  height: 0.1rem;
  content: "";
}
.barbox:before {
  border-left: 2px solid #02a6b5;
  left: 0;
  border-top: 2px solid #02a6b5;
}
.barbox:after {
  border-right: 2px solid #02a6b5;
  right: 0;
  bottom: 0;
  border-bottom: 2px solid #02a6b5;
}

.barbox li:first-child:before {
  position: absolute;
  content: "";
  height: 50%;
  width: 0.1rem;
  background: rgba(255, 255, 255, 0.2);
  right: 0;
  top: 25%;
}
.barbox li:nth-child(2):before {
  position: absolute;
  content: "";
  height: 50%;
  width: 0.1rem;
  background: rgba(255, 255, 255, 0.2);
  right: 0;
  top: 25%;
}
.barbox li:nth-child(3):before {
  position: absolute;
  content: "";
  height: 50%;
  width: 0.1rem;
  background: rgba(255, 255, 255, 0.2);
  right: 0;
  top: 25%;
}
.barbox {
  border: 1px solid rgba(25, 186, 139, 0.17);
  position: relative;
  height: 100%;
}
.barbox li {
  height: 100%;
  font-size: 0.7rem;
  color: #00e4ff;
  padding: 0.05rem 0;
  font-family: electronicFont;
  font-weight: bold;
}
.barbox li h5 {
  font-size: 30px;
  height: 50%;
  display: flex;
  justify-content: left;
  align-items: baseline;
  /* text-shadow: 0 0 25px #00d8ff */
}

.barbox li h5 .scend {
  font-size: 15px;
}
.barbox2 li {
  color: rgba(255, 255, 255, 0.9);
  padding-top: 0.1rem;
}
.pulll_left {
  float: left;
}
.pulll_right {
  float: right;
}
.clearfix {
  height: 100%;
}
.clearfix li {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
    align-items: center;
}
.clearfix li .num {
  flex: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
   
}
.clearfix li .num .first{
  font-size: 40px;
  
}
.clearfix li .num .first span{
 font-family: electronicFont;
 text-shadow: 0 0 25px #00d8ff
  
}

.clearfix li .num .two h5{
  font-size: 16px;
  
}
.clearfix li .num .two span{
 
   font-family: electronicFont;
}
.clearfix li .num .two .s{
 
  /* text-shadow: 0 0 5px #00d8ff; */
}

.clearfix li h5 {
  font-family: electronicFont;
  font-size: 40px;
}
.clearfix li h5 .aimnum{
  font-family: electronicFont;
  font-size: 40px;
}
.clearfix li >span {
  flex: 100%;
  margin-top: 10px;
  font-size: 16px;
}
.clearfix:after,
.clearfix:before {
  display: table;
  content: " ";
}
.clearfix:after {
  clear: both;
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
  width: 50%;
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
.btn_right {
  width: 25%;
  margin-right: -10%;
  height: 100%;
}
.btn_list {
  position: relative;
  float: left;
  width: 5.5vw;
  height: 1.6vw;
  text-align: center;
  line-height: 1.6vw;
  font-size: 0.9vw;
  color: #0efcff;
  letter-spacing: 0.1vw;
  cursor: pointer;
}
</style>
