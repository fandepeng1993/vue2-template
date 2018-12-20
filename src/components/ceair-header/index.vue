<template>
  <div class="ceair-header">
    <div class="titles">
      东方航空运维数据分析平台系统动态基线系统
    </div>
    <ceair-time></ceair-time>
  </div>
</template>

<script>
import CeairTime from '../ceair-time'
export default {
  name: 'index',
  components: {
    CeairTime
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  .ceair-header{
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;
    justify-content: center;
  }

</style>
