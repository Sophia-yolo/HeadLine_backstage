<template>
    <div class="image-container">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: 'home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>素材管理</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="image-group">
        <div style="padding: 10px 30px">
            <div class="action-head">
                <el-radio-group
                v-model="collect"
                size="mini"
                @change="loadImages(1)"
                >
                    <el-radio-button
                    :label="false"
                    >全部</el-radio-button>
                    <el-radio-button
                    :label="true"
                    >收藏</el-radio-button>
                </el-radio-group>
                <el-button
                    size="mini"
                    type="primary"
                    @click="dialogUploadVisible = true"
                >上传素材</el-button>
            </div>
            <!-- 素材列表 -->
            <el-row :gutter="20">
                <el-col
                :xs="24"
                :sm="12"
                :md="6"
                :lg="4"
                v-for="(img, index) in images"
                :key="index"
                class="image-item"
                >
                <el-image
                style="height: 100px"
                :src="img.url"
                fit="cover"
                >
                </el-image>
                <div class="image-box">
                    <el-button
                      :loading="img.loading"
                      :icon="img.is_collected ? 'el-icon-star-on' : 'el-icon-star-off'"
                      circle
                      size="mini"
                      @click="onCollect(img)"
                    ></el-button>
                    <!-- <i
                      v-loading="img.loading"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="rgba(0, 0, 0, 0.8)"
                      :class="{
                        'el-icon-star-off': !img.is_collected,
                        'el-icon-star-on': img.is_collected
                      }"
                      @click="onCollect(img)"
                    ></i> -->
                    <el-button
                      :loading="img.loading"
                      :icon="'el-icon-delete-solid'"
                      circle
                      size="mini"
                      @click="onDelete(img)"
                    ></el-button>
                </div>
                </el-col>
            </el-row>

        </div>
            <!-- 数据分页 -->
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalCount"
              :page-size="pageSize"
              :current-page.sync="page"
              @current-change="onPageChange"
              >
            </el-pagination>
      </div>
      <el-dialog
      title="上传素材"
      :visible.sync="dialogUploadVisible"
      :append-to-body="true"
      >
        <!-- hello -->
        <el-upload
        class="upload-demo"
        drag
        action="http://api-toutiao-web.itheima.net/mp/v1_0/user/images"
        :headers="uploadHeaders"
        name="image"
        multiple
        :show-file-list="false"
        :on-success="onUploadSuccess"
        >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-dialog>
    </div>
</template>

<script>
import {
  getImages,
  collectImages,
  deleteImages
} from '@/api/image'
export default {
  name: 'imageIndex',
  data () {
    const user = JSON.parse(window.localStorage.getItem('user'))
    return {
      // 默认查询全部功能
      collect: false,
      images: [], // 图片素材列表
      dialogUploadVisible: false,
      uploadHeaders: {
        Authorization: `Bearer ${user.token}`
      },
      totalCount: 0,
      pageSize: 12,
      page: 1
    }
  },
  created () {
    this.loadImages(1)
  },
  methods: {
    loadImages (page = 1) {
      // 重置高亮页码
      this.page = page
      getImages({
        page,
        collect: this.collect,
        per_page: this.pageSize
      }).then(res => {
        const results = res.data.data.results
        results.forEach(img => {
          img.loading = false
        })
        this.images = res.data.data.results
        this.totalCount = res.data.data.total_count
      })
    },
    onUploadSuccess () {
      // 关闭对话框
      this.dialogUploadVisible = false
      // 更新素材列表
      this.loadImages(this.page)

      this.$message({
        type: 'success',
        message: '上传成功'
      })
    },
    onPageChange (page) {
      this.loadImages(page)
    },
    onCollect (img) {
    //   console.log(img)
      img.loading = true
      collectImages(img.id, !img.is_collected).then(res => {
        img.is_collected = !img.is_collected
        img.loading = false
      })
      // #region
    //   if (img.is_collected){
    //     // 如果已收藏，取消收藏
    //     collectImages(img.id, false)
    //   } else {
    //     // 没有收藏，添加收藏
    //     collectImages(img.id, true)
    //   }
    // #endregion
    },
    onDelete (img) {
      this.loading = false
      deleteImages(img.id).then(res => {
        this.loadImages(this.page)
        this.loading = true
      })
    }
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
.image-group{
    padding:15px 0;
    border-radius: 16px;
    background-color: #fff;
    .action-head {
        padding-bottom: 20px;
        display: flex;
        justify-content: space-between;
    }
    .image-item{
        position: relative;
    }
    .image-box{
        height: 40px;
        background-color: rgba(204, 204, 204, .3);
        position: absolute;
        bottom: 4px;
        left: 10px;
        right: 10px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        color: #fff;
    }
}
</style>
