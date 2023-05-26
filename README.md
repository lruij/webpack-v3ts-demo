# webpack-v3ts-demo
webpack + vue3 + ts

# 脚手架搭建步骤
1. 初始化目录结构
   1. public
      1. index.html
   2. src
      1. assets
      2. views
      3. App.vue
      4. main.ts
   3. package.json(npm init -y)
   4. tsconfig.json(tsc --init)
   5. webpack.config.js
2. 安装依赖
   1. webpack
   2. vue
   3. typescript
   4. less
   5. @vue/compiler-sfc
3. 配置 webpack
   1. mode、entry、output 基础配置
   2. plugins 使用
      1. html-webpack-plugin
      2. vue-loader
   3. resolve 模块处理
      1. alias 模块路径别名简称配置
   4. rules 文件处理
      1. vue-loader
      2. style-loader、css-loader
      3. less-loader
      4. ts-loader
   5. devServer 配置
   6. 优化
      1. 终端输出优化 friendly-errors-webpack-plugin
      2. externals 排除打包文件,使用 CDN 引用，缩小打包文件大小
