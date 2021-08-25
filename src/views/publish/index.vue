<template>
    <div class="publish-container">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: 'home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{ $route.query.id ? '编辑文章' : '发布文章'}}</el-breadcrumb-item>
      </el-breadcrumb>
     <!-- 发表文章主要内容 -->
      <el-form
      :model="article"
      label-width="80px"
      ref="publish-form"
      :rules="formRules"
      >
        <el-form-item label="标题" prop="title">
            <el-input v-model="article.title"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
            <el-tiptap
            lang="zh"
            v-model="article.content"
            :extensions="extensions"
            height="350px"
            placeholder="请输入文章内容"
            ></el-tiptap>
        </el-form-item>
        <el-form-item label="封面">
            <el-radio-group v-model="article.cover.type">
              <el-radio :label="1">单图</el-radio>
              <el-radio :label="3">三图</el-radio>
              <el-radio :label="0">无图</el-radio>
              <el-radio :label="-1">自动</el-radio>
            </el-radio-group>
            <template v-if="article.cover.type > 0">
              <div
                style="display: flex; justify-content: flex-start; align-items: center; margin: auto"
              >
                <ImageCover
                  :key="cover"
                  v-for="(cover, index) in article.cover.type"
                  v-model="article.cover.images[index]"
                ></ImageCover>
              </div>
              <!-- <ImageCover
                :key="cover"
                v-for="(cover, index) in article.cover.type"
                :cover-image="article.cover.images[index]"
                @update-cover="onUpdateCover(index, $emit)"
              ></ImageCover> -->
            </template>
        </el-form-item>
        <el-form-item label="频道" prop="channel_id">
            <el-select v-model="article.channel_id" placeholder="请选择频道">
            <el-option
              :label="channel.name"
              :value="channel.id"
              v-for="(channel, index) in channels"
              :key="index"
            ></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onPublish(false)">发表</el-button>
            <el-button @click="onPublish(true)">存入草稿</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {
  ElementTiptap,
  // necessary extensions
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Underline,
  Italic,
  Image,
  HorizontalRule,
  Strike,
  ListItem,
  BulletList,
  FontType,
  FontSize,
  OrderedList,
  TodoItem,
  TodoList,
  CodeBlock,
  TextColor,
  TextHighlight,
  Preview,
  History,
  Fullscreen
} from 'element-tiptap'
import 'element-tiptap/lib/index.css'
import {
  getArticlesChannels,
  addArtiles,
  getArticle,
  updateArticle
} from '@/api/article'
import { uploadImage } from '@/api/image'
import ImageCover from './components/image-cover'
export default {
  name: 'publishIndex',
  components: {
    'el-tiptap': ElementTiptap,
    ImageCover
  },
  data () {
    return {
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 5 }),
        new Bold({ bubble: true }), // render command-button in bubble menu.
        new Underline({ bubble: true, menubar: false }), // render command-button in bubble menu but not in menubar.
        new Image({
          // 默认上传图片生成 base64 字符串 和内容存储在一起
          // 自定义图片上传, 返回一个 Promise<url>
          uploadRequest (file) {
            const fd = new FormData()
            fd.append('image', file)
            return uploadImage(fd).then(res => {
              return res.data.data.url
            })
          }
        }),
        new Italic(),
        new Strike(),
        new HorizontalRule(),
        new FontType(),
        new FontSize(),
        new ListItem(),
        new BulletList(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),
        new CodeBlock(),
        new TextColor(),
        new TextHighlight(),
        new Preview(),
        new History(),
        new Fullscreen()
      ],
      channels: [], // 文章频道
      article: {
        title: '', // 文章标题
        content: '', // 文章内容
        // 文章封面
        cover: {
          type: 0, // 封面的类型
          images: [] // 封面图片的地址
        },
        channel_id: null
      },
      formRules: {
        title: [
          { required: true, message: '请输入文章标题', trigger: 'blur' },
          { min: 5, max: 30, message: '长度在 5 到 30 个字符', trigger: 'blur' }
        ],
        content: [
          {
            validator (rule, value, callback) {
            //   console.log('111')
              if (value === '<p></p>') {
                callback(new Error('请输入文章内容'))
              } else {
                callback()
              }
            }
          },
          { required: true, message: '请输入文章内容', trigger: 'blur' }
        ],
        channel_id: [
          { required: true, message: '请选择文章频道', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.loadChannels()
    // 编辑和发布用的是同一个路径，需要判断
    if (this.$route.query.id) {
      this.loadArticles()
    }
  },
  methods: {
    loadChannels () {
      getArticlesChannels().then(({ data }) => {
        this.channels = data.data.channels
      })
    },
    onPublish (draft) {
      this.$refs['publish-form'].validate((valid) => {
        if (!valid) {
          return
        }
        const articleId = this.$route.query.id
        if (articleId) {
          updateArticle(articleId, this.article, draft).then(res => {
            //   console.log(res);
            this.$message({
              message: `${draft ? '存入草稿' : '发布'}修改成功`,
              type: 'success'
            })
            this.$router.push('/layout/article')
          })
        } else {
          addArtiles(this.article, draft).then(res => {
            //   console.log(res)
            this.$message({
              message: `${draft ? '存入草稿' : '发布'}成功`,
              type: 'success'
            })
            this.$router.push('/layout/article')
          })
        }
      })
    },
    // 修改文章内容
    loadArticles () {
      getArticle(this.$route.query.id).then(res => {
        this.article = res.data.data
      })
    }
    // onUpdateCover (index, url) {
    //   this.article.cover.images[index].src = url
    // }
  }
}
</script>

<style lang="less" scoped>
.publish-container{
  padding: 0 2rem;
}
.el-breadcrumb{
  font-size: 1.1rem;
  color: rgba(15, 23, 42, 0.45);
  margin: 0 0 24px 0;
}
.el-form{
  padding: 30px 30px 20px 0;
  border-radius: 16px;
  background-color: #fff;
}
</style>
