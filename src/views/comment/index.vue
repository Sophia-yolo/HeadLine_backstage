<template>
    <div class="comment-container">
      <!-- 面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: 'home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>评论管理</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="comment-main">
          <!-- 评论管理列表 -->
        <el-table
            :data="articles"
            style="width: 100%">
            <el-table-column
                prop="title"
                label="标题"
                >
            </el-table-column>
            <el-table-column
                prop="total_comment_count"
                label="总评论数"
                >
            </el-table-column>
            <el-table-column
                prop="fans_comment_count"
                label="粉丝评论数">
            </el-table-column>
            <el-table-column
                label="评论状态">
                <template slot-scope="scope">
                    {{ scope.row.comment_status ? '正常' : '关闭'}}
                </template>
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <el-switch
                        v-model="scope.row.comment_status"
                        active-color="#3b82f6"
                        inactive-color="rgba(15, 23, 42, 0.65)"
                        @change="onStatusChange(scope.row)"
                        :disabled="scope.row.statusDisabled">
                    </el-switch>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="page"
          :page-sizes="[10, 20, 50]"
          :page-size.sync="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount"
          background
          >
        </el-pagination>
      </div>
    </div>
</template>

<script>
import {
  getArticles,
  updateCommentStatus
} from '@/api/article'

export default {
  name: 'commentIndex',
  data () {
    return {
      articles: [],
      totalCount: 0,
      pageSize: 10,
      page: 1 // 当前激活的页码
    }
  },
  created () {
    this.loadArticles()
  },
  methods: {
    handleSizeChange () {
      this.loadArticles(1)
    },
    handleCurrentChange (page) {
      this.loadArticles(page)
    },
    loadArticles (page = 1) {
      this.page = page
      getArticles({
        response_type: 'comment',
        page,
        per_page: this.pageSize
      }).then(res => {
        const { results } = res.data.data
        results.forEach(article => {
          article.statusDisabled = false
        })
        this.articles = results
        this.totalCount = res.data.data.total_count
      })
    },
    onStatusChange (article) {
    //   console.log(article)
    //   禁用开关
      article.statusDisabled = true
      updateCommentStatus(article.id.toString(), article.comment_status).then(res => {
        // console.log(res)
        // 开启开关
        article.statusDisabled = false
        this.$message({
          type: 'success',
          message: article.comment_status ? '开启文章评论状态' : '关闭文章评论状态'
        })
      })
    }
  }
}
</script>

<style scoped>
.comment-container{
    padding: 0 2rem;
}
.el-breadcrumb{
    font-size: 1.1rem;
    color: rgba(15, 23, 42, 0.45);
    margin: 0 0 24px 0;
}
.comment-main{
    padding: 10px 30px 20px 0;
    border-radius: 16px;
    background-color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.el-table{
    margin: 10px 10px 30px;
    padding: 0 30px;
}
</style>
