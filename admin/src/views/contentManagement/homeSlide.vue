<template>
  <div>
    <breadCrumb :isCancel='false' currentName="首页幻灯片"></breadCrumb>
    <myForm
      size='mini'
      labelWidth = '80px'
      :searchData = "formData"
      :searchForm = "searchForm"
      :searchHandle="searchHandle"></myForm>
  </div>
</template>

<script>
export default {
  data () {
    let sexs = [{ label: '男', value: 'M' }, { label: '女', value: 'F' }]
    let sexProps = { label: 'label', value: 'value' }
    let intersts = [{ label: '羽毛球', value: 'badminton' }, { label: '篮球', value: 'basketball' }]
    let interstProps = { label: 'label', value: 'value' }
    return {
      formData: {
        name: null,
        age: null,
        sex: null,
        interst: null
      },
      searchForm: [
        {
          type: 'Input',
          label: '姓名',
          prop: 'name',
          width: '180px',
          placeholder: '请输入姓名...',
          append: `<button slot="append">123413</button>`
        },
        { type: 'Input',
          label: '年龄',
          prop: 'age',
          width: '180px',
          placeholder: '请输入年龄...'
        },
        { type: 'Select',
          label: '性别',
          prop: 'sex',
          width: '180px',
          options: sexs,
          props: sexProps,
          change: row => {
            this.selectedChange(row)
          },
          placeholder: '请选择性别...'
        },
        { type: 'Checkbox',
          label: '爱好',
          width: '180px',
          prop: 'interst',
          checkboxs: intersts,
          props: interstProps
        }
      ],
      searchHandle: [
        {
          label: '查询',
          type: 'primary',
          handle: () => {
            console.log(this.searchData)
          }
        },
        {
          label: '重置',
          type: 'primary',
          handle: () => {
            console.log(this.searchData)
          } }
      ]
    }
  },
  methods: {
    selectedChange (row) {
      console.log('改变了值', row)
      console.log(this.formData)
    }
  }
}
</script>

<style>

</style>
