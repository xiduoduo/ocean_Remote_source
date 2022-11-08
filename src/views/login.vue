<template>
  <div class="login-page">
    <div class="login-header">
      <Header></Header>
    </div>
    <div class="login-main">
      <div class="login-window">
        <div class="main-title" style="display: flex">
          <div class="left">
            <img src="@/assets/images/login-right.png" alt />
          </div>
          <div class="title">用户登录</div>
          <div class="right">
            <img src="@/assets/images/login-left.png" alt />
          </div>
        </div>
        <!-- <el-row type="flex">
          <el-col :span="4">
            <img src="@/assets/images/login-left.png" alt />
          </el-col>
          <el-col :span="16" class="input-content">
            <div class="main-title">用户登录</div>
          </el-col>
          <el-col :span="4">
            <img src="@/assets/images/login-right.png" alt />
          </el-col>
        </el-row> -->
        <div class="main-window">
          <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
            <el-row type="flex">
              <!-- <el-col :span="2">
                <img src="@/assets/images/user.png" alt />
              </el-col> -->
              <el-col :span="24" class="input-content">
                <el-input
                  v-model="loginForm.username"
                  type="text"
                  auto-complete="off"
                  placeholder="请输入用户名"
                ></el-input>
              </el-col>
          </el-row>
            <el-row type="flex">
              <!-- <el-col :span="2">
                <img src="@/assets/images/pwd.png" alt />
              </el-col> -->
              <el-col :span="24" class="input-content input-pas">
                <el-input
                  v-model="loginForm.password"
                  type="password"
                  auto-complete="off"
                  placeholder="请输入您的密码"
                  @keyup.enter.native="handleLogin"
                ></el-input>
              </el-col>
            </el-row>
            <!-- <el-row type="flex">
              <el-col :span="2">
                <img src="@/assets/images/verification.png" alt />
              </el-col>
              <el-col :span="15" class="input-content">
                <el-input
                  v-model="loginForm.code"
                  auto-complete="off"
                  placeholder="请输入验证码"
                  @keyup.enter.native="handleLogin"
                ></el-input>
              </el-col>
              <el-col :span="7" class="input-content">
                <div class="login-code">
                  <img :src="codeUrl" alt />
                </div>
              </el-col>
            </el-row> -->

            <div class="checkbox">
              <el-checkbox v-model="loginForm.rememberMe">记住密码</el-checkbox>
            </div>
            <div class="loginBtn" @click.prevent="handleLogin" v-if="!loading">登录</div>
            <div class="loginBtn" v-else>录登中. . .</div>
          </el-form>
        </div>
      </div>
    </div>
    <div class="login-bottom"></div>
  </div>
</template>
<script>
// import { getCodeImg } from '@/api/login'
// import Cookies from 'js-cookie'
// import { encrypt, decrypt } from '@/utils/jsencrypt'
import Header from '@/components/headerPage'

export default {
  name: 'Login',
  components: { Header },
  data() {
    return {
      input: '',
      checked: '',
      codeUrl: '',
      cookiePassword: '',
      loginForm: {
        username: 'admin',
        password: 'admin123',
        rememberMe: false,
        code: '',
        uuid: '',
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', message: '用户名不能为空' },
        ],
        password: [
          { required: true, trigger: 'blur', message: '密码不能为空' },
        ],
        code: [
          { required: true, trigger: 'change', message: '验证码不能为空' },
        ],
      },
      loading: false,
      redirect: undefined,
    }
  },
  mounted() {},
  created() {
    // this.getCode()
    // this.getCookie()
  },
  methods: {
    // getCode() {
    //   getCodeImg().then((res) => {
    //     this.codeUrl = 'data:image/gif;base64,' + res.img
    //     this.loginForm.uuid = res.uuid
    //   })
    // },
    // getCookie() {
    //   const username = Cookies.get('username')
    //   const password = Cookies.get('password')
    //   const rememberMe = Cookies.get('rememberMe')
    //   this.loginForm = {
    //     username: username === undefined ? this.loginForm.username : username,
    //     password:
    //       password === undefined ? this.loginForm.password : decrypt(password),
    //     rememberMe: rememberMe === undefined ? false : Boolean(rememberMe),
    //   }
    // },
    userLogin() {
      //   this.$router.push({ path: '/integratePage' })
    },
    handleLogin() {
      console.log(11)
      // this.$refs.loginForm.validate((valid) => {
      //   if (valid) {
      //     this.loading = true
      //     if (this.loginForm.rememberMe) {
      //       Cookies.set('username', this.loginForm.username, { expires: 30 })
      //       Cookies.set('password', encrypt(this.loginForm.password), {
      //         expires: 30,
      //       })
      //       Cookies.set('rememberMe', this.loginForm.rememberMe, {
      //         expires: 30,
      //       })
      //     } else {
      //       Cookies.remove('username')
      //       Cookies.remove('password')
      //       Cookies.remove('rememberMe')
      //     }
      //     this.$store
      //       .dispatch('Login', this.loginForm)
      //       .then(() => {
      //         this.$router.push({ path: '/integratePage' }).catch(() => {})
      //       })
      //       .catch(() => {
      //         this.loading = false
      //         this.getCode()
      //       })
      //   }
      // })
      console.log(this.$router)
      this.$router.push({ path: '/ocean' })
    },
  },
}
</script>
<style  lang="less" scoped >
.login-page {
  height: 100%;
  width: 100%;
  background: url('~@/assets/images/loginPageBgc.png') no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  // background-color: rgb(196, 194, 209);
  position: relative;
  .login-header {
    height: 10%;
  }
  .login-main {
    height: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-window {
      width: 30%;
      height: 58%;

      background: url('~@/assets/images/loginBgc.png') no-repeat;
      background-size: 100%;
      .main-title {
        margin-top: 40px;
        text-align: center;
        font-size: 24px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #e6f7ff;
        display: flex;
        justify-content: center;
        img {
          height: 19px;
          width: 27px;
        }
        .title {
          padding: 0 19px;
        }
      }

      .main-window {
        width: 70%;
        margin: 0 auto;
        margin-top: 40px;
        // border: 1px solid pink;
        .el-row {
          height: 40px;
          line-height: 40px;
          margin-top: 20px;
          img {
            vertical-align: middle;
          }
          .input-content {
            // border-bottom: 1px solid rgba(151, 151, 151, 0.6);
            ::v-deep .el-input__inner {
              background-color: transparent;
              border: 0;
              color: #e6f7ff;
              background: #425887;
              border-radius: 29px;
              height: 58px;
              font-size: 16px;
              padding-left: 31px;
            }
          }
          .input-pas {
            margin-top: 29px;
          }
        }
        .login-code {
          height: 100%;
          img {
            height: 100%;
            width: 100%;
            cursor: pointer;
          }
        }
        .checkbox {
          margin: 58px 0px 20px 5px;
          ::v-deep .el-checkbox__label {
            color: #ffffff;
          }
        }
        .loginBtn {
          height: 44px;
          line-height: 44px;
          border-radius: 22px;
          text-align: center;
          font-size: 14px;
          font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
          font-weight: bold;
          color: #ffffff;
          // border: 1px solid #fff;
          background: linear-gradient(
            to bottom,
            rgba(104, 188, 255, 1),
            rgba(9, 69, 155, 1)
          );
          margin-top: 25px;
        }
      }
    }
  }
  .login-bottom {
    height: 5%;
    background: url('~@/assets/images/bottomBgc.png') no-repeat;
    background-size: 100% 100%;
  }
}
</style>