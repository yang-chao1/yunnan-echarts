<template>
  <div class="com-container">
    <div class="bar">
      <div class="barbox">
       <ul v-if="this.$store.state.animal==='猪'" class="clearfix">
          <li class="pulll_left counter"> 
           <span>出省动物调运数量({{this.$store.state.animal}})</span>
             <div class="num">
             <div class="first">
              <span><animate-number class="aimnum" mode="manual" ref="animate" from="0" to="3650" /></span><span style="font-size:20px">{{this.$store.state.unit}}</span>
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
           <span>出省产品调运数量({{this.$store.state.animal}})</span>
            <h5><animate-number class="aimnum"   mode="manual" ref="animate1" from="0" to="12.431" :formatter="formatter"/><span style="font-size:16px" >吨</span></h5>
          </li>
           <li class="pulll_left counter"> 
           <span>入省动物调运数量({{this.$store.state.animal}})</span>
            <div class="num">
             <div class="first">
              <span><animate-number class="aimnum"  mode="manual" ref="animate2" from="0" to="2221" /></span><span style="font-size:20px">{{this.$store.state.unit}}</span>
             </div>
             <div  class="two">
               <h5 style="color:#fe3e12"><span>商品猪</span><span class="s">19223</span><span>{{this.$store.state.unit}}</span></h5>
               <h5 style="color:#12fe81"><span>仔猪</span><span  class="s">1223</span><span>{{this.$store.state.unit}}</span></h5>
               <h5 style="color:#D29A0D"><span>种猪</span><span class="s">2123</span><span>{{this.$store.state.unit}}</span></h5>
               <h5 style="color:#05DE99"><span>其它猪</span><span class="s">2123</span><span>{{this.$store.state.unit}}</span></h5>
             </div>
           </div>
          </li>
           <li class="pulll_left counter"> 
           <span>入省产品调运数量({{this.$store.state.animal}})</span>
            <h5><animate-number class="aimnum"   mode="manual" ref="animate3" from="0" to="31.463" :formatter="formatter"/><span style="font-size:16px" >吨</span></h5>
          </li>
        </ul>
        <ul v-else class="clearfix">
          <li class="pulll_left counter"> 
           <span>出省动物调运数量({{this.$store.state.animal}})</span>
            <h5><animate-number class="aimnum" mode="manual" ref="animate" from="0" to="3753" /><span  style="font-size:16px">{{this.$store.state.unit}}</span></h5>
          </li>
           <li class="pulll_left counter"> 
           <span>出省产品调运数量({{this.$store.state.animal}})</span>
            <h5><animate-number class="aimnum"   mode="manual" ref="animate1" from="0" to="12.431" :formatter="formatter"/><span  style="font-size:16px">吨</span></h5>
          </li>
           <li class="pulll_left counter"> 
           <span>入省动物调运数量({{this.$store.state.animal}})</span>
            <h5><animate-number class="aimnum"  mode="manual" ref="animate2" from="0" to="6311" /><span  style="font-size:16px">{{this.$store.state.unit}}</span></h5>
          </li>
           <li class="pulll_left counter"> 
           <span>入省产品调运数量({{this.$store.state.animal}})</span>
            <h5><animate-number class="aimnum"   mode="manual" ref="animate3" from="0" to="31.463" :formatter="formatter"/><span  style="font-size:16px">吨</span></h5>
          </li>
        </ul>
      </div>
    
    </div>
   
    <div class="map1"><img src="../views/img/lbx.png" /></div>
   
    <div class="map3"><img src="../views/img/map.png" /></div>
    <div  ref="map_ref" class="com-chart"></div>
     <!-- <div class="datatime">
      <ul>
        <li
        @click="handLi(index)"
          class="nav_active"
            :key="index"
          v-for="(item, index) in animalList"
          :class="[index == changed ? 'nav_active' : 'nav_ho']"
        >
         {{ item }}
        </li>
       
      </ul>
    </div> -->
    <div id="status-buttons" class="text-center">
      <a @click="handLi(index)" :class="[index == changed ? 'active' : '']" :key="index" v-for="(item, index) in animalList"><span></span>{{item}}</a>
      <!-- <a class="active"><span></span>省内调出</a> -->
      <!-- <a><span></span>省外调入</a> -->
    </div>
  </div>
</template>

<script>
import option from '@/utils/mymap'
function randomData() {
  return Math.round(Math.random() * 500);
}
export default {
  data() {
    return {
       changed: 0,
      animalList: ["省内调出", "省外调入"],

       timer: null,
      chartInstance: null,
      mapData: [
        { name: "北京", value: randomData() },
        { name: "天津", value: randomData() },
        { name: "上海", value: randomData() },
        { name: "重庆", value: randomData() },
        { name: "河北", value: randomData() },
        { name: "河南", value: randomData() },
        { name: "云南", value: randomData() },
        { name: "辽宁", value: randomData() },
        { name: "黑龙江", value: randomData() },
        { name: "湖南", value: randomData() },
        { name: "安徽", value: randomData() },
        { name: "山东", value: randomData() },
        { name: "新疆", value: randomData() },
        { name: "江苏", value: randomData() },
        { name: "浙江", value: randomData() },
        { name: "江西", value: randomData() },
        { name: "湖北", value: randomData() },
        { name: "广西", value: randomData() },
        { name: "甘肃", value: randomData() },
        { name: "山西", value: randomData() },
        { name: "内蒙古", value: randomData() },
        { name: "陕西", value: randomData() },
        { name: "吉林", value: randomData() },
        { name: "福建", value: randomData() },
        { name: "贵州", value: randomData() },
        { name: "广东", value: randomData() },
        { name: "青海", value: randomData() },
        { name: "西藏", value: randomData() },
        { name: "四川", value: randomData() },
        { name: "宁夏", value: randomData() },
        { name: "海南", value: randomData() },
        { name: "台湾", value: randomData() },
        { name: "香港", value: randomData() },
        { name: "澳门", value: randomData() },
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
      handLi(index) {
      this.changed = index;
    
    },
    formatter: function (num) {
        return num.toFixed(3)
      },
    initCharts() {
      // 基于准备好的dom，初始化echarts实例
      // var mapChart = this.$echarts.init(this.$refs.mapChart);
      this.chartInstance = this.$echarts.init(this.$refs.map_ref);

    
      this.chartInstance.setOption(option);
       
    },
    screenAdapter() {
      this.chartInstance.resize();
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
    font-size:16px
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
  left: 5%;
  top: 20%;
  width: 70%;
  animation: myfirst2 15s infinite linear;
}
/* .map1{left:5%;top:0%; animation: myfirst2 15s infinite linear;} */
.map3 {
  left: 40%;
  top: 30%;
  width: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
#status-buttons {
  position: absolute;          /* 1 */
  display: inline-block;       /* 2 */
   bottom: 1%;
  right: 0%;
 
  z-index: 1000;
}
#status-buttons::after {       /* 3 */
  content: "";
 position: absolute;
    width: 50%;
    z-index: -1;
    top: 15%;
    left: 25%;
  height: 1px;
    border-top: solid #ACC0D8 1px;

}
#status-buttons a {
  color: rgb(255, 255, 255,.7);
  display: inline-block;
  font-size: 13px;
  font-weight: normal;
  margin-right: 0;
  text-align: center;
  text-transform: uppercase;
  min-width: 150px;
  text-decoration: none;
}
#status-buttons a:hover {
  text-decoration: none;
}
#status-buttons a.active span {
 
  color: white;
  background: #00E4FF;
  box-shadow: rgba(0, 0, 0, 0.792157) 3px 3px 3px 0;
}
#status-buttons span {
   margin-left: 50%;
  transform: translateX(-50%);
  color: white;
  background: #F0F8FF;
  display: block;
  height: 15px;
  /* margin: 0 auto 10px;
  padding-top: 20px; */
  width: 15px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.792157) 3px 3px 3px 0;
}

.datatime {
  position: absolute;
  bottom: 1%;
  right: 3%;
  width: 20%;
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
  width: 90px;
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