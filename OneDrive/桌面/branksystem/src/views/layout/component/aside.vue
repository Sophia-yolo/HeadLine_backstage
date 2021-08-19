<template>
  <div class="aside-contain">
      <!-- 首页 -->
      <router-link to="/layout/home">
        <div class="home">
          <div class="profile">
            <i class="iconfont icon-home"></i>
          </div>
          <p class="homename">HOME</p>
        </div>
      </router-link>
      <!-- 路由按钮 -->
      <router-link
        v-for="(router, index) in routers"
        :key="index"
        class="nav"
        :to="router.to"
      >
        <i :class="router.iconClass"></i>
        <span class="nav-name">{{ router.value }}</span>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  data () {
    return {
      routers: [
        {
          iconClass: 'iconfont icon-document',
          value: '内容管理',
          to: '/layout/article'
        },
        {
          iconClass: 'iconfont icon-sucai',
          value: '素材管理',
          to: '/layout/image'
        },
        {
          iconClass: 'iconfont icon-fabu2',
          value: '发布文章',
          to: '/layout/publish'
        },
        {
          iconClass: 'iconfont icon-comment',
          value: '评论管理',
          to: '/layout/comment'
        },
        {
          iconClass: 'iconfont icon-fensi',
          value: '粉丝管理',
          to: '/layout/fans'
        },
        {
          iconClass: 'iconfont icon-Settings',
          value: '个人设置',
          to: '/layout/setting'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
* {
  /* CSS初始化 */
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: PingFang SC, Microsoft Yahei, sans-serif;
  user-select: none;
}
input {
  user-select: auto;
}
textarea {
  user-select: auto;
}
input {
  background: none;
  outline: none;
}
input:focus {
  border: none;
}
a,
a:hover,
a:active,
a:visited {
  text-decoration: none;
}
.logo-box {
  display: flex;
  align-items: center;
  width: 11.5rem;
  height: 3.5rem;
  margin-top: 3rem;
  padding-left: 0.2rem;
  .logo {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
  }
  span {
    color: rgba(15, 23, 42, 0.85);
    font-size: 1.5rem;
    font-weight: 600;
  }
}
/* 用户信息 */
.home {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin: 2rem 0 1.5rem 0;
  width: 11.5rem;
  height: 3rem;
  border-radius: 6px;
  padding-left: 1rem;
  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 1em 0 1rem;
    width: 2rem;
    height: 2rem;
    color: #fff;
    border-radius: 1rem;
    background-color: #3b82f6;
  }
  /* 用户名 */
  .homename {
    color: rgba(15, 23, 42, 0.65);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
  }
}

/* 导航标签 */
.nav {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 11.5rem;
  height: 3rem;
  border-radius: 6px;
  margin: 2rem 0 1.5rem 0;
  cursor: default;
  padding-left: 2rem;
  .nav-name {
    color: rgba(15, 23, 42, 0.65);
    font-size: 0.9rem;
    line-height: 1.5rem;
    font-weight: 600;
  }
  i {
    color: rgba(15, 23, 42, 0.65);
    margin-left: 0.5rem;
    margin-right: 1rem;
  }
}
.nav:hover {
  background-color: #eff6ff;
}
.nav.checked {
  background-color: rgba(15, 23, 42, 0.04);
}
</style>
