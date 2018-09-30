
exports.install = function (Vue, options) {
  Vue.prototype.$echarts = options.echart
  /* Vue.prototype.text2 = function () {//全局函数2
    alert('执行成功2')
  } */
}
