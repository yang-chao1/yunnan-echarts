// 2. 指定配置和数据
// 2. 指定配置和数据
import echarts from 'echarts'
import yunnan from '@/assets/yunnan.json'
echarts.registerMap('云南', yunnan)
function randomData() {
  return Math.round(Math.random() * 500)
}

export var geoCoordMap = {
  '昆明市': [102.852448, 24.873998],
  '曲靖市': [103.802434, 25.49640693],
  '玉溪市': [102.553560, 24.357711],
  '保山市': [99.177273, 25.139039],
  '昭通市': [103.723512, 27.344084],
  '临沧市': [100.095440, 23.890469],
  '文山州': [104.222569, 23.405994],
  '红河州': [103.381549, 23.369996],
  '楚雄州': [101.534412, 25.051774],
  '大理州': [100.274583, 25.612128],
  '丽江市': [100.232465, 26.860657],
  '普洱市': [100.972570, 22.830979],
  '德宏州': [98.591359, 24.438011],
  '怒江州': [98.863288, 25.823707],
  '迪庆州': [99.709530, 27.825185],
  '西双版纳州': [100.803447, 22.013601],

};

var XAData = [
  [{ name: "昆明市" }, { name: "曲靖市", value: 100 }],
  [{ name: "昆明市" }, { name: "玉溪市", value: 100 }],
  [{ name: "昆明市" }, { name: "保山市", value: 100 }],
  [{ name: "昆明市" }, { name: "文山州", value: 100 }],
  [{ name: "昆明市" }, { name: "楚雄州", value: 100 }],
  [{ name: "昆明市" }, { name: "怒江州", value: 100 }]
];


var XNData = [

  [{ name: "丽江市" }, { name: "曲靖市", value: 50 }],
  [{ name: "丽江市" }, { name: "昆明市", value: 100 }],
  [{ name: "丽江市" }, { name: "德宏州", value: 100 }],
  [{ name: "丽江市" }, { name: "红河州", value: 100 }],
  [{ name: "丽江市" }, { name: "大理州", value: 100 }]
];

var YCData = [
  [{ name: "西双版纳州" }, { name: "普洱市", value: 100 }],

  [{ name: "昭通市" }, { name: "临沧市", value: 100 }],

  [{ name: "昭通市" }, { name: "大理州", value: 100 }],
  [{ name: "昭通市" }, { name: "德宏州", value: 100 }],
  [{ name: "昭通市" }, { name: "玉溪市", value: 100 }]
];

export var planePath =
  "image://car3.png"
// "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
//var planePath = 'arrow';
var convertData = function (data) {
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
};

var color = ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff"]; //航线的颜色
var series = [];
[
  ["昆明市", XAData],
  ["丽江市", XNData],
  ["昭通市", YCData],

].forEach(function (item, i) {
  series.push(

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
      data: convertData(item[1])
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
        symbolSize: 15
      },
      lineStyle: {
        normal: {
          color: color[0],
          width: 1,
          opacity: 0.6,
          curveness: 0.2
        }
      },
      data: convertData(item[1])
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
          color: color[i]
        },
        emphasis: {
          areaColor: "#2B91B7"
        }
      },
      data: item[1].map(function (dataItem) {
        // console.log(dataItem)
        return {
          name: dataItem[1].name,
          value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
        };
      })
    },
    //中心点
    //             {
    //                 type: 'scatter',
    //                 coordinateSystem: 'geo',
    //                 zlevel: 2,
    //                 rippleEffect: {
    //                     period: 4,
    //                     brushType: 'stroke',
    //                     scale: 4
    //                 },
    //                 label: {
    //                     normal: {
    //                         show: false,
    //                         position: 'right',
    //                         //offset:[5, 0],
    //                         color: '#0f0',
    //                         formatter: '{b}',
    //                         textStyle: {
    //                             color: "#0f0"
    //                         }
    //                     },
    //                     emphasis: {
    //                         show: true,
    //                         color: "#f60"
    //                     }
    //                 },
    //                 symbol: 'pin',
    //                 symbolSize: 50,
    //                 data: [{
    //                     name: item[0],
    //                     value: geoCoordMap[item[0]].concat([10]),
    //                 }],
    //             }

  );
});
console.log(series)
var option = {
  tooltip: {
    trigger: "item",
    formatter: function (params, ticket, callback) {
      if (params.seriesType == "effectScatter") {
        // return "线路：" + params.data.name + "" + params.data.value[2];
        return params.data.name + "" + params.data.value[2];

      } else if (params.seriesType == "lines") {
        return (
          params.data.fromName +
          ">" +
          params.data.toName +
          "<br />" +
          params.data.value
        );
      } else {
        return params.name;
      }
    }
  },

  // geo: {
  //   map: "云南",

  //   label: {
  //     show: true,

  //     textStyle: {
  //       fontSize: 12,
  //       fontWeight: 'bold',
  //       color: '#FFF'
  //     },

  //     emphasis: {
  //       show: true,
  //       color: "#fff"
  //     }

  //   },
  //   roam: false,
  //   aspectScale: 1.2, // 长宽比
  //   //   放大我们的地图
  //   zoom: 1,
  //   top: 50,
  //   data: [{
  //     name: '文山州',
  //     selected: false,
  //     itemStyle: {
  //       areaColor: {
  //         type: 'radial',
  //         x: 0.5,
  //         y: 0.5,
  //         r: 0.5,
  //         colorStops: [{
  //           offset: 0,
  //           color: 'red'
  //         }, {
  //           offset: 1,
  //           color: 'red'
  //         }],
  //         global: false // 缺省为 false
  //       }
  //     }
  //   } // selected:true 默认选中
  //   ],
  //   itemStyle: {
  //     normal: {

  //       borderColor: 'rgba(147, 235, 248, 1)',
  //       borderWidth: 1,
  //       areaColor: {
  //         type: 'radial',
  //         x: 0.5,
  //         y: 0.5,
  //         r: 0.8,
  //         colorStops: [{
  //           offset: 0,
  //           color: 'rgba(175,238,238, 0)' // 0% 处的颜色
  //         }, {
  //           offset: 1,
  //           color: 'rgba(	47,79,79, .1)' // 100% 处的颜色
  //         }],
  //         globalCoord: false // 缺省为 false
  //       },
  //       shadowColor: 'rgba(128, 217, 248, 1)',
  //       // shadowColor: 'rgba(255, 255, 255, 1)',
  //       shadowOffsetX: -2,
  //       shadowOffsetY: 2,
  //       shadowBlur: 10
  //     },
  //     emphasis: {
  //       areaColor: "#2B91B7" // 鼠标移入地图板块变色
  //     }
  //   },

  // },
   geo: {
    map: "云南",

    label: {
      show: true,

      textStyle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFF'
      },

      emphasis: {
        show: true,
        color: "#fff"
      }

    },
    roam: false,
    aspectScale: 1.2, // 长宽比
    //   放大我们的地图
    zoom: 1,
    top: 50,
    data: [{
      name: '文山州',
      selected: false,
      itemStyle: {
        areaColor: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [{
            offset: 0,
            color: 'red'
          }, {
            offset: 1,
            color: 'red'
          }],
          global: false // 缺省为 false
        }
      }
    } // selected:true 默认选中
    ],
    itemStyle: {
      normal: {

        borderColor: 'rgba(147, 235, 248, 1)',
        borderWidth: 1,
        areaColor: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.8,
          colorStops: [{
            offset: 0,
            color: 'rgba(175,238,238, 0)' // 0% 处的颜色
          }, {
            offset: 1,
            color: 'rgba(	47,79,79, .1)' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
        },
        shadowColor: 'rgba(128, 217, 248, 1)',
        // shadowColor: 'rgba(255, 255, 255, 1)',
        shadowOffsetX: -2,
        shadowOffsetY: 2,
        shadowBlur: 10
      },
      emphasis: {
        areaColor: "#2B91B7" // 鼠标移入地图板块变色
      }
    },

  },
  series: []
  // series: series
};
export default option