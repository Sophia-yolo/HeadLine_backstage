e<template>
 <!-- 面包屑路径导航 -->
  <div class="article-contain">
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: 'home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>内容管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <hr> -->
    <!-- 数据筛选 -->
    <el-form ref="form" :model="form" label-width="50px">
        <el-form-item label="状态">
            <el-radio-group v-model="status">
            <el-radio :label="null">全部查找</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
            <el-radio :label="4">已删除</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="频道">
            <el-select v-model="channelsId" placeholder="请选择频道">
            <el-option label="全部" :value="null"></el-option>
            <el-option
              :label="channels.name"
              :value="channels.id"
              v-for="(channels, index) in channels"
              :key="index"
            ></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="日期">
            <el-date-picker
                v-model="rangeDate"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd">
            </el-date-picker>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="loadArticles(1)">筛选</el-button>
        </el-form-item>
    </el-form>

    <!-- 筛选结果 -->
    <div class="block">
      <div class="filterCondition">根据筛选条件共查询到{{ totalCount }}条结果：</div>
     <el-table
      :data="articles"
      stripe
      style="width: 100%"
      size="mini"
      v-loading="loading"
      >
      <!-- 封面 -->
        <el-table-column
        prop="image"
        label="封面">
        <template slot-scope="scope">
            <el-image
              style="width: 150px; height: 100px"
              :src="scope.row.cover.images[0]"
              fit="cover"
              lazy
            >
            </el-image>
            <!-- <img v-if="scope.row.cover.images[0]" :src="scope.row.cover.images[0]" class="article-cover">
            <img v-else src="./no-cover.png" class="article-cover"> -->
          </template>
        </el-table-column>
        <el-table-column
        prop="title"
        label="标题">
        </el-table-column>
        <!-- 状态 -->
        <el-table-column
        prop="status"
        label="状态">
         <template slot-scope="scope">
            <el-tag :type="articlesStatus[scope.row.status].type">{{ articlesStatus[scope.row.status].text }}</el-tag>
             <!-- <el-tag v-else-if="scope.row.status === 1">待审核</el-tag>
             <el-tag v-else-if="scope.row.status === 2" type="success">审核通过</el-tag>
             <el-tag v-else-if="scope.row.status === 3" type="danger">审核失败</el-tag>
             <el-tag v-else-if="scope.row.status === 4" type="info">已失败</el-tag> -->
         </template>
        </el-table-column>
        <el-table-column
        prop="pubdate"
        label="发布时间">
        </el-table-column>
        <el-table-column
        prop="address"
        label="操作">
          <template slot-scope="scope">
            <el-button
            size="mini"
            type="primary"
            icon="el-icon-edit"
            circle
            @click="$router.push('/layout/publish?id=' + scope.row.id.toString())"
            ></el-button>
            <el-button
                size="mini"
                type="danger"
                icon="el-icon-delete"
                circle
                :disabled="loading"
                @click="onDeleteArticle(scope.row.id)"
           ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        background
        layout="prev, pager, next"
        :total="totalCount"
        :current-page.sync="page"
        @current-change="onCurrentChange"
        :page-size="pageSize"
        :disabled="loading">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getArticles, getArticlesChannels, deleteArticles } from '@/api/article'
export default {
  name: 'articleIndex',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      value2: '',
      articles: [],
      articlesStatus: [
        { status: 0, text: '草稿', type: 'warning' },
        { status: 1, text: '待审核', type: '' },
        { status: 2, text: '审核通过', type: 'success' },
        { status: 3, text: '审核失败', type: 'danger' },
        { status: 4, text: '已失败', type: 'info' }
      ],
      totalCount: 0, // 总数据条数
      pageSize: 20, // 每页大小
      status: null, // 查询文章的状态，不传就是全部
      channels: [], // 文章频道列表
      channelsId: null, // 查询文章的频道
      rangeDate: [], // 查询文章的日期
      loading: true, // 加载中
      page: 1 // 当前页码
    }
  },
  created () {
    this.loadChannels()
    this.loadArticles()
  },
  methods: {
    loadChannels () {
      getArticlesChannels().then(res => {
        // console.log(res)
        this.channels = res.data.data.channels
      })
    },
    loadArticles (page = 1) {
      this.loading = true
      getArticles({
        page,
        per_page: this.pageSize,
        status: this.status,
        channels_id: this.channelsId,
        begin_pubdate: this.rangeDate ? this.rangeDate[0] : null, // 开始日期
        end_pubdate: this.rangeDate ? this.rangeDate[1] : null // 截止日期
      }).then(res => {
        const { results, total_count: totalCount } = res.data.data
        this.articles = results
        this.totalCount = totalCount
        // 关闭加载中
        this.loading = false
      })
    },
    onCurrentChange (page) {
      this.loadArticles(page)
    },
    onDeleteArticle (articleId) {
      this.$confirm('确认删除吗？', '删除提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteArticles(articleId.toString()).then(res => {
          // 删除成功，更新文章列表
          this.loadArticles(this.page)
        })
      }).catch((err) => {
        console.log('输出错误原因', err)
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
    .article-contain{
        padding: 0 2rem;
    }
    .el-breadcrumb{
        height: 1rem;
        font-size: 1.1rem;
        color: rgba(15, 23, 42, 0.45);
    }
    .el-form{
      padding: 1rem 2rem;
      margin: 0 1rem;
      margin-top: 1.8rem;
      padding-top: 1rem;
      border-radius: 16px;
      background-color: #fff;
    }
    .block{
        padding: 1rem 2rem;
        margin: 0 1rem;
        margin-top: 1.8rem;
        padding-top: 1rem;
        border-radius: 16px;
        background-color: #fff;
        .filterCondition{
            font-size: 0.875rem;
            margin: 1rem 0;
            color: rgba(15, 23, 42, 0.65);
            // font-weight: 500;
            letter-spacing: 2px;
        }
        .article-cover {
            width: 200px;
            background-size: cover;
        }
        .el-pagination{
            margin: 2rem 0 1rem 0s;
            text-align: center;
            margin-top: 1rem;
        }
    }
</style>
