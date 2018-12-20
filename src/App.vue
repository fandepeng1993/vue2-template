<template>
  <div id="app">
    <el-container class="wrapper">
      <el-header class="ceair-header" height="40px">
        <ceair-header></ceair-header>
      </el-header>
      <el-container>
        <el-aside width="210px" class="ceair-left">
          <ceair-aside></ceair-aside>
        </el-aside>
        <el-main class="ceair-main">
          <router-view class="router-wrapper"/>
        </el-main>
      </el-container>
      <el-footer height="40px" class="ceair-footer">东方航空运维数据分析平台系统动态基线系统</el-footer>
    </el-container>
  </div>
</template>

<script>
import CeairHeader from './components/ceair-header'
import CeairAside from './components/ceair-aside'
export default {
  name: 'App',
  components: {
    CeairHeader,
    CeairAside
  }
}
</script>

<style type="text/scss" scoped rel="stylesheet/scss" lang="scss">
  #app {
    .wrapper {
      height: 100vh;
      .ceair-header{
        background-color: $--color-bg;
      }
      .ceair-left{
        background-color: #545c64;
      }
      .ceair-main{
        background-color: rgba(0,0,0,0.1);
      }
      .ceair-footer{
        background-color: $--color-bg;
        text-align: center;
        line-height: 40px;
      }
    }
  }

</style>
