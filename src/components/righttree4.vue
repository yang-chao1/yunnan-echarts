<template>
  <div class="com-container">
    <div ref="righttree_ref" class="com-chart"></div>
    <div ref="righttree_ref1" class="com-chart"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartInstance: null,
      chartInstance1: null,
      sericeData: [
        {
          name: "屠宰",
          value: 70,
          itemStyle: { color: "#0BA82C" }, // 颜色
        },
        {
          name: "饲养",
          value: 68,
          itemStyle: { color: "#2E72BF" }, // 颜色
        },
        {
          name: "种用",
          value: 48,
          itemStyle: { color: "#23E5E5" }, // 颜色
        },
      ],
      sericeData1: [
        {
          name: "屠宰",
          value: 70,
          itemStyle: { color: "#0BA82C" }, // 颜色
        },
        {
          name: "饲养",
          value: 68,
          itemStyle: { color: "#2E72BF" }, // 颜色
        },
        {
          name: "种用",
          value: 48,
          itemStyle: { color: "#23E5E5" }, // 颜色
        },
      ],
    };
  },
  mounted() {
    this.initChart();
     this.initChart1();
    window.addEventListener("resize", this.screenAdapter);
    this.screenAdapter();
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.righttree_ref);
          const dataStyle = {
	normal: {
		label: {
			show: false
		},
		labelLine: {
			show: false
		},
		//shadowBlur: 40,
		//shadowColor: 'rgba(40, 40, 40, 1)',
	}
};
const placeHolderStyle = {
	normal: {
		color: 'rgba(255,255,255,.05)',
		label: {show: false,},
		labelLine: {show: false}
	},
	emphasis: {
		color: 'rgba(0,0,0,0)'
	}
};
      const initOption ={
	color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
	tooltip: {
		show: true,
		formatter: "{a} : {c} "
	},
	legend: {
		itemWidth: 10,
        itemHeight: 10,
		itemGap: 12,
		bottom: '3%',
		
		data: ['浙江', '上海', '广东', '北京', '深圳'],
		textStyle: {
                    color: 'rgba(255,255,255,.8)',
                }
	},
	
	series: [
		{
		name: '浙江',
		type: 'pie',
		clockWise: false,
		center: ['50%', '42%'],
		radius: ['59%', '70%'],
		itemStyle: dataStyle,
		hoverAnimation: false,
		data: [{
			value: 80,
			name: '01'
		}, {
			value: 20,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	},
		{
		name: '上海',
		type: 'pie',
		clockWise: false,
		center: ['50%', '42%'],
		radius: ['49%', '60%'],
		itemStyle: dataStyle,
		hoverAnimation: false,
		data: [{
			value: 70,
			name: '02'
		}, {
			value: 30,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, 
		{
		name: '广东',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['39%', '50%'],
		itemStyle: dataStyle,
		data: [{
			value: 65,
			name: '03'
		}, {
			value: 35,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	},
		{
		name: '北京',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['29%', '40%'],
		itemStyle: dataStyle,
		data: [{
			value: 60,
			name: '04'
		}, {
			value: 40,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, 
		{
		name: '深圳',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['20%', '30%'],
		itemStyle: dataStyle,
		data: [{
			value: 50,
			name: '05'
		}, {
			value: 50,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, ]
};
      this.chartInstance.setOption(initOption);
    
    },
    initChart1() {
      this.chartInstance1 = this.$echarts.init(this.$refs.righttree_ref1);
         const dataStyle = {
	normal: {
		label: {
			show: false
		},
		labelLine: {
			show: false
		},
		//shadowBlur: 40,
		//shadowColor: 'rgba(40, 40, 40, 1)',
	}
};
const placeHolderStyle = {
	normal: {
		color: 'rgba(255,255,255,.05)',
		label: {show: false,},
		labelLine: {show: false}
	},
	emphasis: {
		color: 'rgba(0,0,0,0)'
	}
};
      const initOption =  {
	color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
	tooltip: {
		show: true,
		formatter: "{a} : {c} "
	},
	legend: {
		itemWidth: 10,
        itemHeight: 10,
		itemGap: 12,
		bottom: '3%',
		
		data: ['浙江', '上海', '广东', '北京', '深圳'],
		textStyle: {
                    color: 'rgba(255,255,255,.8)',
                }
	},
	
	series: [
		{
		name: '浙江',
		type: 'pie',
		clockWise: false,
		center: ['50%', '42%'],
		radius: ['59%', '70%'],
		itemStyle: dataStyle,
		hoverAnimation: false,
		data: [{
			value: 80,
			name: '01'
		}, {
			value: 20,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	},
		{
		name: '上海',
		type: 'pie',
		clockWise: false,
		center: ['50%', '42%'],
		radius: ['49%', '60%'],
		itemStyle: dataStyle,
		hoverAnimation: false,
		data: [{
			value: 70,
			name: '02'
		}, {
			value: 30,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, 
		{
		name: '广东',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['39%', '50%'],
		itemStyle: dataStyle,
		data: [{
			value: 65,
			name: '03'
		}, {
			value: 35,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	},
		{
		name: '北京',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['29%', '40%'],
		itemStyle: dataStyle,
		data: [{
			value: 60,
			name: '04'
		}, {
			value: 40,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, 
		{
		name: '深圳',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['20%', '30%'],
		itemStyle: dataStyle,
		data: [{
			value: 50,
			name: '05'
		}, {
			value: 50,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, ]
};
      this.chartInstance1.setOption(initOption);
    
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

      this.chartInstance.resize();
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
    flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>