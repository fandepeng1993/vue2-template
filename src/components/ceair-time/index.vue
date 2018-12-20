<template>
     <div class="timers">
       <span>{{new Date() |dateTime({onlyD:true})}}</span>
     </div>
</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style scoped type="text/css" lang="scss" rel="stylesheet/scss">
   .timers{
      position: absolute;
      right: 0px;
   }
</style>
