<template>
  <div class="home">
    this is a home  page
    <div class="children">
      this is a home children page
      {{$t('message.loginTip')}}
    </div>
    <div v-test-directive1:foo.a.b="expression">dddd</div>
    <div v-test-directive2:foo.a.b="expression">cccc</div>
    <i class="icon-right" style="font-size: 30px"></i>
    <p class="pbar">阿斯顿就啊放假报告和规划如何度过南师大纷纷加大沙发舒服；阿富汗发卡号发上班噶说不过仨部分发生的范德萨发哈师傅</p>
    <img src="../../assets/imgs/logo.png" alt="">
    <img src="static/img/logottttt.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      expression: 'expresson String',
      foo: 'foo'
    }
  }
}
</script>
<style scoped lang="scss" type="text/scss" rel="stylesheet/scss">
  @import "~assets/style/public.scss";
  .home {
    color: red;
    .children {
      color: blue;
    }
    .pbar{
      width: 120px;
      @include no-wrap();
    }
  }
</style>
