<template>
  <div  style="height:100%">
     <div id="holder"></div>
      <!--header-->
<div class="header">
    <div class="bg_header">
        <div class="header_nav fl t_title">
            云南电子出证监控系统
        </div> 
    </div>
</div>

<!--main-->
<div class="data_content">
    <div class="data_time">
        <!-- 温馨提示: 点击模块后跳转至详情页面。        
       单选框 -->
       <ul>
            <li @click="handLi(index)" :key="index" v-for="(item,index) in animalList" :class="[index==changed?'nav_active':'nav_ho']">{{item}}</li>
        </ul>

    </div>

    <div class="data_main">
        <div class="main_left fl">
            <div class="left_1 t_btn6" style="cursor: pointer;">
                <!--左上边框-->
                <div class="t_line_box">
                    <i class="t_l_line"></i> 
                    <i class="l_t_line"></i> 
                </div> 
                <!--右上边框-->
                <div class="t_line_box">
                    <i class="t_r_line"></i> 
                    <i class="r_t_line"></i> 
                </div> 
                <!--左下边框-->
                <div class="t_line_box">
                    <i class="l_b_line"></i> 
                    <i class="b_l_line"></i> 
                </div> 
                    <!--右下边框-->
                    <div class="t_line_box">
                    <i class="r_b_line"></i> 
                    <i class="b_r_line"></i> 
                </div> 
                <div class="main_title">
                  

                  <span style="color:#83c7e3;display:flex;justify-content:center">
                      <b style="font-size:20px;color: rgb(16, 94, 218)">[</b>
                      省出证数据监控
                        <b style="font-size:20px;color: rgb(16, 94, 218)">]</b>
                       </span>
                 
                </div>
                <leftone style="width:100%;height: 100%;"/>
                <!-- <div id="chart_1" class="chart" style="width:100%;height: 100%;"></div> -->
            </div>
            <div class="left_2" style="cursor: pointer;">
                <!--左上边框-->
                <div class="t_line_box">
                    <i class="t_l_line"></i> 
                    <i class="l_t_line"></i> 
                </div> 
                <!--右上边框-->
                <div class="t_line_box">
                    <i class="t_r_line"></i> 
                    <i class="r_t_line"></i> 
                </div> 
                <!--左下边框-->
                <div class="t_line_box">
                    <i class="l_b_line"></i> 
                    <i class="b_l_line"></i> 
                </div> 
                    <!--右下边框-->
                    <div class="t_line_box">
                    <i class="r_b_line"></i> 
                    <i class="b_r_line"></i> 
                </div> 
                <div class="main_title">
                   
                     <span style="color:#83c7e3;display:flex;justify-content:center">
                      <b style="font-size:20px;color: rgb(16, 94, 218)">[</b>
                        产品调运趋势分析(省内)
                        <b style="font-size:20px;color: rgb(16, 94, 218)">]</b>
                       </span>
                </div>
                  <leftsecred style="width:100%;height: 100%;"/>
                <!-- <div id="chart_2" class="chart t_btn9" style="width:100%;height: 280px;"></div> -->
            </div>
        </div>
        <div class="main_center fl">
            <div class="center_text">
                <!--左上边框-->
                <div class="t_line_box">
                    <i class="t_l_line"></i> 
                    <i class="l_t_line"></i> 
                </div> 
                <!--右上边框-->
                <div class="t_line_box">
                    <i class="t_r_line"></i> 
                    <i class="r_t_line"></i> 
                </div> 
                <!--左下边框-->
                <div class="t_line_box">
                    <i class="l_b_line"></i> 
                    <i class="b_l_line"></i> 
                </div> 
                 <!--右下边框-->
                 <div class="t_line_box">
                    <i class="r_b_line"></i> 
                    <i class="b_r_line"></i> 
                </div> 
                <div class="main_title">
                    <span style="color:#83c7e3;display:flex;justify-content:center">
                      <b style="font-size:20px;color: rgb(16, 94, 218)">[</b>
                        云南省地图
                        <b style="font-size:20px;color: rgb(16, 94, 218)">]</b>
                       </span>
                </div>

                  <mymap style="width:100%;height: 100%;"/>
                <!-- <div id="chart_map" style="width:100%;height:610px;"></div> -->
            </div>
        </div>
        <div class="main_right fr">
            <div class="right_1">
                <!--左上边框-->
                <div class="t_line_box">
                    <i class="t_l_line"></i> 
                    <i class="l_t_line"></i> 
                </div> 
                <!--右上边框-->
                <div class="t_line_box">
                    <i class="t_r_line"></i> 
                    <i class="r_t_line"></i> 
                </div> 
                <!--左下边框-->
                <div class="t_line_box">
                    <i class="l_b_line"></i> 
                    <i class="b_l_line"></i> 
                </div> 
                    <!--右下边框-->
                    <div class="t_line_box">
                    <i class="r_b_line"></i> 
                    <i class="b_r_line"></i> 
                </div> 
                <div class="main_title">
                   <span style="color:#83c7e3;display:flex;justify-content:center">
                      <b style="font-size:20px;color: rgb(16, 94, 218)">[</b>
                        动物调入调出趋势分析(跨省)
                        <b style="font-size:20px;color: rgb(16, 94, 218)">]</b>
                       </span>
                   
                </div>
                  <rightone2 style="width:100%;height: 100%;"/>

                <!-- <div id="chart_3" class="echart t_btn7" style="width:100%;height: 280px;"></div> -->
            </div>
            <div class="right_2">
                <!--左上边框-->
                <div class="t_line_box">
                    <i class="t_l_line"></i> 
                    <i class="l_t_line"></i> 
                </div> 
                <!--右上边框-->
                <div class="t_line_box">
                    <i class="t_r_line"></i> 
                    <i class="r_t_line"></i> 
                </div> 
                <!--左下边框-->
                <div class="t_line_box">
                    <i class="l_b_line"></i> 
                    <i class="b_l_line"></i> 
                </div> 
                    <!--右下边框-->
                    <div class="t_line_box">
                    <i class="r_b_line"></i> 
                    <i class="b_r_line"></i> 
                </div> 
                <div class="main_title">
                   <span style="color:#83c7e3;display:flex;justify-content:center">
                      <b style="font-size:20px;color: rgb(16, 94, 218)">[</b>
                      产品调入调出趋势分析(跨省)
                        <b style="font-size:20px;color: rgb(16, 94, 218)">]</b>
                       </span>
                    
                </div>
                  <rightsecred style="width:100%;height: 100%;"/>
              
            </div>
        </div>
    </div>
    <div class="data_bottom">
        <div class="bottom_1 fl t_btn5" style="cursor: pointer;">
            <!--左上边框-->
            <div class="t_line_box">
                <i class="t_l_line"></i> 
                <i class="l_t_line"></i> 
            </div> 
            <!--右上边框-->
            <div class="t_line_box">
                <i class="t_r_line"></i> 
                <i class="r_t_line"></i> 
            </div> 
            <!--左下边框-->
            <div class="t_line_box">
                <i class="l_b_line"></i> 
                <i class="b_l_line"></i> 
            </div> 
                <!--右下边框-->
                <div class="t_line_box">
                <i class="r_b_line"></i> 
                <i class="b_r_line"></i> 
            </div>
            <div class="main_title">
                <img src="img/t_6.png" alt="">
               <span> 出证数据监控(省内)</span>
            </div>
                <lefttree style="width:100%;height: 100%;"/>

            <!-- <div id="chart_5" class="echart fl" style="width:100%;height: 250px;margin-top: 15px;"></div> -->
        </div>
        <div class="bottom_center fl">
            <div class="bottom_2 fl">
                <!--左上边框-->
                <div class="t_line_box">
                    <i class="t_l_line"></i> 
                    <i class="l_t_line"></i> 
                </div> 
                <!--右上边框-->
                <div class="t_line_box">
                    <i class="t_r_line"></i> 
                    <i class="r_t_line"></i> 
                </div> 
                <!--左下边框-->
                <div class="t_line_box">
                    <i class="l_b_line"></i> 
                    <i class="b_l_line"></i> 
                </div> 
                    <!--右下边框-->
                    <div class="t_line_box">
                    <i class="r_b_line"></i> 
                    <i class="b_r_line"></i> 
                </div>
                <div class="main_title">
                    <img src="img/t_7.png" alt="">
                <span>检疫出证实时监控</span> 
                </div>
                <div class="main_table t_btn8">
                    <table>
                        <thead>
                        <tr>
                            <th>签发日期</th>
                            <th>检疫证号</th>
                            <th>动物种类</th> 
                            <th>数量</th>
                             <th>出证类型</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>2020-03-19</td>
                            <td>5345169815</td>
                            <td>猪</td>
                            <td>122</td>
                            <td>动物A</td>
                        </tr>
                        <tr>
                            <td>2020-09-23</td>
                            <td>5342564315</td>
                            <td>牛</td>
                            <td>123</td>
                            <td>动物B</td>
                        </tr>
                         <tr>
                            <td>2020-12-22</td>
                            <td>5312497615</td>
                            <td>鸡</td>
                            <td>43</td>
                            <td>动物B</td>
                        </tr>
                         <tr>
                            <td>2021-01-19</td>
                            <td>5312490909</td>
                            <td>猪</td>
                            <td>12</td>
                            <td>产品B</td>
                        </tr>
                         <tr>
                            <td>2021-03-19</td>
                            <td>5312343249</td>
                            <td>猪</td>
                            <td>12</td>
                            <td>动物A</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
          
        </div>
        <div class="bottom_4 fr">
            <!--左上边框-->
            <div class="t_line_box">
                <i class="t_l_line"></i> 
                <i class="l_t_line"></i> 
            </div> 
            <!--右上边框-->
            <div class="t_line_box">
                <i class="t_r_line"></i> 
                <i class="r_t_line"></i> 
            </div> 
            <!--左下边框-->
            <div class="t_line_box">
                <i class="l_b_line"></i> 
                <i class="b_l_line"></i> 
            </div> 
                <!--右下边框-->
                <div class="t_line_box">
                <i class="r_b_line"></i> 
                <i class="b_r_line"></i> 
            </div>
            <div class="main_title">
                <img src="img/t_7.png" alt="">
              <span>出证数据占比分析</span> 
            </div>
          
                 <righttree style="width:100%;height: 100%;"/>
          
        </div>
    </div>

</div>
  </div>
</template>

<script>
// import can from '@/assets/index.js'
import leftone from '@/components/leftone.vue'
import leftsecred from '../components/leftsecred.vue'
import Lefttree from '../components/lefttree.vue'
import mymap from '../components/map.vue'
import rightone from '../components/rightone.vue'
import rightone2 from '../components/rightone2.vue'
import rightsecred from '../components/rightsecred.vue'
import righttree from '../components/righttree3.vue'
import righttree2 from '../components/righttree2.vue'
export default {
    components: {
        leftone,
        leftsecred,
        Lefttree,
        mymap,
        rightone2,
        rightsecred,
        righttree,
        righttree2
    },
    data() {
        return {
            changed: 0,
            animalList: ['猪','牛','羊','鸡','鸭','鹅',]
        }
    },
    mounted () {
    // can()
  },
  methods: {
      handLi(index){
          this.changed = index
      }
  }
}
</script>

<style scoped>

   .t_title{
            width: 100%;
            height: 100%;
            text-align: center;
            font-size: 2.5em;
            line-height: 80px;
            color: #fff;
        }
        #chart_map{
            cursor: pointer;
        }
        .t_show{
            position: absolute;
            top: 0;
            right: 0;
            border-radius: 2px;
            background: #2C58A6;
            padding: 2px 5px;
            color: #fff;
            cursor: pointer;
        }



</style>