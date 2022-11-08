<template>
  <div>
    <div class="login-header">
      <div class="header-title">
        <img src="@/assets/images/weitu.png" alt />
        <p>海洋遥感数据标准化系统</p>
        
      </div>
      <div class="timeShow" v-show="isShowTime">
        <img src="@/assets/images/time.png" alt />
        <!-- <span>{{getNowDate()}}</span> -->
      </div>
      <!-- <div class="btn" v-show="isShowTime">
        <img src="@/assets/images/homeBtn.png" alt />
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderPage',
  components: {},
  data() {
    return {
      isShowTime: false,
    }
  },
  mounted() {
    // this.judgeRoute()
  },
  methods: {
    // 获取当前时间
    getNowDate() {
      var myDate = new Date()
      var year = myDate.getFullYear() //获取当前年
      var mon = myDate.getMonth() + 1 //获取当前月
      mon = mon < 10 ? '0' + mon : mon
      var date = myDate.getDate() //获取当前日
      date = date < 10 ? '0' + date : date
      var hours = myDate.getHours() //获取当前小时
      hours = hours < 10 ? '0' + hours : hours
      var minutes = myDate.getMinutes() //获取当前分钟
      minutes = minutes < 10 ? '0' + minutes : minutes
      var seconds = myDate.getSeconds() //获取当前秒
      seconds = seconds < 10 ? '0' + seconds : seconds
      var now =
        year +
        '.' +
        mon +
        '.' +
        date +
        ' ' +
        hours +
        ':' +
        minutes +
        ':' +
        seconds
      return now
    },
    // 判断当前路由
    judgeRoute() {
      if (this.$route.path == '/integratePage') {
        this.isShowTime = true
      }
    },
  },
}
</script>
<style  lang="less" scoped >
.login-header {
  background: url('~@/assets/images/topBac.png') no-repeat;
  background-size: 100%;
  background-attachment: fixed;
  display: flex;
 
  .header-title {
    display: flex;
    // border: 1px solid red;
    background-size: 100% 100%;
    margin: 0 auto;
    text-align: center;
    p {
      margin: 5px 0;
      margin-left: 20px;
      font-size: 30px;
      font-family: YouSheBiaoTiHei;
      color: #ffffff;
      font-style: italic;
    }
    img {
      margin-top: 10px;
      height: 30px;
      width: 35px;
    }
  }
}
.timeShow {
  // border: 1px solid red;
  width: 225px;
  height: 45px;
  line-height: 45px;
  position: absolute;
  left: 20px;
  font-size: 20px;
  font-family: Digital-7Mono, Digital;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 10%;
    height: 55%;
    margin-right: 5px;
  }
}
.back-btn {
  width: 45px;
  height: 43px;
  position: absolute;
  right: 20px;
}
</style>