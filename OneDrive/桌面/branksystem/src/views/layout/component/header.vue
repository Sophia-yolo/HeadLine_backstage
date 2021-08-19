<template>
  <div class="header">
    <div class="menu">
        <div class="curson" @click="changPage">
        <div id="nav-button">
            <span class="nav-bar" :class="{'first':isActive}"></span>
            <span class="nav-bar" :class="{'second':isActive}"></span>
            <span class="nav-bar" :class="{'third':isActive}"></span>
        </div>
        </div>
        <div class="logo">
        <a href="/"></a>
        </div>
    </div>
    <el-dropdown>
        <div id="user">
            <img class="user-photo" :src="user.photo">
            <span>
                {{user.name}}
            </span>
        </div>
        <el-dropdown-menu slot="dropdown" style="margin: 0.5rem 2rem 0 1.5rem">
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item @click.native="onLogout">退出</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { getUserProfile } from '@/api/user.js'
export default {
  name: 'Header',
  data () {
    return {
      user: {},
      isActive: false
    }
  },
  created () {
    // 组件初始化，请求获取资料
    this.loadUserProfile()
  },
  methods: {
    loadUserProfile () {
      getUserProfile().then(res => {
        this.user = res.data.data
      })
    },
    onLogout () {
      this.$confirm('确认退出吗？', '退出提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 清除登录状态
        window.localStorage.removeItem('user')
        // 跳转到登录页面
        this.$router.push('/')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    },
    changPage () {
      this.isActive = !this.isActive
      this.$emit('changeStatus', this.isActive)
    }
  }
}
</script>

<style  lang="less" scoped>
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0;
  .menu{
    margin: 0 15px 0 0;
    height: 50px;
    vertical-align: middle;
    .logo {
        color: #fff;
        font-size: 18px;
        padding-left: 20px;
        height: 60px;
        width: 200px;
        background: url("../bg-logo.png") no-repeat center center;
        background-size: cover;
        float: right;
      }
    .curson{
      display: inline-block;
      // margin: 10px 0 0 0;
      cursor: pointer;
      border: 2px solid #B3C0D1;
      padding-top: 0;
      border-radius: 51%;
      height: 48px;
      width: 48px;
      #nav-button {
        width: 46px;
        height: 46px;
        margin: 0;
        padding-top: 18px;
        text-align: center;
        .nav-bar {
          background-color: #2b2b2b;
          border-radius: 1px;
          display: block;
          width: 16px;
          height: 2px;
          margin: 0px auto 2px;
          position: relative;
        }
        .first {
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
          position: relative;
          top: 3px;
        }
        .second {
          -moz-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          -ms-transform: rotate(-45deg);
          transform: rotate(-45deg);
          position: relative;
          top: -1px;
          -webkit-transition: all 0.3s ease-in-out;
          -moz-transition: all 0.3s ease-in-out;
          -o-transition: all 0.3s ease-in-out;
          transition: all 0.3s ease-in-out;
        }
        .third{
           display: none;
        }
      }
    }
  }
  #user {
    vertical-align:middle;
    .user-photo {
        background-color: #2b2b2b;
        width: 46px;
        height: 46px;
        border-radius: 46px;
        background-color: #fff;
        background-size: cover;
        vertical-align:middle;
    }
    span{
    vertical-align:middle;
    }
  }
}
</style>
