<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          :unique-opened="true"
          default-active="0-0"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <div v-for="(item,index) in routerLinks" :key="index">
            <el-submenu  v-if="item.children"  :index="index+''" >
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.name}}</span>
              </template>
                <el-menu-item @click="routerLink(menuItem)" v-for="(menuItem, menuIndex) in item.children" :index="index+'-'+menuIndex" :key="menuIndex">
                  <span slot="title">{{menuItem.name}}</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item @click="routerLink(item)" v-if="!item.children" :index="index+''">
              <i class="el-icon-document"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
          </div>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routerLinks: [
        {
          name: '信息维护',
          path: '/infoMain/hospitalInfo',
          icon: 'dashboard',
          children: [
            {
              name: '医院信息',
              path: '/infoMain/hospitalInfo',
              icon: ''
            },
            {
              name: '科室信息',
              path: '/infoMain/departmentInfo',
              icon: ''
            },
            {
              name: '医生信息',
              path: '/infoMain/doctorInfo',
              icon: ''
            }
          ]
        },
        {
          name: '用户管理',
          path: '',
          icon: '',
          children: [
            {
              name: '用户列表',
              path: '/userManagement/usersList',
              icon: ''
            },
            {
              name: '就诊人列表',
              path: '/userManagement/patientsList',
              icon: ''
            }
          ]
        },
        {
          name: '内容管理',
          path: '',
          icon: '',
          children: [
            {
              name: '首页幻灯',
              path: '/contentManagement/homeSlide',
              icon: ''
            },
            {
              name: '健康科普',
              path: '/contentManagement/healthScience',
              icon: ''
            },
            {
              name: '医院通知',
              path: '/contentManagement/hospitalNotice',
              icon: ''
            }
          ]
        },
        {
          name: '排班管理',
          path: '',
          icon: '',
          children: [
            {
              name: '',
              path: '',
              icon: ''
            },
            {
              name: '',
              path: '',
              icon: ''
            },
            {
              name: '',
              path: '',
              icon: ''
            }
          ]
        },
        {
          name: '预约管理',
          path: '',
          icon: '',
          children: [
            {
              name: '预约记录',
              path: '/reservationManagement/reservationRecord',
              icon: ''
            },
            {
              name: '预约登记',
              path: '/reservationManagement/reservationRegister',
              icon: ''
            }
          ]
        },
        {
          name: '问诊管理',
          path: '',
          icon: '',
          children: [
            {
              name: '出诊记录',
              path: '/visitedManagement/interrogationRecord',
              icon: ''
            },
            {
              name: '医师出诊管理',
              path: '/visitedManagement/visitedManagement',
              icon: ''
            }
          ]
        },
        {
          name: '意见反馈',
          path: '/feedBack/feedBack',
          icon: ''
        }
      ]
    }
  },
  created () {
  },
  methods: {
    routerLink (item) {
      this.$router.push({ path: item.path })
    }
  }
}
</script>

<style>

</style>
