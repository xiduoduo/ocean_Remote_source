<template>
  <div class="right-nav">
    <div class="title">海洋要素</div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      unique-opened
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
      <div v-for="(item,index) in menuData" :key="index">
        <el-submenu v-if="item.children" :index="item.index">
          <template slot="title">
            <!-- <img :src="item.image" class="rgt-img" alt=""> -->
            <el-popover
              placement="left-start"
              width="200"
              trigger="hover"
              >
              <div class="popper-content">{{item.info}}</div>
              <div slot="reference">
                <img :src="item.image" class="rgt-img" alt="">
              </div>
            </el-popover>
            <!-- <el-tooltip class="item" effect="light" content="Top Left 提示文字" placement="left-start" >
              <div>
                <img :src="item.image" class="rgt-img" alt="">
              </div>
            </el-tooltip> -->
          </template>
          <el-menu-item
            class="h2"
            v-for="(item2,index2) in item.children"
            :key="index2" :class="item2.index == activeIndex?'active-menu':''" @click="tabClick(item2.index)">
            <!-- <img :src="item2.image" alt=""> -->
            <el-popover
              placement="left-start"
              width="200"
              trigger="hover"
              >
              <div class="popper-content">{{item2.info}}</div>
              <div slot="reference">
                <img :src="item2.image" class="rgt-img" alt="">
              </div>
            </el-popover>
          </el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
    <div class="ribbon">
      <ul class="ribbonList">
        <li v-for="(v, i) in ribbonList" :key="i">{{ v }}</li>
      </ul>
    </div>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'RightNav',
  data() {
    return {
      uni: true,
      menuData: [
        {
          index: "0",
          children: [
            {
              index: 0,
              image: require('@/assets/images/grid.png'),
              info: '填充'
            },
            {
              index: 1,
              image: require('@/assets/images/dengzhixian.png'),
              info: '格点'
            },
            {
              index: 2,
              image: require('@/assets/images/xingzhuang.png'),
              info: '等值线'
            }
          ],
          image: require('@/assets/images/bianzubeifen.png'),
          info: '海表温度'
        },
        {
          index: "1",
          children: [
            {
              index: 3,
              image: require('@/assets/images/grid.png'),
              info: '填充'
            },
            {
              index: 4,
              image: require('@/assets/images/dengzhixian.png'),
              info: '格点'
            },
            {
              index: 5,
              image: require('@/assets/images/xingzhuang.png'),
              info: '等值线'
            }
          ],
          image: require('@/assets/images/bianzu1.png'),
          info: '海面高度'
        },
        {
          index: "2",
          children: [
            {
              index: 6,
              image: require('@/assets/images/grid.png'),
              info: '填充'
            },
            {
              index: 7,
              image: require('@/assets/images/dengzhixian.png'),
              info: '格点'
            },
            {
              index: 8,
              image: require('@/assets/images/xingzhuang.png'),
              info: '等值线'
            }
          ],
          image: require('@/assets/images/feng.png'),
          info:'有效波高'
        },
        {
          index: "3",
          children: [
            {
              index: 9,
              image: require('@/assets/images/grid.png'),
              info: '填充'
            },
            {
              index: 10,
              image: require('@/assets/images/dengzhixian.png'),
              info: '格点'
            },
            {
              index: 11,
              image: require('@/assets/images/fengshitu.png'),
              info: '风矢图'
            },
            {
              index: 12,
              image: require('@/assets/images/xingzhuang.png'),
              info: '等值线'
            }
          ],
          image: require('@/assets/images/feng.png'),
          info: '海面风场'
        },
        {
          index: "4",
          children: [
            {
              index: 13,
              image: require('@/assets/images/grid.png')
            },
            {
              index: 14,
              image: require('@/assets/images/dengzhixian.png')
            },
            {
              index: 15,
              image: require('@/assets/images/xingzhuang.png')
            }
          ],
          image: require('@/assets/images/shuishen.png'),
          info: '海水透明度'
        }
      ],
      activeIndex: 0,
      ribbonList: [
          "40",
          "30",
          "20",
          "10",
          "0",
          "-10",
          "-20",
          "℃",
      ],
    } 
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    tabClick(index){
      console.log(index)
      this.activeIndex = index;
      console.log(this.activeIndex)
    },
  }
}
</script>

<style lang="less" scoped>
  .right-nav {
    width: 60px;
    height: calc(100vh - 67px);
    // background-color: #062D57;
    position: absolute;
    top: 80px;
    right: 26px;
    z-index: 999;
    overflow: hidden;
    height: calc(100vh - 90px);
    .title {
      height: 26px;
      line-height: 26px;
      text-align: center;
      background: linear-gradient(180deg, #21509F 0%, #214071 100%);
      color: #fff;
      font-size: 12px;
    }
  }
  .nav-title {
    height: 48px;
    line-height: 48px;
    background: #1A4676;
    color: #fff;
    font-family: PingFangSC-Medium, PingFang SC;
    text-align: center;
  }
 .el-menu-vertical-demo {
    // background-color: #062D57 !important;
    padding-bottom: 10px;
  }
  .el-submenu__title {
    background-color: #062D57 !important;
  }
  .rgt-img {
    width: 38px;
    height: 38px;
  }
  .h1 {
    margin-left: 15px;
  }
  .lon {
    color: #fff;
  }
  .h2 {
    color: #A3B1C1 !important;
    padding-left: 55px !important;
  }
  .active-menu {
    background: linear-gradient(90deg, rgba(0,252,255,0.32) 0%, rgba(0,255,253,0.02) 100%);
    border-left: 3px solid #40DFF8;
  }
  // .el-submenu__title {
  //   padding-left: 10px !important;
  //   height: 47px !important;
  // }
  .right-nav .el-menu-item img {
    width: 22px;
    height: 22px;
  }
  .right-nav .el-menu-item {
    padding: 0 !important;
    // padding-left: 17px !important;
    min-width: 0;
    text-align: center;
  }
  .right-nav .el-submenu .el-menu-item {
    height: 32px;
    line-height: 32px;
  }
  // .right-nav .el-submenu__title {
  //   height: 47px !important;
  // }
  .ribbon  {
    width: 26px;
    height: 238px;
    border: 1px solid #979797;
    border-radius: 18px;
    position: fixed;
    bottom: 148px;
    right: 37px;
    background: linear-gradient(180deg, #892C0A 0%, #902E0B 6%, #CA4712 17%, #DFB109 35%, #81941C 45%, #508B41 51%, #5F92C4 59%, #8FD0D2 75%, #9689D3 84%, #9689D3 100%);
    // margin-top: 139px;
    // margin-left: 17px;
  }

  .ribbon  .ribbonList {
    list-style: none;
    // width: 430px;
    // margin-top: 20px;
    padding: 0;
    margin-top: 5px;
   
  }
  .ribbon  .ribbonList li {
    // float: left;
    height: 17px;
    font-size: 12px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: center;
    color: #000000;
    line-height: 17px;
    letter-spacing: 0px;
    margin-top: 11px;
    color: #fff;
  }
  .ribbon .ribbonList li {
    // margin-left: 36px;
  }

  .ribbon  .ribbonList li:first-child {
    margin-top: 0;
  }

  .popper-content {
    width: 80px;
    // background: #192663;
  }
</style>