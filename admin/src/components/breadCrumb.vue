<template>
  <div>
   <el-breadcrumb separator="/">
      <el-breadcrumb-item v-if="isCancel"><span class="cancel" @click="$router.go(-1)">返回</span></el-breadcrumb-item>
      <el-breadcrumb-item>{{currentName}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'breadCrumb',
  data () {
    return {
      cancel: false
    }
  },
  props: {
    isCancel: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    currentName: String
  }
}
</script>

<style scoped>
  .cancel{
    cursor: pointer;
  }
</style>
