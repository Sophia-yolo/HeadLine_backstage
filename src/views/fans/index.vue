<template>
  <div class="fans-container">
    <section class="main">
      <div class="column">
        <div class="panel bar">
          <h2>
            柱形图-观看日期
          </h2>
            <div class="chart" ref="bar"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <h2>
            折线图-人员变化
            <!-- <a href="javascript:;">2020</a><a href="javascript:;">2021</a> -->
          </h2>
          <div class="chart" ref="line"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <h2>饼形图-年龄分布</h2>
          <div class="chart" ref="pie"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="column">
        <div class="no">
          <div class="no-hd">
            <ul>
              <li>125811</li>
              <li>104563</li>
            </ul>
          </div>
          <div class="no-bd">
            <ul>
              <li>前端需求人数</li>
              <li>市场供应人数</li>
            </ul>
          </div>
        </div>
        <div class="map">
          <div class="chart"></div>
          <div class="map1"></div>
          <div class="map2"></div>
          <div class="map3"></div>
        </div>
      </div>
      <div class="column">
        <div class="panel bar1">
          <h2>柱状图-技能掌握</h2>
          <div class="chart" ref="histogram"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line1">
          <h2>折线图-播放量</h2>
          <div class="chart" ref="linechart"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie1">
          <h2>饼形图-地区分布</h2>
          <div class="chart" ref="piechart"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'fansIndex',
  mounted () {
    // 柱状图
    var barChart = this.$refs.bar
    var myBarChart = this.$echarts.init(barChart)
    // var data1 = Math.floor(Math.random() * (1499) + 1)
    var option1 = {
      // darkMode: true,
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '0%',
        top: '10px',
        right: '0%',
        bottom: '4%',
        containLabel: true
      },
      textStyle: {
        fontSize: '12',
        color: 'rgba(255,255,255,.6)'
      },
      axisPointer: {
        shadowStyle: {
          color: 'rgba(50, 50, 50, 0.1)'
        }
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.1)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.1)'
            }
          }
        }
      ],
      series: [
        {
          name: '直接访问',
          type: 'bar',
          barWidth: '35%',
          data: [400, 300, 300, 900, 1500, 1200, 600],
          itemStyle: {
            borderRadius: 5
          }
        }
      ]
    }
    option1 && myBarChart.setOption(option1)

    // 折线图
    var lineChart = this.$refs.line
    var myLineChart = this.$echarts.init(lineChart)
    // (1)准备数据
    var data2 = {
      year: [
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    }
    // 2. 指定配置和数据
    var option2 = {
      color: ['#00f2f1', '#ed3f35'],
      tooltip: {
        // 通过坐标轴来触发
        trigger: 'axis'
      },
      legend: {
        // 距离容器10%
        right: '10%',
        // 修饰图例文字的颜色
        textStyle: {
          color: '#4c9bfd'
        }
        // 如果series 里面设置了name，此时图例组件的data可以省略
        // data: ["邮件营销", "联盟广告"]
      },
      grid: {
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        show: true,
        borderColor: 'rgba(255,255,255,.2)',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10',
          '11',
          '12'
        ],
        // 去除刻度
        axisTick: {
          show: false
        },
        // 修饰刻度标签的颜色
        axisLabel: {
          color: 'rgba(255,255,255,.5)'
        },
        // 去除x坐标轴的颜色
        axisLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        // 去除刻度
        axisTick: {
          show: false
        },
        // 修饰刻度标签的颜色
        axisLabel: {
          color: 'rgba(255,255,255,.5)'
        },
        // 修改y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }
      },
      series: [
        {
          name: '新增粉丝',
          type: 'line',
          stack: '总量',
          // 是否让线条圆滑显示
          smooth: true,
          data: data2.year[0]
        },
        {
          name: '新增游客',
          type: 'line',
          stack: '总量',
          smooth: true,
          data: data2.year[1]
        }
      ]
    }
    option2 && myLineChart.setOption(option2)

    // 饼形图
    var myPieChart = this.$echarts.init(this.$refs.pie)
    var option3 = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
        position: function (p) {
          // 其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10]
        }
      },
      legend: {
        top: '90%',
        itemWidth: 10,
        itemHeight: 10,
        data: ['0岁以下', '20-29岁', '30-39岁', '40-49岁', '50岁以上'],
        textStyle: {
          color: 'rgba(255,255,255,.5)',
          fontSize: '12'
        }
      },
      series: [
        {
          name: '年龄分布',
          type: 'pie',
          center: ['50%', '42%'],
          radius: ['40%', '60%'],
          color: [
            '#065aab',
            '#066eab',
            '#0682ab',
            '#0696ab',
            '#06a0ab',
            '#06b4ab',
            '#06c8ab',
            '#06dcab',
            '#06f0ab'
          ],
          label: { show: false },
          labelLine: { show: false },
          data: [
            { value: 1, name: '0岁以下' },
            { value: 4, name: '20-29岁' },
            { value: 2, name: '30-39岁' },
            { value: 2, name: '40-49岁' },
            { value: 1, name: '50岁以上' }
          ]
        }
      ]
    }
    option3 && myPieChart.setOption(option3)

    // 柱状图
    var hisChart = this.$refs.histogram
    var myHisChart = this.$echarts.init(hisChart)
    var data4 = [70, 34, 60, 78, 69]
    var titlename = ['HTML5', 'CSS3', 'javascript', 'VUE', 'NODE']
    var valdata = [702, 350, 610, 793, 664]
    var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
    var option4 = {
      // 图标位置
      grid: {
        top: '10%',
        left: '22%',
        bottom: '10%'
      },
      xAxis: {
        show: false
      },
      yAxis: [
        {
          show: true,
          data: titlename,
          inverse: true,
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#fff',

            rich: {
              lg: {
                backgroundColor: '#339911',
                color: '#fff',
                borderRadius: 15,
                // padding: 5,
                align: 'center',
                width: 15,
                height: 15
              }
            }
          }
        },
        {
          show: true,
          inverse: true,
          data: valdata,
          axisLabel: {
            textStyle: {
              fontSize: 12,
              color: '#fff'
            }
          }
        }
      ],
      series: [
        {
          name: '条',
          type: 'bar',
          yAxisIndex: 0,
          data: data4,
          barCategoryGap: 50,
          barWidth: 10,
          itemStyle: {
            normal: {
              barBorderRadius: 20,
              color: function (params) {
                var num = myColor.length
                return myColor[params.dataIndex % num]
              }
            }
          },
          label: {
            normal: {
              show: true,
              position: 'inside',
              formatter: '{c}%'
            }
          }
        },
        {
          name: '框',
          type: 'bar',
          yAxisIndex: 1,
          barCategoryGap: 50,
          data: [100, 100, 100, 100, 100],
          barWidth: 15,
          itemStyle: {
            normal: {
              color: 'none',
              borderColor: '#00c1de',
              borderWidth: 3,
              barBorderRadius: 15
            }
          }
        }
      ]
    }
    option4 && myHisChart.setOption(option4)

    // 播放量折线图
    var myLineChart2 = this.$echarts.init(this.$refs.linechart)
    var option5 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: '#dddc6b'
          }
        }
      },
      legend: {
        top: '0%',
        textStyle: {
          color: 'rgba(255,255,255,.5)',
          fontSize: '12'
        }
      },
      grid: {
        left: '10',
        top: '30',
        right: '10',
        bottom: '10',
        containLabel: true
      },

      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            textStyle: {
              color: 'rgba(255,255,255,.6)',
              fontSize: 12
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.2)'
            }
          },

          data: [
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '26',
            '27',
            '28',
            '29',
            '30'
          ]
        },
        {
          axisPointer: { show: false },
          axisLine: { show: false },
          position: 'bottom',
          offset: 20
        }
      ],

      yAxis: [
        {
          type: 'value',
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.1)'
            }
          },
          axisLabel: {
            textStyle: {
              color: 'rgba(255,255,255,.6)',
              fontSize: 12
            }
          },

          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.1)'
            }
          }
        }
      ],
      series: [
        {
          name: '播放量',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              color: '#0184d5',
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: 'rgba(1, 132, 213, 0.4)'
                  },
                  {
                    offset: 0.8,
                    color: 'rgba(1, 132, 213, 0.1)'
                  }
                ],
                false
              ),
              shadowColor: 'rgba(0, 0, 0, 0.1)'
            }
          },
          itemStyle: {
            normal: {
              color: '#0184d5',
              borderColor: 'rgba(221, 220, 107, .1)',
              borderWidth: 12
            }
          },
          data: [
            30,
            40,
            30,
            40,
            30,
            40,
            30,
            60,
            20,
            40,
            20,
            40,
            30,
            40,
            30,
            40,
            30,
            40,
            30,
            60,
            20,
            40,
            20,
            40,
            30,
            60,
            20,
            40,
            20,
            40
          ]
        },
        {
          name: '转发量',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              color: '#00d887',
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: 'rgba(0, 216, 135, 0.4)'
                  },
                  {
                    offset: 0.8,
                    color: 'rgba(0, 216, 135, 0.1)'
                  }
                ],
                false
              ),
              shadowColor: 'rgba(0, 0, 0, 0.1)'
            }
          },
          itemStyle: {
            normal: {
              color: '#00d887',
              borderColor: 'rgba(221, 220, 107, .1)',
              borderWidth: 12
            }
          },
          data: [
            50,
            30,
            50,
            60,
            10,
            50,
            30,
            50,
            60,
            40,
            60,
            40,
            80,
            30,
            50,
            60,
            10,
            50,
            30,
            70,
            20,
            50,
            10,
            40,
            50,
            30,
            70,
            20,
            50,
            10,
            40
          ]
        }
      ]
    }
    option5 && myLineChart2.setOption(option5)

    // 地域分布饼形图
    var myPieChart2 = this.$echarts.init(this.$refs.piechart)
    var option6 = {
      legend: {
        top: '90%',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: 'rgba(255,255,255,.5)',
          fontSize: '12'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      // 注意颜色写的位置
      color: [
        '#006cff',
        '#60cda0',
        '#ed8884',
        '#ff9f7f',
        '#0096ff',
        '#9fe6b8',
        '#32c5e9',
        '#1d9dff'
      ],
      series: [
        {
          name: '点位统计',
          type: 'pie',
          // 如果radius是百分比则必须加引号
          radius: ['10%', '70%'],
          center: ['50%', '42%'],
          roseType: 'radius',
          data: [
            { value: 20, name: '云南' },
            { value: 26, name: '北京' },
            { value: 24, name: '山东' },
            { value: 25, name: '河北' },
            { value: 20, name: '江苏' },
            { value: 25, name: '浙江' },
            { value: 30, name: '深圳' },
            { value: 42, name: '广东' }
          ],
          // 修饰饼形图文字相关的样式 label对象
          label: {
            fontSize: 10
          },
          // 修饰引导线样式
          labelLine: {
            // 连接到图形的线长度
            length: 10,
            // 连接到文字的线长度
            length2: 10
          }
        }
      ]
    }
    option6 && myPieChart2.setOption(option6)
  }
}
</script>

<style lang="less" scoped>
.fans-container {
  background: url('./bg.jpg') no-repeat center center;
  border-radius: 5px;
  font-family: PingFang SC, Microsoft Yahei, sans-serif;
  // background-size: cover;
  // background-color: skyblue;
}
.main{
  display: flex;
  padding: 0.125rem 0.125rem 0;
  .column{
    flex: 3;
    &:nth-child(2) {
      flex: 5;
      margin: 0 0.125rem 0.1875rem;
      overflow: hidden;
    }
  }
}
.panel {
  position: relative;
  height: 12rem;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: rgba(255, 255, 255, 0.04) url('./line.png');
  padding: 0 0.1875rem 0.5rem;
  margin-bottom: 0.1875rem;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 10px;
    height: 10px;
    border-top: 2px solid #02a6b5;
    border-left: 2px solid #02a6b5;
  }
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    content: "";
    width: 10px;
    height: 10px;
    border-top: 2px solid #02a6b5;
    border-right: 2px solid #02a6b5;
  }
  .panel-footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      content: "";
      width: 10px;
      height: 10px;
      border-bottom: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
    }
    &::after {
      position: absolute;
      bottom: 0;
      right: 0;
      content: "";
      width: 10px;
      height: 10px;
      border-bottom: 2px solid #02a6b5;
      border-right: 2px solid #02a6b5;
    }
  }
  h2 {
    // height: 24px;
    line-height: 36px;
    text-align: center;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 400;
    a {
      margin: 0 0 0 0.1875rem;
      color: #fff;
      text-decoration: none;
      &:hover{
        color: #02a6b5;
      }
      &:nth-child(1){
        padding-left: 0.25rem;
      }
    }
  }
  .chart {
    height: 10rem;
  }
}
.no{
  background: rgba(101, 132, 226, 0.1);
  padding: 0.2875rem;
  .no-hd {
    position: relative;
    border: 1px solid rgba(25, 186, 139, 0.17);
    &::before {
      content: "";
      position: absolute;
      width: 30px;
      height: 10px;
      border-top: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
      top: 0;
      left: 0;
    }
    &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 10px;
    border-bottom: 2px solid #02a6b5;
    border-right: 2px solid #02a6b5;
    right: 0;
    bottom: 0;
    }
    ul {
      display: flex;
      li {
        list-style: none;
        position: relative;
        flex: 1;
        text-align: center;
        height: 60px;
        line-height: 60px;
        font-size: 1.875rem;
        color: #ffeb7b;
        padding: 0.15rem 0;
        font-weight: bold;
      }
    }
  }
  .no-bd ul {
    display: flex;
    li {
      list-style: none;
      flex: 1;
      height: 30px;
      line-height: 20px;
      text-align: center;
      font-size: 1.225rem;
      color: rgba(255, 255, 255, 0.7);
      padding-top: 1.125rem;
    }
  }
}
.map {
  position: relative;
  height: 36.125rem;
  .chart {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    height: 20.25rem;
    width: 100%;
  }
  .map1,
  .map2,
  .map3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25.9rem;
    height: 25.9rem;
    background: url('./assets/map.png') no-repeat;
    background-size: 100% 100%;
    opacity: 0.3;
  }
  .map2 {
    width: 32.15rem;
    height: 32.15rem;
    background-image: url('./assets/lbx.png');
    opacity: 0.6;
    animation: rotate 15s linear infinite;
    z-index: 2;
  }
  .map3 {
    width: 28.3rem;
    height: 28.3rem;
    background-image: url('./assets/jt.png');
    animation: rotate1 10s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  @keyframes rotate1 {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
}
</style>
