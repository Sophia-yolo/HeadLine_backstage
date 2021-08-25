<template>
  <div class="home-contain">
    <img class="logo" src="@/assets/bgLogo.png" alt="Logo" />
    <img class="logo-text" src="@/assets/logo-text.png"/>
    <span class="version">Version 0.2.0</span>
    <div class="info-box">
      <!-- <p class="info">一个类似于今日头条自媒体头条号的内容发布管理系统</p> -->
      <p class="info">基于 Vue.js 开发一个 PC 端内容发布系统，可以发布管理新闻文章内容。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="less" scoped>
.home-contain {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  height: 12rem;
  margin: 8rem 0 1.5rem 0;
}
.logo-text {
  color: rgba(15, 23, 42, 0.85);
  width: 10.875rem;
  // height: 3.25rem;
  margin: 0 0 2rem 0;
}
.version {
  color: rgba(15, 23, 42, 0.25);
  line-height: 2rem;
}
.info-box {
  display: flex;
  align-items: center;
  margin-bottom: 8rem;
}
.info {
  margin-left: .5rem;
  color: rgba(15, 23, 42, 0.85);
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 1px;
}
</style>
