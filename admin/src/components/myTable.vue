<template>
  <div>
    <el-table
      :data="dataSource"
      :fit="fit"
      :stripe="stripe"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <!-- 是否支持选择 -->
      <el-table-column
        v-if="hasSelection"
        type="selection"
        width="55">
      </el-table-column>
      <!-- 是否显示序号 -->
      <el-table-column
        v-if="hasIndex"
        type="index"
        width="55">
      </el-table-column>
      <el-table-column
        v-for="column in columns"
        :align="column.align"
        :sortable="column.hasSort"
        :key="column.prop"
        :prop="column.prop"
        :label="column.label"
        :show-overflow-tooltip='column.tooltip'
        :formatter="column.render">
      </el-table-column>
      <!-- 操作 -->
      <slot name="handleColumn"></slot>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'myTable',
  data () {
    return {

    }
  },
  props: {
    // 是否可以选择
    hasSelection: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    // 是否有序列项
    hasIndex: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    // 相应字段的展示
    columns: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 数据源
    dataSource: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 是否为斑马纹
    stripe: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    // 是否自动撑开列宽
    fit: {
      type: Boolean,
      default: () => {
        return true
      }
    }
  },
  methods: {
    // 将选中的行发送到父组件
    handleSelectionChange (val) {
      const selectionArr = []
      val.forEach((item) => {
        selectionArr.push(item)
      })
      this.$emit('commitSelection', selectionArr)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
