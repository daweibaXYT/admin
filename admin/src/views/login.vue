<template>
  <div>
    登陆页
    <el-button @click="login">登陆</el-button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    }
  },
  methods: {
    login () {
      this.$router.push({ path: '/infoMain/hospitalInfo' })
    }
  }
}
</script>

<style>

</style>
