<template>
    <div class="cover-container" @click="dialogVisible = true">
        <div class="block">
          <el-image
            class="cover-image"
            ref="cover-image"
            :src="value"
            fit="contain"
          >
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
        <el-dialog
          :visible.sync="dialogVisible"
          append-to-body
        >
          <div class="title-box" @click="checkTitle">
              <h2 style="color: #3b82f6">
                {{ !allMaterialMode ? "素材库" : "上传图片" }}
              </h2>
              <span style="margin: 0 8px">/</span>
              <h4 class="vice-title">
                {{ !allMaterialMode ? "上传照片" : "素材库" }}
              </h4>
          </div>
              <!-- <el-tabs v-model="activeName" type="card">
              <el-tab-pane label="用户管理" name="first">
                  <input
                      type="file"
                      ref="file"
                      @change="onFileChange"
                  >
                  <img
                      class="preview-image"
                      :src="previewImage"
                      ref="preview-image"
                      style="height: 200px; max-width: 80%"
                  >
              </el-tab-pane>
              <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          </el-tabs> -->
          <div class="updateImage" v-show="allMaterialMode">
              <div class="addPhoto"  @click="$refs.file.click()">
                  <i class="el-icon-plus avatar-uploader-icon"></i>
              </div>
              <input
                  type="file"
                  hidden
                  ref="file"
                  @change="onFileChange"
              >
              <img
                  class="preview-image"
                  :src="previewImage"
                  ref="preview-image"
                  style="height: 100px; max-width: 100%"
              >
          </div>
          <ImageList
              v-show="!allMaterialMode"
              :is-show-add="false"
              :is-show-action="false"
              is-show-selected
              ref="image-list"
          ></ImageList>
          <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button
                  type="primary"
                  @click="onCoverConfirm"
              >确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>

<script>
import { uploadImage } from '@/api/image.js'
import ImageList from '@/components/image-list'
export default {
  name: 'UpdateCover',
  // 夫传子
  props: ['value'],
  components: {
    ImageList
  },
  data () {
    return {
      dialogVisible: false,
      activeName: 'first',
      allMaterialMode: false,
      previewImage: '' // 预览图片
    }
  },
  methods: {
    checkTitle () {
      this.allMaterialMode = !this.allMaterialMode
    },
    onFileChange () {
      //   得到图片预览
      const file = this.$refs.file
      //     console.log(file.files)
      const blobData = window.URL.createObjectURL(file.files[0])
      //     console.log(blobData)
      this.previewImage = blobData
      //   展示弹出层
      this.dialogVisible = true
      //   解决相同文件不触发 change 事件问题
    //   this.$refs.file.value = ''
    },
    onCoverConfirm () {
      if (this.allMaterialMode) {
        const file = this.$refs.file.files[0]
        if (!file) {
          this.$message('请选择文件')
          return
        }
        const fd = new FormData()
        fd.append('image', file)
        uploadImage (fd).then(res => {
          console.log(res)
          this.dialogVisible = false
          this.$refs['cover-image'].src = res.data.data.url
          // 将图片传递给父组件
          this.$emit('input', res.data.data.url)
        })
      } else if (!this.allMaterialMode) {
        const imageList = this.$refs['image-list']
        const selected = imageList.selected
        if (selected === null) {
          this.$message('请选择封面图片')
          return
        }
        this.dialogVisible = false
        this.$emit('input', imageList.images[selected].url)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.cover-container{
  cursor: pointer;
}
.block{
  margin: 2px;
  background-color: #ccc;
  .cover-image{
    width: 190px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.image-slot{
  margin: auto;
}
.title-box {
  display: flex;
  align-items: baseline;
  cursor: pointer;
  margin: 0 0 15px;
}
.updateImage{
    position: relative;
    max-width: 100%;
    height: 200px;
    .addPhoto{
        width: 150px;
        height: 150px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        // background-color: pink;
        border: 1px solid #ccc;
        border-radius: 10px;
    }
}
</style>
