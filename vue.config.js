'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')
const webpack = require("webpack");

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || '陀螺仪系统' // 标题

const port = process.env.port || process.env.npm_config_port || 9000 // 端口

module.exports = {
  configureWebpack: {
  plugins: [
    new webpack.DefinePlugin({ // webpack自带该插件，无需单独安装
        'process.env' : {
            NODE_ENV: process.env.NODE_ENV // 将属性转化为全局变量，让代码中可以正常访问
        }
      })
    ]
  }
}

// vue.config.js 配置说明
//官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions
// 这里只列一部分，具体配置参考文档

