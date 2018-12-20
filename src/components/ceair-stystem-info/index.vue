<template>
    <div class="stystemInfo">
      <ul>
        <li  v-for="n in 8" :key="n">
          <chart></chart>
        </li>
      </ul>
    </div>
</template>

<script>
import Chart from '../chart'
export default {
  name: 'index',
  components: {
    Chart
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  .stystemInfo {
    color: red;
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li{
        width: 49%;
        height: 300px;
        margin-bottom: 10px;
      }
    }
  }

</style>
