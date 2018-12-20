<template>
  <div class="line-wrapper">
    <div class="line" ref="line" style="width: 100%;min-height: 300px"></div>
  </div>
</template>

<script>
export default {
  name: 'line',
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
          text: 'pv访问量'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data: ['去年', '上月', '上周', '昨天', '今天', '上限', '下限']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            // saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [
            '00:00',
            '01:00',
            '02:00',
            '03:00',
            '04:00',
            '05:00',
            '06:00',
            '07:00',
            '08:00',
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00',
            '23:00',
            '24:00'
          ]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '去年',
            type: 'line',
            data: this.getRandomData()
          },
          {
            name: '上月',
            type: 'line',
            data: this.getRandomData()
          },
          {
            name: '上周',
            type: 'line',
            data: this.getRandomData()
          },
          {
            name: '昨天',
            type: 'line',
            data: this.getRandomData()
          },
          {
            name: '今天',
            type: 'line',
            data: this.getRandomData()
          },
          {
            name: '上限',
            type: 'line',
            data: this.getRandomData()
          },
          {
            name: '下限',
            type: 'line',
            data: this.getRandomData()
          }
        ]
      },
      myechart: null,
      resizing: false
    }
  },
  created () {
    this.$nextTick(() => {
      this.myechart = this.$echarts.init(this.$refs.line, 'roma')
      this.myechart.setOption(this.option)
      this.ro = new ResizeObserver(([ entry ]) => {
        if (entry.contentRect.width && entry.contentRect.height && this.myechart && !this.resizing) {
          this.resizing = true
          requestAnimationFrame(() => {
            if (this.myechart) this.myechart.resize()
            this.resizing = false
          })
        }
      })
      this.ro.observe(this.$refs.line)
    })
  },
  methods: {
    getRandomData () {
      let temp = []
      for (let i = 0; i < 24; i++) {
        temp.push(this.GetRandomNum(80, 300))
      }
      return temp
    },
    // 获取最小值到最大值之前的整数随机数
    GetRandomNum (Min, Max) {
      let Range = Max - Min
      let Rand = Math.random()
      return (Min + Math.round(Rand * Range))
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
