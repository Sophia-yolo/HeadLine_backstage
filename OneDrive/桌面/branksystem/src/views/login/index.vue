<template>
  <div class="login-contain">
      <div class="login-form-wrap">
          <el-form ref="login-form" :rules="formRules" :model="user" class="login-form">
            <el-form-item prop="mobile">
                <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item prop="code">
                <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
            </el-form-item>
            <el-form-item prop="agree">
              <el-checkbox v-model="user.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button :loading="loginLoading" class="login-btn" type="primary" @click="onLogin">立即创建</el-button>
            </el-form-item>
          </el-form>
      </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'login',
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810',
        agree: false // 是否同意协议
      },
      // checked: false, // 判断协议有无勾选
      loginLoading: false,
      // 表单验证配置
      formRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'change' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入有效地手机号', trigger: 'change' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'change' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码', trigger: 'change' }
        ],
        agree: [
          {
            // 自定义校验规则：https://element.eleme.cn/#/zh-CN/component/form#zi-ding-yi-xiao-yan-gui-ze
            // 验证通过：callback()
            // 验证失败：callback(new Error('错误消息'))
            validator: (rule, value, callback) => {
              if (value) {
                callback()
              } else {
                callback(new Error('请同意用户协议'))
              }
            },
            // message: '请勾选同意用户协议',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    onLogin () {
      // 进行表单验证
      this.$refs['login-form'].validate(valid => {
        // 表单验证失败，停止请求提交
        if (!valid) {
          return
        }

        // 验证通过，请求登录
        this.login()
      })
    },
    login () {
      // 开启加载
      this.loginLoading = true

      // 发送请求
      login(this.user).then(res => {
        this.$message({
          message: 'login success',
          type: 'success'
        })
        this.loginLoading = false

        // 将接口返回的用户相关数据放到本地存储，方便应用
        window.localStorage.setItem('user', JSON.stringify(res.data.data))

        // 跳转到首页
        this.$router.push({
          name: 'layout'
        })
      }).catch(err => {
        console.log(err)
        this.$message.error('login failed')

        // 关闭load
        this.loginLoading = false
      })
    }
  }
}
</script>

<style scoped lang="less">
    .login-contain{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: url('./login_bg.jpg') no-repeat;
        background-size: cover;
        .login-form-wrap{
          width: 300px;
          padding: 50px;
          background-color: #fff;
          .login-btn{
            width: 100%;
          }
        }
    }
</style>
