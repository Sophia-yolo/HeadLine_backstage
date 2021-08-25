<template>
    <div class="image-container">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: 'home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>素材管理</el-breadcrumb-item>
      </el-breadcrumb>
      <ImageList></ImageList>
    </div>
</template>

<script>
import ImageList from '@/components/image-list'
export default {
  name: 'imageIndex',
  components: {
    ImageList
  }
}
</script>

<style lang="less" scoped>
.image-container{
    padding: 0 2rem;
}
.el-breadcrumb{
    font-size: 1.1rem;
    color: rgba(15, 23, 42, 0.45);
    margin: 0 0 24px 0;
}
</style>
