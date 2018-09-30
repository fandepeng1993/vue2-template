<template>
  <div class="chart">
    <p>{{'fandepeng'|fdpupcase}}</p>
    <el-button type="primary">默认按钮</el-button>
    <button @click="getstate()">获取state</button>
    <button @click="mutatonsstate('987654')">muations-state</button>
    <!--<button @click="actionstate()">actions-state</button>
    <button @click="gethandstate()">手动-state</button>-->
    <h1>{{name}}图表</h1>
    {{otherInfo}}
    <button @click="modify">修改其他用户信息</button>
    <bar-chart :data="data" class="test"></bar-chart>
  </div>

</template>

<script>
import BarChart from '../charts/bar'
import {mapGetters, mapMutations, mapActions} from 'vuex'
// Action 通过 store.dispatch 方法触发：
// this.$store.commit('xxx')
// getter  this.$store.state.{moduleNmae}.
export default {
  name: 'index',
  data () {
    return {
      name: 'echart',
      data: {
        legend: ['销量'],
        xAxis: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        series: {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      }
    }
  },
  methods: {
    getstate () {
      console.log(this.token, this.loginState, this.userInfo)
    },
    mutatonsstate (parms) {
      this.setToken(parms)
    },
    modify () {
      this.MusetOtherUserInfo('我已经修改了其他用户信息')
    },
    ...mapActions(['setToken', 'setLoginState', 'setUserInfo', 'setOtherUserInfo']),
    ...mapMutations({MusetToken: 'SET_TOKEN', MusetLoginState: 'loginState', MusetUserInfo: 'SET_USERINFO', MusetOtherUserInfo: 'SET_OTHERUSERINFO'})
  },
  computed: {
    ...mapGetters(['token', 'loginState', 'userInfo', 'otherInfo'])
  },
  created () {
    console.log('created', this.$store.state.user)
  },
  components: {
    BarChart
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next(vm => {
      // 通过 `vm` 访问组件实例
      console.log(vm.name)
    })
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next()
  }
}
</script>

<style scoped type="text/scss" lang="scss" rel="stylesheet/scss">
  .test{
    width: 700px;
    height: 500px;
    //background-color: #0ABF74;
  }

</style>
