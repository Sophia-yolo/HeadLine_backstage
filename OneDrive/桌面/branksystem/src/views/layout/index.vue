<template>
  <el-container class="layout-contain">
    <el-aside width="200px" class="aside" :class="{'active':isActive}">
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header   height="70px">
        <Header @changeStatus='change'></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from './component/aside.vue'
import Header from './component/header.vue'
export default {
  name: 'layoutIndex',
  data () {
    return {
      isActive: false
    }
  },
  components: {
    Aside,
    Header
  },
  methods: {
    change (data) {
      console.log(data)
      this.isActive = data
    }
  }
}
</script>

<style lang="less" scoped>
.layout-contain{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.aside{
  background-color: #fff;
  padding-left: 8px;
}

.active {
  display: none;
  -webkit-transition: all 0.1s ease 0s;
  transition: all 0.1s ease 0s;
}
</style>
