<template>
  <div class="home">
    <div>{{myobject}}</div>
    <div>{{myobject}}</div>
    <ceair-content :myobject="myobject"></ceair-content>
  </div>
</template>

<script>
import CeairContent from './component.vue'
export default {
  name: 'index',
  data () {
    return {
      expression: 'expresson String',
      foo: 'foo',
      myobject: '123'
    }
  },
  mounted(){
    setTimeout(()=>{
      console.log(this.myobject)
    },5000)
  },
  components: {
    CeairContent
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
