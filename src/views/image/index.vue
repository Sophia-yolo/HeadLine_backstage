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
                >
                <el-image
                style="height: 100px"
                :src="img.url"
                fit="cover"
                >
                </el-image>
                </el-col>
            </el-row>

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
import { getImages } from '@/api/image'
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
      pageSize: 10,
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
        pre_page: this.pageSize
      }).then(res => {
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
}

</style>
