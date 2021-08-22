<template>
 <div class="setting-container">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: 'home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>个人设置</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- form 表单 -->
    <el-row :gutter="10">
        <el-col :lg="15">
            <el-form
              ref="setting-form"
              :model="user"
              label-width="80px"
              :rules="formRules"
            >
                <el-form-item label="编号">
                    {{ user.id }}
                </el-form-item>
                <el-form-item label="手机">
                    {{ user.mobile }}
                </el-form-item>
                <el-form-item label="媒体名称" prop="name">
                    <el-input v-model="user.name"></el-input>
                </el-form-item>
                <el-form-item label="媒体介绍" prop="intro">
                    <el-input type="textarea" v-model="user.intro"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="user.email"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button
                      type="primary"
                      @click="onUpdateUser"
                      :loading="updateProfileLoading"
                    >保存设置</el-button>
                </el-form-item>
                </el-form>
        </el-col>
        <el-col :lg="9" class="user">
            <el-avatar
                shape="square"
                :size="150"
                :src="user.photo"
                fit="cover"
            >
            </el-avatar>
            <!-- <el-upload
              class="avatar-uploader updatePhoto"
              action="http://api-toutiao-web.itheima.net/mp/v1_0/user/images"
              :show-file-list="false"
              :on-success="handleAvatarSuccess">
                 <img v-if="imageUrl" :src="user.photo" class="avatar">
                <i class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload> -->
            <div class="updatePhoto"  @click="$refs.file.click()">
                <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
            <input
              type="file"
              hidden
              ref="file"
              @change="onFileChange"
            >
        </el-col>
    </el-row>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
        append-to-body
        @opened="onDialogOpen"
        @close="onDialogClosed"
    >
        <div class="preview-image-wrap">
            <img
              class="preview-image"
              :src="previewImage"
              ref="preview-image"
            >
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button
              type="primary"
              :loading="updatePhotoLoading"
              @click="onUpdatePhoto"
            >确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getUserProfile,
  updateUserPhoto,
  updateUserProfile
} from '@/api/user'
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
import globalBus from '@/utils/global-bus'

export default {
  name: 'settingIndex',
  data () {
    return {
      user: {
        email: '',
        id: null,
        intro: '',
        mobile: '',
        name: '',
        photo: ''
      },
      dialogVisible: false, // 控制上传图片裁剪与预览
      previewImage: '', // 预览图片
      cropper: null, // 裁切实例
      updatePhotoLoading: false, // 更新头像loading 状态
      updateProfileLoading: false, // 更新基本信息的loading状态
      formRules: {
        name: [
          { required: true, message: '请输入媒体名称', trigger: 'blur' }
        ],
        intro: [
          { required: true, message: '请输入媒体介绍', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.loadUser()
  },
  methods: {
    onUpdateUser () {
      this.$refs['setting-form'].validate((valid) => {
        this.updateProfileLoading = true
        if (!valid) {
          this.updateProfileLoading = false
          return
        }
        updateUserProfile(this.user).then(res => {
          this.updateProfileLoading = false
          this.$message({
            type: 'success',
            message: '保存成功'
          })
          // 发布通知，用户信息已修改
          globalBus.$emit('update-user', this.user)
        })
      })
    },
    loadUser () {
      getUserProfile().then(res => {
        this.user = res.data.data
      })
    },
    onFileChange () {
      // 得到图片预览
      const file = this.$refs.file
      //   console.log(file.files)
      const blobData = window.URL.createObjectURL(file.files[0])
      //   console.log(blobData)
      this.previewImage = blobData

      // 展示弹出层
      this.dialogVisible = true

      // 解决相同文件不触发 change 事件问题
      this.$refs.file.value = ''
    },
    onDialogOpen () {
      // 图片裁切器必须基于可见状态的 img 进行初始化
      // 获取元素节点
      const image = this.$refs['preview-image']
      // 初始化裁切器
      if (this.cropper) {
        this.cropper.replace(this.previewImage)
        return
      }
      this.cropper = new Cropper (image, {
        aspectRatio: 1,
        viewMode: 1,
        background: false
        // crop (event) {
        //   console.log(event.detail.x)
        //   console.log(event.detail.y)
        //   console.log(event.detail.width)
        //   console.log(event.detail.height)
        //   console.log(event.detail.rotate)
        //   console.log(event.detail.scaleX)
        //   console.log(event.detail.scaleY)
        // }
      })
    },
    onDialogClosed () {
    // 对话框关闭，销毁裁切器
    //   this.cropper.destroy()
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    onUpdatePhoto () {
      this.updatePhotoLoading = true
      // 获取裁切的图片对象
      this.cropper.getCroppedCanvas().toBlob(file => {
        const fd = new FormData()
        fd.append('photo', file)
        // 请求更新头像并提交
        updateUserPhoto(fd).then(res => {
        //   console.log(res)
        //   关闭对话框
          this.dialogVisible = false
          this.user.photo = window.URL.createObjectURL(file)
          this.updatePhotoLoading = false
          this.$message({
            type: 'success',
            message: '头像修改成功'
          })
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.setting-container{
    padding: 0 2rem;
}
.el-breadcrumb{
    font-size: 1.1rem;
    color: rgba(15, 23, 42, 0.45);
    margin: 0 0 24px 0;
}
.el-row{
    padding: 30px;
    border-radius: 16px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.user{
    position: relative;
    .el-avatar{
        position: absolute;
        /* // 设置 top、bottom，元素就抓到可用空间 */
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        // display: none;
        z-index: 2400;
    }
    .updatePhoto{
        width: 150px;
        height: 150px;
        position: absolute;
        /* // 设置 top、bottom，元素就抓到可用空间 */
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        background-color: rgba(15, 23, 42, 0.45);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2500;
        // display: none;
    }
}
.preview-image-wrap{
    .preview-image{
        display: block;
        max-width: 100%;
        height: 200px;
    }
}
</style>
