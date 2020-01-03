<template>
  <div>
    <breadCrumb :isCancel='true' currentName="健康科普"></breadCrumb>
    <div style="margin-top: 20px">
      <el-popconfirm
        confirmButtonText='确定'
        cancelButtonText='取消'
        icon="el-icon-info"
        iconColor="red"
        title="确定删除吗？"
      >
        <el-button slot="reference" @click="deleteAll()">删除</el-button>
      </el-popconfirm>
    </div>
    <myTable :columns="columns" :dataSource='tableData' @commitSelection="handleSelectionChange" :hasSelection='true'>
      <div slot="handleColumn">
        <el-table-column
          fixed="right"
          label="操作"
          width="150">
          <template slot-scope="scope">
            <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </div>
    </myTable>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          prop: 'date',
          label: '日期',
          align: 'left',
          tooltip: false
        },
        {
          prop: 'name',
          label: '姓名',
          align: 'center', // 设置文字位置
          tooltip: false, // 溢出是否隐藏
          render: () => { // 格式化
            return '测试'
          }
        },
        {
          prop: 'address',
          label: '地址',
          tooltip: true
        }
      ],
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },
  methods: {
    deleteAll () {
      console.log(this.multipleSelection)
      if (!this.multipleSelection) {
        this.$message({
          type: 'warning',
          message: '请选择需要删除的文章'
        })
      } else {
        this.delete()
      }
    },
    delete () {

    },
    handleSelectionChange (val) {
      console.log(val)
      this.multipleSelection = val
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style>

</style>
