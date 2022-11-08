<template>
  <div class="progress">
    <div class="time">
      <label class="label">时间：</label>
        <span class="componet">
          <el-date-picker
            v-model="starTime"
            type="date"
            value-format="yyyy-MM-dd"
            format="yyyy-MM-dd"
            placeholder="选择日期">
          </el-date-picker>
        </span>
    </div>
    <div class="ru">
      <div class="btn">
        <img src="./../../assets/images/sanjiaoxing.png" alt="">
      </div>
      <div>
        <div class="trans"></div>
        <div class="ruler">
          <img class="img1" src="./../../assets/images/jubei.png" alt="">
          <img class="img2" src="./../../assets/images/jubei.png" alt="">
        </div>
        <ul class="mark">
          <li>
            <div class="text">1234</div>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="progress">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'proGress',
  data(){
    return {
      starTime: "",
    }
  }
}
</script>

<style lang="less" scoped>
.progress {
  
}
.time {
  padding-left: 10px;
  position: absolute;
  bottom: 30px;
  left: 15%;
  background: linear-gradient(180deg, #21509F 0%, #214071 100%);
  color: #fff;
  .el-input--prefix .el-input__inner {
    background: linear-gradient(180deg, #21509F 0%, #214071 100%);
  }
}
.btn {
  width: 48px;
  height: 48px;
  background: rgba(15,26,42,0.8);
  text-align: center;
  img {
    width: 14px;
    margin-top: 14px;
  }
}
.ru {
  position: absolute;
  bottom: 30px;
  left: 57%;
  transform: translate(-50%, 0);
  display: flex;
  // opacity: 0.4;
}
.ruler {
  margin-left: 100px;
  width: 900px;
  height: 10px;
  background: #3F7DD6;
  top: 0;
  position: absolute;
  img {
      width: 14px;
  }
  .img1 {
    position: absolute;
    left: -14px;
    top: -6px;
  }
  .img2 {
    position: absolute;
    right: -12px;
    top: -7px;
    transform: rotate(180deg)
  }
}
.trans {
  width: 1017px;
  height: 10px;
  background: #3F7DD6;
  background: rgba(42,67,94,0.33);
}
.progress {
  width: 1017px;
  height: 38px;
  background: linear-gradient(180deg, #193979 0%, #0F2248 100%) rgba(9,28,54,0.9);
  // opacity: 0.4;
}
// .
.mark {
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  height: 5px;
  // background: pink;
  position: absolute;
  li {
    width: 70px;
    height: 5px;
    border-right: 1px solid #fff;
    position: relative;
    // display: inline-block;
    float: left;
    .text {
      color: #fff;
      position: absolute;
      right: 0;
      transform: translate(50%,5px);
    }
  }
}
</style>