<template>
  <div id="app">
    this is a home
    <router-link :to="{ name: 'home' }" replace  tag="li"><a>home</a></router-link>
    <router-link :to="{ name: 'chart' }" replace  tag="li"><a>chart</a></router-link>
    <router-view class="router-wrapper"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {

}
.router-wrapper{
  border: 1px solid red;
  padding: 10px;
}
</style>
