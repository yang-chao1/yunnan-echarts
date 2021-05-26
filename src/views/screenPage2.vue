<template>
  <div style="height: 100%">
    <div id="holder"></div>
    <!--header-->
    <div class="header">
      <div class="bg_header">
        <div class="header_nav fl t_title">云南省动物及动物产品调运数据监管平台</div>
      </div>
    </div>

    <!--main-->
    <div class="data_content">
      <div class="data_time">
        <ul class="ul1">
          <li @click="leftMonth" :class="[leftClick?'nav_active':'nav_ho']">月度</li>
          <li @click="leftYear" :class="[!leftClick?'nav_active':'nav_ho']">年度</li>
        </ul>

        <ul class="ul2">
          <li
            @click="handLi(index)"
            :key="index"
            v-for="(item, index) in animalList"
            :class="[index == changed ? 'nav_active' : 'nav_ho']"
          >
            {{ item }}
          </li>
        </ul>

        <ul class="ul3">
          <li @click="rightMonth" :class="[rightClick?'nav_active':'nav_ho']">月度</li>
          <li @click="rightYear" :class="[!rightClick?'nav_active':'nav_ho']">年度</li>
        </ul>
      </div>
      <div class="main">
        <div class="main_one fl">
          <div class="left_1 t_btn6" style="cursor: pointer">
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
            <div class="main_title1">
              <span
              :class="[isLeftOne?'le': 'ri']"
              @click="ani"
                style="color:#fff; display: flex; justify-content: center"
              >
                省内动物调运数量排名({{this.$store.state.animal}})
              </span>
               <span
               @click="leftpai"
               :class="[!isLeftOne?'le': 'ri']"
                style="color: #fff; display: flex; justify-content: center"
              >
                省内动物产品调运数量排名({{this.$store.state.animal}})
              </span>
               <!-- <span
              :class="[isLeftOne?'le': 'ri']"
             
                style="color:#fff; display: flex; justify-content: center"
              >
                {{comName?'省内动物调运数量排名('+this.$store.state.animal+')':'省内动物产品调运数量排名('+this.$store.state.animal+')'}}
              </span> -->
            </div>
             <!-- <transition  mode="out-in">
               <leftone v-if="comName" ref="leftone" style="width: 100%; height: 100%" />
               <priductpai ref="leftone" @getTime="startInterval"  @clearTime="clearTime" v-else style="width: 100%; height: 100%" />
            </transition> -->
            <components :is="isLeftOne?'leftone':'priductpai'" ref="leftone" style="width: 100%; height: 100%" />

            <!-- <div id="chart_1" class="chart" style="width:100%;height: 100%;"></div> -->
          </div>
          <div class="left_1 t_btn6" style="cursor: pointer">
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
            <div class="main_title1">
              <!-- <span
                style="color: #83c7e3; display: flex; justify-content: center"
              >
                <b style="font-size: 20px; color: rgb(16, 94, 218)">[</b>
                省内动物调运数量趋势分析({{this.$store.state.animal}})
                <b style="font-size: 20px; color: rgb(16, 94, 218)">]</b>
              </span> -->
               <span
               class="le"
                style="color: #fff; display: flex; justify-content: center"
              >
                省内动物调运数量趋势分析({{this.$store.state.animal}})
              </span>
              
            </div>
            <xianPig2  v-if="$store.state.animal==='猪'"  ref="xian" style="width: 100%; height: 100%" />
            <xian v-else ref="xian" style="width: 100%; height: 100%" />

            <!-- <div id="chart_1" class="chart" style="width:100%;height: 100%;"></div> -->
          </div>
          <div class="left_1 fl t_btn5" style="cursor: pointer">
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
            <div class="main_title1">
             
            
               <!-- <span
                style="color: #83c7e3; display: flex; justify-content: center"
              >
                <b style="font-size: 20px; color: rgb(16, 94, 218)">[</b>
                非跨州与跨州市动物数量调运分布({{this.$store.state.animal}})
                <b style="font-size: 20px; color: rgb(16, 94, 218)">]</b>
              </span> -->
               <span
               class="le"
                style="color: #fff; display: flex; justify-content: center"
              >
                非跨州市与跨州市动物数量调运分布({{this.$store.state.animal}})
              </span>
            </div>
            <bigleftPig v-if="$store.state.animal==='猪'" ref="righttree2" style="width: 100%; height: 100%" />
            <righttree2 v-else ref="righttree2" style="width: 100%; height: 100%" />

            <!-- <div id="chart_5" class="echart fl" style="width:100%;height: 250px;margin-top: 15px;"></div> -->
          </div>
          <div class="bottom_1 fl t_btn5" style="cursor: pointer">
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
            <div class="main_title1">
            
               <!-- <span
                style="color: #83c7e3; display: flex; justify-content: center"
              >
                <b style="font-size: 20px; color: rgb(16, 94, 218)">[</b>
                省内动物产品数量调运趋势分析({{this.$store.state.animal}})
                <b style="font-size: 20px; color: rgb(16, 94, 218)">]</b>
              </span> -->
               <span
               class="le"
                style="color: #fff; display: flex; justify-content: center"
              >
                省内动物产品数量调运趋势分析({{this.$store.state.animal}})
              </span>
            </div>
            <xian2 ref="xian2" style="width: 100%; height: 100%" />

            <!-- <div id="chart_5" class="echart fl" style="width:100%;height: 250px;margin-top: 15px;"></div> -->
          </div>
          <div class="bottom_1 fl t_btn5" style="cursor: pointer">
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
            <div class="main_title1">
  
               <!-- <span
                style="color: #83c7e3; display: flex; justify-content: center"
              >
                <b style="font-size: 20px; color: rgb(16, 94, 218)">[</b>
                跨州市与非跨州市动物产品数量调运分布({{this.$store.state.animal}})
                <b style="font-size: 20px; color: rgb(16, 94, 218)">]</b>
              </span> -->
               <span
               class="le"
                style="color: #fff; display: flex; justify-content: center"
              >
                非跨州市与跨州市动物产品数量调运分布({{this.$store.state.animal}})
              </span>
            </div>
            <!-- <bigleftPig2 v-if="$store.state.animal==='猪'" ref="big2" style="width: 100%; height: 100%" /> -->

            <big2 ref="big2" style="width: 100%; height: 100%" />

            <!-- <div id="chart_5" class="echart fl" style="width:100%;height: 250px;margin-top: 15px;"></div> -->
          </div>
        </div>
        <div class="main_tow fl">
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
              <div class="main_title1">
                <!-- <span
                  style="color: #83c7e3; display: flex; justify-content: center"
                >
                  <b style="font-size: 20px; color: rgb(16, 94, 218)">[</b>
                  省内调运监管
                  <b style="font-size: 20px; color: rgb(16, 94, 218)">]</b>
                </span> -->
                 <span
                 class="le"
                  style="color: #fff; display: flex; justify-content: center"
                >
                  省内调运监管
                </span>
              </div>

              <mapfeiyn ref="yunmap" style="width: 100%; height: 100%" />
              <!-- <div id="chart_map" style="width:100%;height:610px;"></div> -->
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
              <div class="main_title1">
                <!-- <span
                  style="color: #83c7e3; display: flex; justify-content: center"
                >
                  <b style="font-size: 20px; color: rgb(16, 94, 218)">[</b>
                  跨省调运监管
                  <b style="font-size: 20px; color: rgb(16, 94, 218)">]</b>
                </span> -->
                 <span
                 class="le"
                  style="color: #fff; display: flex; justify-content: center"
                >
                  跨省调运监管
                </span>
              </div>

              <mymap ref="mymap" style="width: 100%; height: 100%" />
              <!-- <div id="chart_map" style="width:100%;height:610px;"></div> -->
            </div>
          </div>
          <div style="height: calc(25% - 40px)" class="main_center main_cen fl">
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
              <div class="main_title1">
               
                 <!-- <span
                style="color: #83c7e3; display: flex; justify-content: center"
              >
                <b style="font-size: 20px; color: rgb(16, 94, 218)">[</b>
                省内检疫出证实时监控
                <b style="font-size: 20px; color: rgb(16, 94, 218)">]</b>
              </span> -->
               <span
               class="le"
                style="color: #fff; display: flex; justify-content: center"
              >
                省内检疫出证实时监控
              </span>
              </div>
              <div class="main_table t_btn8">
                <table>
                  <thead>
                    <tr>
                      <th style="width: 120px">签发时间</th>
                      <th style="width: 120px">检疫证号</th>
                      <th style="width: 120px">货主</th>
                      <th style="width: 120px">动物或产品种类</th>
                      <th style="width: 60px">数量</th>
                      <th style="width: 80px">单位</th>
                      <th style="width: 120px">启运地</th>
                      <th style="width: 120px">目的地</th>
                      <th style="width: 120px">出证类型</th>
                    </tr>
                  </thead>
                </table>
                <div class="scroll-box">
                  <table class="tab-scroll">
                    <tbody>
                      <tr v-for="(item,index) in yundata" :key="index">
                        <td style="width: 120px">{{item.time}}</td>
                        <td style="width: 120px">{{item.hao}}</td>
                        <td style="width: 120px">{{item.name}}</td>
                        <td style="width: 120px">{{item.animal}}</td>
                        <td style="width: 60px">{{item.num}}</td>
                        <td style="width: 80px">{{item.util}}</td>
                        <td style="width: 120px">{{item.address}}</td>
                        <td style="width: 120px">{{item.address1}}</td>
                        <td style="width: 120px">{{item.type}}</td>
                      </tr>
                      <!-- <tr>
                        <td style="width: 120px">2020-03-31</td>
                        <td style="width: 120px">5345334515</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">牛</td>
                        <td style="width: 60px">4</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省迪庆藏族自治州</td>
                        <td style="width: 120px">云南省大理白族自治州</td>
                        <td style="width: 120px">产品B</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-04-04</td>
                        <td style="width: 120px">5323449815</td>
                        <td style="width: 120px">小米</td>
                        <td style="width: 120px">羊</td>
                        <td style="width: 60px">1</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">云南省昆明市</td>
                        <td style="width: 120px">产品B</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-05-19</td>
                        <td style="width: 120px">5349079815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">鸭</td>
                        <td style="width: 60px">23</td>
                        <td style="width: 80px">只</td>
                        <td style="width: 120px">云南省昭通市</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">产品B</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-06-01</td>
                        <td style="width: 120px">5345132315</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">32</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省临沧市</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">产品B</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-08-19</td>
                        <td style="width: 120px">5356769815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">9</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省文山壮族苗族自治州</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">产品B</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-09-29</td>
                        <td style="width: 120px">5378909815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">22</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省临沧市</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">产品B</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-11-13</td>
                        <td style="width: 120px">5349999815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">1</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省保山市</td>
                        <td style="width: 120px">云南省普洱市</td>
                        <td style="width: 120px">产品B</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2021-01-19</td>
                        <td style="width: 120px">5365769815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">5</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">云南省大理白族自治州</td>
                        <td style="width: 120px">产品B</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-03-19</td>
                        <td style="width: 120px">5345169815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">5</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">云南省楚雄彝族自治州</td>
                        <td style="width: 120px">产品B</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-03-31</td>
                        <td style="width: 120px">5345334515</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">牛</td>
                        <td style="width: 60px">4</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">云南省西双版纳傣族自治州</td>
                        <td style="width: 120px">产品B</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-04-04</td>
                        <td style="width: 120px">5323449815</td>
                        <td style="width: 120px">小米</td>
                        <td style="width: 120px">羊</td>
                        <td style="width: 60px">1</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省迪庆藏族自治州</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">产品B</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-05-19</td>
                        <td style="width: 120px">5349079815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">鸭</td>
                        <td style="width: 60px">23</td>
                        <td style="width: 80px">只</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">云南省大理白族自治州</td>
                        <td style="width: 120px">产品B</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-06-01</td>
                        <td style="width: 120px">5345132315</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">32</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">云南省红河哈尼族彝族自治州</td>
                        <td style="width: 120px">产品B</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-08-19</td>
                        <td style="width: 120px">5356769815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">9</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">云南省临沧市</td>
                        <td style="width: 120px">产品B</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-09-29</td>
                        <td style="width: 120px">5378909815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">22</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省昭通市</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">产品B</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-11-13</td>
                        <td style="width: 120px">5349999815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">1</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省临沧市</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">产品B</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2021-01-19</td>
                        <td style="width: 120px">5365769815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">5</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省文山壮族苗族自治州</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">产品B</td>
                      </tr> -->
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div style="height: calc(25% - 40px)" class="main_center main_cen fl">
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
              <div class="main_title1">
  
                  <!-- <span
                style="color: #83c7e3; display: flex; justify-content: center"
              >
                <b style="font-size: 20px; color: rgb(16, 94, 218)">[</b>
                出省检疫出证实时监控
                <b style="font-size: 20px; color: rgb(16, 94, 218)">]</b>
              </span> -->
               <span
               class="le"
                style="color: #fff; display: flex; justify-content: center"
              >
                出省检疫出证实时监控
              </span>
              </div>
              <div class="main_table t_btn8">
                <table>
                  <thead>
                    <tr>
                      <th style="width: 120px">签发时间</th>
                      <th style="width: 120px">检疫证号</th>
                      <th style="width: 120px">货主</th>
                      <th style="width: 120px">动物或产品种类</th>
                      <th style="width: 60px">数量</th>
                      <th style="width: 80px">单位</th>
                      <th style="width: 120px">启运地</th>
                      <th style="width: 120px">目的地</th>
                      <th style="width: 120px">出证类型</th>
                    </tr>
                  </thead>
                </table>
                <div class="scroll-box">
                  <table class="tab-scroll1">
                    <tbody>
                      <tr v-for="(item,index) in mapdata" :key="index">
                        <td style="width: 120px">{{item.time}}</td>
                        <td style="width: 120px">{{item.hao}}</td>
                        <td style="width: 120px">{{item.name}}</td>
                        <td style="width: 120px">{{item.animal}}</td>
                        <td style="width: 60px">{{item.num}}</td>
                        <td style="width: 80px">{{item.unit}}</td>
                        <td style="width: 120px">{{item.address}}</td>
                        <td style="width: 120px">{{item.address1}}</td>
                        <td style="width: 120px">{{item.type}}</td>
                      </tr>
                      <!-- <tr>
                        <td style="width: 120px">2020-03-31</td>
                        <td style="width: 120px">5345334515</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">牛</td>
                        <td style="width: 60px">4</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">动物A</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-04-04</td>
                        <td style="width: 120px">5323449815</td>
                        <td style="width: 120px">小米</td>
                        <td style="width: 120px">羊</td>
                        <td style="width: 60px">1</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">江西省</td>
                        <td style="width: 120px">动物A</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-05-19</td>
                        <td style="width: 120px">5349079815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">鸭</td>
                        <td style="width: 60px">23</td>
                        <td style="width: 80px">只</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">江苏省</td>
                        <td style="width: 120px">动物A</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-06-01</td>
                        <td style="width: 120px">5345132315</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">2</td>
                        <td style="width: 80px">吨</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">新疆</td>
                        <td style="width: 120px">产品A</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-08-19</td>
                        <td style="width: 120px">5356769815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">9</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">江西省</td>
                        <td style="width: 120px">动物A</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-09-29</td>
                        <td style="width: 120px">5378909815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">22</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">江西省</td>
                        <td style="width: 120px">动物A</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-11-13</td>
                        <td style="width: 120px">5349999815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">1</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">上海市</td>
                        <td style="width: 120px">动物A</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2021-01-19</td>
                        <td style="width: 120px">5365769815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">5</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">湖南省</td>
                        <td style="width: 120px">动物A</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-03-19</td>
                        <td style="width: 120px">5345169815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">5</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">湖南省</td>
                        <td style="width: 120px">动物A</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-03-31</td>
                        <td style="width: 120px">5345334515</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">牛</td>
                        <td style="width: 60px">4</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">动物A</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-04-04</td>
                        <td style="width: 120px">5323449815</td>
                        <td style="width: 120px">小米</td>
                        <td style="width: 120px">羊</td>
                        <td style="width: 60px">1</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">江西省</td>
                        <td style="width: 120px">动物A</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-05-19</td>
                        <td style="width: 120px">5349079815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">鸭</td>
                        <td style="width: 60px">23</td>
                        <td style="width: 80px">只</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">江苏省</td>
                        <td style="width: 120px">动物A</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-06-01</td>
                        <td style="width: 120px">5345132315</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">32</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">新疆</td>
                        <td style="width: 120px">动物A</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-08-19</td>
                        <td style="width: 120px">5356769815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">9</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">江西省</td>
                        <td style="width: 120px">动物A</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-09-29</td>
                        <td style="width: 120px">5378909815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">22</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">江西省</td>
                        <td style="width: 120px">动物A</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2020-11-13</td>
                        <td style="width: 120px">5349999815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">1</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">上海市</td>
                        <td style="width: 120px">动物A</td>
                      </tr>
                      <tr>
                        <td style="width: 120px">2021-01-19</td>
                        <td style="width: 120px">5365769815</td>
                        <td style="width: 120px">李养殖</td>
                        <td style="width: 120px">猪</td>
                        <td style="width: 60px">5</td>
                        <td style="width: 80px">头</td>
                        <td style="width: 120px">云南省曲靖市</td>
                        <td style="width: 120px">湖南省</td>
                        <td style="width: 120px">动物A</td>
                      </tr> -->
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div style="height: calc(25% - 40px)" class="main_center main_cen fl">
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
              <div class="main_title1">
              
                  <!-- <span
                style="color: #83c7e3; display: flex; justify-content: center"
              >
                <b style="font-size: 20px; color: rgb(16, 94, 218)">[</b>
                省内实时调运数量排名
                <b style="font-size: 20px; color: rgb(16, 94, 218)">]</b>
              </span> -->
                <span
                class="le"
                style="color: #fff; display: flex; justify-content: center"
              >
                省内实时调运数量排名
              </span>
              </div>
               <paimingzhu v-if="$store.state.animal==='猪'" ref="paiming" style="width: 100%; height: 100%" />

               <ming v-else ref="paiming" style="width: 100%; height: 100%" />


              <!-- <ming ref="paiming" style="width: 100%; height: 100%" /> -->
            </div>
          </div>
          <div style="height: calc(25% - 40px)" class="main_center main_cen fl">
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
              <div class="main_title1">
           
                 <!-- <span
                style="color: #83c7e3; display: flex; justify-content: center"
              >
                <b style="font-size: 20px; color: rgb(16, 94, 218)">[</b>
                出省实时调运数量排名
                <b style="font-size: 20px; color: rgb(16, 94, 218)">]</b>
              </span> -->
               <span
               class="le"
                style="color: #fff; display: flex; justify-content: center"
              >
                出省实时调运数量排名
              </span>
              </div>
                <paimingzhu2 v-if="$store.state.animal==='猪'" ref="paiming2" style="width: 100%; height: 100%" />


              <ming2 v-else ref="paiming2" style="width: 100%; height: 100%" />
            </div>
          </div>
        </div>
        <div class="main_tree fr">
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
            <div class="main_title1">
              <span
              :class="[isRightOne?'le': 'ri']"
              @click="rightani"
                style="color: #fff; display: flex; justify-content: center"
              >
                出省动物数量排名({{this.$store.state.animal}})
              </span>
                <span
                 :class="[!isRightOne?'le': 'ri']"
              @click="rightpi"
               
                style="color: #fff; display: flex; justify-content: center"
              >
                出省动物产品数量排名({{this.$store.state.animal}})
              </span>
              <!-- <span
              :class="[isRightOne?'le': 'ri']"
              
                style="color: #fff; display: flex; justify-content: center"
              >
                {{comrightName?'出省动物数量排名('+this.$store.state.animal+')':'出省动物产品数量排名('+this.$store.state.animal+')'}}

               
              </span> -->
            </div>
           <!-- <transition  mode="out-in">
               <leftone3 v-if="comrightName" ref="rightone" @getTime="rightInterval"  @clearTime="clearrightTime" style="width: 100%; height: 100%" />
               <productpai2 v-else @getTime="rightInterval"  @clearTime="clearrightTime" ref="rightone" style="width: 100%; height: 100%" />
            </transition> -->
            <components :is="isRightOne?'leftone3':'productpai2'" ref="leftone" style="width: 100%; height: 100%" />

            <!-- <div id="chart_3" class="echart t_btn7" style="width:100%;height: 280px;"></div> -->
          </div>
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
            <div class="main_title1">
              <!-- <span
                style="color: #83c7e3; display: flex; justify-content: center"
              >
                <b style="font-size: 20px; color: rgb(16, 94, 218)">[</b>
                调入调出动物数量趋势分析({{this.$store.state.animal}})
                <b style="font-size: 20px; color: rgb(16, 94, 218)">]</b>
              </span> -->
               <span
               class="le"
                style="color: #fff; display: flex; justify-content: center"
              >
                调入调出动物数量趋势分析({{this.$store.state.animal}})
              </span>
            </div>
            
            <rightPig v-if="$store.state.animal==='猪'" ref="righttow" style="width: 100%; height: 100%" />

            <rightone2 v-else ref="righttow" style="width: 100%; height: 100%" />
          </div>
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
            <div class="main_title1">
              <!-- <span
                style="color: #83c7e3; display: flex; justify-content: center"
              >
                <b style="font-size: 20px; color: rgb(16, 94, 218)">[</b>
                调入调出动物数量分布({{this.$store.state.animal}})
                <b style="font-size: 20px; color: rgb(16, 94, 218)">]</b>
              </span> -->
              <span
              class="le"
                style="color: #fff; display: flex; justify-content: center"
              >
                调入调出动物数量分布({{this.$store.state.animal}})
              </span>
            </div>
            <bigrightPig v-if="$store.state.animal==='猪'" style="width: 100%; height: 100%" />
            <big3 v-else style="width: 100%; height: 100%" />

           
          </div>
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
            <div class="main_title1">
              <!-- <span
                style="color: #83c7e3; display: flex; justify-content: center"
              >
                <b style="font-size: 20px; color: rgb(16, 94, 218)">[</b>
                动物产品调入调出数量趋势分析({{this.$store.state.animal}})
                <b style="font-size: 20px; color: rgb(16, 94, 218)">]</b>
              </span> -->
               <span
               class="le"
                style="color: #fff; display: flex; justify-content: center"
              >
                调入调出动物产品数量趋势分析({{this.$store.state.animal}})
              </span>
            </div>
            <rightsecred ref="rightse" style="width: 100%; height: 100%" />
          </div>
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
            <div class="main_title1">
              <!-- <span
                style="color: #83c7e3; display: flex; justify-content: center"
              >
                <b style="font-size: 20px; color: rgb(16, 94, 218)">[</b>
                调入调出动物产品数量分布({{this.$store.state.animal}})
                <b style="font-size: 20px; color: rgb(16, 94, 218)">]</b>
              </span> -->
               <span
               class="le"
                style="color: #fff; display: flex; justify-content: center"
              >
                调入调出动物产品数量分布({{this.$store.state.animal}})
              </span>
            </div>
             <louPig v-if="$store.state.animal=='猪'" style="width: 100%; height: 100%" />

            <lou v-else style="width: 100%; height: 100%" />
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
import yun from '@/utils/yun'
import mapdata from '@/utils/mapdata'
// import can from '@/assets/index.js'
import leftone from "@/components/leftone2.vue";
import priductpai from "@/components/productPai.vue";
import leftone3 from "@/components/leftone3.vue";
import productpai2 from "@/components/productpai2.vue";
import mymap from "../components/mapfei.vue";
import mapfeiyn from "../components/mapfeiyn.vue";

import rightone2 from "../components/rightone3.vue";
import rightsecred from "../components/rightsecred2.vue";
import righttree2 from "../components/righttree2.vue";
import ming from "../components/paiming";
import ming2 from "../components/paiming2";
import paimingzhu from "../components/paimingzhu";
import paimingzhu2 from "../components/paimingzhu2";
import big2 from "../components/big2";
import big3 from "../components/big3";
import xian from "../components/xian";
import xianPig from "../components/xianPig";
import xianPig2 from "../components/xianPig2";
import lou from "../components/lou";
import louPig from "../components/louPig";
import xian2 from "../components/xian2";
import bigleftPig from "../components/bigleftPig";
import bigleftPig2 from "../components/bigleftPig2";
import bigrightPig from "../components/bigrightPig";
import rightPig from '../components/rightPig'
export default {
  components: {
    xianPig2,
    rightPig,
    louPig,
    bigrightPig,
    bigleftPig2,
    bigleftPig,
    paimingzhu2,
    paimingzhu,
    leftone,
    productpai2,
    priductpai,
    xian,
    xianPig,
    xian2,
    lou,
    big3,
    leftone3,
 
    big2,
    ming,
    ming2,
  
   
    mymap,
    mapfeiyn,
    rightone2,
    rightsecred,
    righttree2,
  },
  data() {
    return {
      leftName: 'leftone',
      timeId: null,
       timeId1: null,
       intervalTime: null,
      comName:true,
      comrightName: true,
      rightTime: null,
      isRightOne: true,
      isLeftOne: true,
      mapdata,
      yundata: yun,
      changed: 0,
      leftClick: true,
      rightClick: true,
      animalList: ["猪", "牛", "羊","其它家畜", "鸡", "鸭", "鹅","其它家禽"],
      pai: [
        { ming: 1, name: "昆明市", num: 18000 },
        { ming: 2, name: "曲靖市", num: 17000 },
        { ming: 3, name: "昭通市", num: 16000 },
        { ming: 4, name: "德宏州", num: 15000 },
        { ming: 5, name: "迪庆州", num: 14000 },
        { ming: 6, name: "大理州", num: 13000 },
        { ming: 7, name: "玉溪市", num: 9243 },
        { ming: 8, name: "临沧市", num: 8796 },
        { ming: 9, name: "保山市", num: 7536 },
        { ming: 10, name: "丽江市", num: 4567 },
        { ming: 9, name: "普洱市", num: 3792 },
        { ming: 10, name: "西双版纳州", num: 2290 },
      ],
      arr: [
        {time: '2020-03-19',hao: '5345169815',name: '李养殖',animal: '猪',num:5,unit: '头',address: '云南省曲靖市',address1:'云南省曲靖市',pro:'产品B'},
        {time: '2020-03-21',hao: '5345169815',name: '李养殖',animal: '猪',num:5,unit: '头',address: '云南省曲靖市',address1:'云南省曲靖市',pro:'产品B'},
        {time: '2020-03-23',hao: '5345169815',name: '李养殖',animal: '猪',num:5,unit: '头',address: '云南省曲靖市',address1:'云南省曲靖市',pro:'产品B'},
        {time: '2020-03-24',hao: '5345169815',name: '李养殖',animal: '猪',num:5,unit: '头',address: '云南省曲靖市',address1:'云南省曲靖市',pro:'产品B'},
        {time: '2020-03-25',hao: '5345169815',name: '李养殖',animal: '猪',num:5,unit: '头',address: '云南省曲靖市',address1:'云南省曲靖市',pro:'产品B'},
        {time: '2020-03-26',hao: '5345169815',name: '李养殖',animal: '猪',num:5,unit: '头',address: '云南省曲靖市',address1:'云南省曲靖市',pro:'产品B'},
        {time: '2020-03-129',hao: '5345169815',name: '李养殖',animal: '猪',num:5,unit: '头',address: '云南省曲靖市',address1:'云南省曲靖市',pro:'产品B'},
        {time: '2020-03-19',hao: '5345169815',name: '李养殖',animal: '猪',num:5,unit: '头',address: '云南省曲靖市',address1:'云南省曲靖市',pro:'产品B'},
        {time: '2020-03-19',hao: '5345169815',name: '李养殖',animal: '猪',num:5,unit: '头',address: '云南省曲靖市',address1:'云南省曲靖市',pro:'产品B'},
        {time: '2020-03-19',hao: '5345169815',name: '李养殖',animal: '猪',num:5,unit: '头',address: '云南省曲靖市',address1:'云南省曲靖市',pro:'产品B'},
     
     ]
    };
  },
  mounted() {
    // can()
    this.roll();
    this.roll1();
    // this.startInterval()
    // this.rightInterval()
  //  setTimeout(()=>{
  //    this.comName = !this.comName
  //  },3000)
  },
  methods: {
    rightani() {
    if(!this.isRightOne) {
        this.isRightOne = true
        // this.$refs.rightone.initChart()
      }
    },
    rightpi() {
      if(this.isRightOne) {
        this.isRightOne = false
        // this.$refs.rightone.pai()
      }
    },
    ani() {
      if(!this.isLeftOne) {
        this.isLeftOne = true
        // this.$refs.leftone.initChart()
      }
     
    },
    leftpai() {
 if(this.isLeftOne) {
        this.isLeftOne = false
        // this.$refs.leftone.pai()
      }
    },
    handLi(index) {
      this.changed = index;
      
      this.$store.dispatch('changeAnimal',this.animalList[index])
      if(index>2) {
      this.$store.dispatch('changeUnit','只')
       this.yundata = this.yundata.map(item => {
        item.animal = this.animalList[index]
        if(item.util!='吨'){
          item.util = '只'
        }
        
        return item
      })
       this.mapdata = this.mapdata.map(item => {
        item.animal = this.animalList[index]
       if(item.unit!='吨'){
          item.unit = '只'
        }
        return item
      })
      }else {
      this.$store.dispatch('changeUnit','头')
       this.yundata = this.yundata.map(item => {
        item.animal = this.animalList[index]
       if(item.util!='吨'){
          item.util = '头'
        }
        return item
      })
      this.mapdata = this.mapdata.map(item => {
        item.animal = this.animalList[index]
        if(item.unit!='吨'){
          item.unit = '头'
        }
        return item
      })
      }
     
      this.$refs.leftone.screenAdapter()
       this.$refs.xian.screenAdapter()
        // this.$refs.rightone.screenAdapter()
        this.$refs.righttow.screenAdapter()
         this.$refs.paiming.screenAdapter()
        this.$refs.paiming2.screenAdapter()
        this.$refs.big2.screenAdapter()
         this.$refs.righttree2.screenAdapter()
         this.$refs.yunmap.animate()
         this.$refs.mymap.animate()

      
    },
    roll() {
      var sTab = document.getElementsByClassName("tab-scroll")[0]; //要滚动的表
    
      var tbody = sTab.getElementsByTagName("tbody")[0]; //要滚动表格的内容
      // sTab.appendChild(tbody.cloneNode(true));//追加一次滚动内容,以防滚动后可视区域无内容
      console.log(sTab.getElementsByTagName("td")[0].offsetHeight);
      var speed = sTab.getElementsByTagName("td")[0].offsetHeight + 1; //每次滚动的距离
      var tbdh = tbody.offsetHeight + 1; //整个表的高度,是因为上边的边不算滚动
      var i = 0
      var that = this
      function scrollTop() {
        i++;
       
       
        var t = sTab.offsetTop; //获取要滚动表的位置
      
        if (that.yundata.length-i<=8) {
          i = 0
          //比较 滚动的距离等于整个表的高度 即第一个表完全看不见
          sTab.style.transition = "0s"; //过渡动画设为0秒
          sTab.style.top = 0; //位置设为初始位置
          that.$refs.yunmap.getfei(that.yundata[i])

          scrollTop(); //因为偷梁换柱消耗了一次过程,所以把这一次过程补回来
        } else {
         
          sTab.style.transition = "1s";
          sTab.style.top = t - speed + "px";
            that.$refs.yunmap.getfei(that.yundata[i])
        }
      }
       if(this.timeId) {
        clearInterval(this.timeId)
      }
     this.timeId = setInterval(scrollTop, 4000);
    },
     roll1() {
      var sTab = document.getElementsByClassName("tab-scroll1")[0]; //要滚动的表
  
      var tbody = sTab.getElementsByTagName("tbody")[0]; //要滚动表格的内容
      // sTab.appendChild(tbody.cloneNode(true));//追加一次滚动内容,以防滚动后可视区域无内容
      console.log(sTab.getElementsByTagName("td")[0].offsetHeight);
      var speed = sTab.getElementsByTagName("td")[0].offsetHeight + 1; //每次滚动的距离
      var tbdh = tbody.offsetHeight + 1; //整个表的高度,是因为上边的边不算滚动
      var n = 0
      var that = this
      function scrollTop() {
        n ++;
        var t = sTab.offsetTop; //获取要滚动表的位置
      
        if (that.mapdata.length-n<=8) {
          n = 0
          //比较 滚动的距离等于整个表的高度 即第一个表完全看不见
          sTab.style.transition = "0s"; //过渡动画设为0秒
          sTab.style.top = 0; //位置设为初始位置
          scrollTop(); //因为偷梁换柱消耗了一次过程,所以把这一次过程补回来
        } else {
          sTab.style.transition = "1s";
          sTab.style.top = t - speed + "px";
        }
      }
       if(this.timeId1) {
        clearInterval(this.timeId1)
      }
     this.timeId1 =  setInterval(scrollTop, 3000);
    },
    leftYear() {
      if(this.leftClick){
         this.leftClick = false
      //  this.$refs.leftone.updateYear()
        this.$refs.xian.updateYear()
      //    this.$refs.righttree2.updateYear()
          this.$refs.xian2.updateYear()
      //      this.$refs.big2.updateYear()
      }
     
    },
    leftMonth() {
      if(!this.leftClick) {
        this.leftClick = true
        this.$refs.xian.updateMonth()
         this.$refs.xian2.updateMonth()
        }
    },
     rightYear() {
      if(this.rightClick){
         this.rightClick = false
        this.$refs.righttow.updateYear()
          this.$refs.rightse.updateYear()
      }
     
    },
    rightMonth() {
      if(!this.rightClick) {
        this.rightClick = true
        this.$refs.righttow.updateMonth()
         this.$refs.rightse.updateMonth()
        }
    },
     startInterval() {
      if(this.intervalTime) {
        clearInterval(this.intervalTime)
      }
     this.intervalTime = setInterval(()=>{
        this.comName = !this.comName
      },10000)
    },
    rightInterval() {
      if(this.rightTime) {
        clearInterval(this.rightTime)
      }
     this.rightTime = setInterval(()=>{
        this.comrightName = !this.comrightName
      },10000)
    },
    clearTime() {
       clearInterval(this.intervalTime)
    },
    clearrightTime() {
       clearInterval(this.rightTime)
    }
   

  },
  
};
</script>

<style scoped>
 .v-enter,
    .v-leave-to {
      opacity: 0;
      transform: translateX(150px);
    }

    .v-enter-active,
    .v-leave-active {
      transition: all 0.5s ease;
    }


.t_title {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 2.5em;
  line-height: 80px;
  color: #fff;
}
#chart_map {
  cursor: pointer;
}
/* .t_show{
            position: absolute;
            top: 0;
            right: 0;
            border-radius: 2px;
            background: #2C58A6;
            padding: 2px 5px;
            color: #fff;
            cursor: pointer;
        }
         .data_content .data_main >>> .main_left{
            height: calc(100% + 50px) ;
        }
        .data_content .data_main .main_left>div {
            height: 100%;
        } */
.scroll-box {
  height: 350px;
  overflow: hidden;
  position: relative;
}
.tab-scroll {
  position: relative;
  left: 0;
  top: 0;
  border-top: none;
}
.tab-scroll td {
  border-top: none;
}
.tab-scroll1 {
  position: relative;
  left: 0;
  top: 0;
  border-top: none;
}
.tab-scroll1 td {
  border-top: none;
}
</style>