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
		  'rgba(50,123,250,0.7)','rgba(181, 195, 52,0.7)','rgba(252, 206, 16,0.7)','rgba(232, 124, 37,0.7)',
		  'rgba(39, 114, 123,0.7)','rgba(128, 0, 0,0.7)','rgba(220, 20, 60,0.7)','rgba(199, 21, 133,0.7)',
		  'rgba(75, 0, 130,0.7)','rgba(153, 50, 204,0.7)','rgba(255, 228, 181,0.7)','rgba(102, 226, 164,0.7)',
		  'rgba(205, 133, 63,0.7)','rgba(153, 50, 204,0.7)','rgba(34, 139, 34,0.7)'
	  ],
     colorList1: [
		  'rgba(50,123,250,1)','rgba(181, 195, 52,1)','rgba(252, 206, 16,1)','rgba(232, 124, 37,1)',
		  'rgba(39, 114, 123,1)','rgba(128, 0, 0,1)','rgba(220, 20, 60,1)','rgba(199, 21, 133,1)',
		  'rgba(75, 0, 130,1)','rgba(153, 50, 204,1)','rgba(255, 228, 181,1)','rgba(102, 226, 164,1)',
		  'rgba(205, 133, 63,1)','rgba(153, 50, 204,1)','rgba(34, 139, 34,1)'
	  ],
       shi: [{
            value: 115,
            label: '昆明市'
        }, {
            value: 19,
            label: '曲靖市'
        }, {
            value: 23,
            label: '昭通市'
        }, {
            value: 43,
            label: '德宏州'
        }, {
            value: 34,
            label: '迪庆州'
        }, {
            value: 53,
            label: '大理州'
        }, {
            value: 12,
            label: '玉溪市'
        }, {
            value: 34,
            label: '临沧市'
        }, {
            value: 34,
            label: '保山市'
        }, {
            value: 34,
            label: '丽江市'
        },{
            value: 7,
            label: '怒江州'
        }, {
            value: 19,
            label: '普洱市'
        }, {
            value: 23,
            label: '西双版纳州'
        }, {
            value: 23,
            label: '楚雄州'
        }, {
            value: 23,
            label: '红河州'
        }, {
            value: 23,
            label: '文山州'
        }]
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
     const data = this.shi.map((item,index)=>{
        return {
          name: item.label,
          value:item.value,
          itemStyle:{ color: this.colorList[index],
           borderColor: this.colorList1[index],
                    borderWidth: 3
          
          },
           
        }
      })
      const initOption = {
         grid : {
        top : 40,    //距离容器上边界40像素
        bottom: 30,   //距离容器下边界30像素
      
    },
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "7%",
         show: false,
          left: "center",
          textStyle: {
            color: "#FFF",
          },
        },
        series: [
          {
            type: "pie",
            radius: ["40", "70%"],
            avoidLabelOverlap: false,
             roseType: 'radius',
            // itemStyle: {
            //   borderRadius: 10,
            //   borderColor: "rgba(221, 220, 107, .1)",
            //   borderWidth: 2,
            // },
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
            data: data,
             itemStyle:{ 
								        normal:{ 
								           label:{ 
								              show: true, 
								              formatter: '{b} : {c} ({d}%)' 
								              }, 
                                padding: [10, -70],
								              labelLine :{
                                show:true,
                                length:10,
                                 color:'red',
                                length2:10,
                              
                              } 
								              } 
								         } 
                    	            

          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },
    initChart1() {
         const data = this.shi.map((item,index)=>{
        return {
          name: item.label,
          value:item.value,
          itemStyle:{ color: this.colorList[index],
           borderColor: this.colorList1[index],
                    borderWidth: 3
          
          
          },
           
        }
      })
      this.chartInstance1 = this.$echarts.init(this.$refs.righttree_ref1);
      const initOption = {
    tooltip: {
        trigger: 'item',
        formatter: e => {
            return `
                ${e.name}<br/>
                人数: ${e.data.value}人<br/>
                及格率: ${e.data.rate}%
            `
        }
    },
    angleAxis: {
        type: 'category',
        // 去掉边线
        axisLine: {
            show: false
        },
    },
    radiusAxis: {
        max: 100,
        // 去掉刻度线
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
    },
    polar: {
        radius: [0, '50%']
    },
    series: [
        // 饼图
        {
            type: 'pie',
            radius: [0, '50%'],
            label: {
                color: '#333',
                lineHeight: 14,
                formatter: e => {
                    return `${e.name}\n人数: ${e.data.value}人\n及格率: ${e.data.rate}%`
                }
            },
            labelLine: {
                length: 20,
                lineStyle: {
                    color: '#999'
                }
            },
            itemStyle: {
                borderWidth: 3,
                borderColor: '#fff',
                shadowColor: 'rgba(0, 0, 0, .2)',
                shadowBlur: 6,
                shadowOffsetY: 4
            },
            data: [
                {
                    value: 45,
                     // 因为触发的是饼图的 tooltip，这里对应放极坐标的 data 值
                    rate: 78,
                    name: '一班',
                    itemStyle: {
                        color: 'rgba(255, 198, 93, .4)',
                    }
                },
                {
                    value: 47,
                    rate: 65,
                    name: '二班',
                    itemStyle: {
                        color: 'rgba(127, 229, 253, .4)',
                    }
                },
                {
                    value: 48,
                    rate: 50,
                    name: '三班',
                    itemStyle: {
                        color: 'rgba(145, 205, 241, .4)',
                    }
                },
                {
                    value: 30,
                    rate: 80,
                    name: '四班',
                    itemStyle: {
                        color: 'red',
                    }
                },
            ],
        },
        // 极坐标 - 玫瑰图
        {
            type: 'bar',
            name: '一班',
            max: 100, // 100 的比例
            data: [78], // 控制半径占比
            barWidth: (45 / 170) * 100 + '%', // 控制和饼图角度一致
            barGap: 0,
            itemStyle: {
                color: '#ffc65d',
                shadowColor: '#000',
                shadowBlur: 6
            },
            coordinateSystem: 'polar',
        }, {
            type: 'bar',
            name: '二班',
            data: [65],
            max: 100,
            barWidth:  (47 / 170) * 100 + '%',
            barGap: 0,
            itemStyle: {
                color: '#7fe5fd',
                shadowColor: '#000',
                shadowBlur: 6
            },
            coordinateSystem: 'polar',
        }, {
            type: 'bar',
            name: '三班',
            data: [50],
            max: 100,
            barWidth:  (48 / 170) * 100 + '%',
            barGap: 0,
            itemStyle: {
                color: '#8db9ff',
                shadowColor: '#000',
                shadowBlur: 6
            },
            coordinateSystem: 'polar',
        }, {
            type: 'bar',
            name: '四班',
            data: [80],
            max: 100,
            barWidth: (30 / 170) * 100 + '%',
            barGap: 0,
            itemStyle: {
                color: 'black',
                shadowColor: '#000',
                shadowBlur: 6
            },
            coordinateSystem: 'polar',
        }
    ],
  }
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
      const titleFontSize = (this.$refs.righttree_ref.offsetWidth / 100) * 7;

      const adapterOption = {
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