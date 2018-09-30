<template>
  <div class="bar-wrapper">
    <div class="bar" ref="bar" style="width: 400px;height: 300px"></div>
  </div>
</template>

<script>
export default {
  name: 'bar',
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          legend: [],
          xAxis: [],
          series: {
            name: '',
            type: '',
            data: []
          }
        }
      }
    }
  },
  data () {
    return {
      // 指定图表的配置项和数据
      option: {
        title: {
          text: 'ECharts'
        },
        tooltip: {},
        legend: {
          data: []
        },
        xAxis: {
          data: []
        },
        yAxis: {},
        series: []
      },
      testoption: {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data:['销量']
        },
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  },
  created () {
    this.$nextTick(() => {
      if (this.data.legend.length) {
        this.option.legend.data = this.data.legend
        this.option.xAxis.data = this.data.xAxis
        this.option.series.push(this.data.series)
      }
      // console.log()
      let myechart = this.$echarts.init(this.$refs.bar, 'macarons')
      myechart.setOption(this.option)
    })
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
