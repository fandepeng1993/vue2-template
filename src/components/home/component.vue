<template>
    <div class="self-component">
      <div>asdasdasdasdas</div>
    </div>
</template>

<script>
export default {
  name: 'self-component',
  props: {
    myobject: {
      type: String
    }
  },
  data () {
    return {}
  },
  created () {
    console.log(this.myobject)
    setTimeout(() => {
      this.myobject = '123'
      console.log(this.myobject)
    }, 5000)
  }
}
</script>

<style scoped>

</style>
