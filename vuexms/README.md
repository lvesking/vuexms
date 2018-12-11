# vuexms

> vuex

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

1.  1.npm install webpack -g
	2.cnpm install --global vue-cli
	3.vue init webpack my-project
? Project name  xxx    项目名称
? Project description  xxx    项目描述
? Author  xxx    项目作者
? Vue build standalone    构建方式
? Install vue-router? Yes  是否安装路由
? Use ESLint to lint your code? No    是否启用eslint检测规则
? Setup unit tests with Karma + Mocha? No    是否启用单元测试
? Setup e2e tests with Nightwatch? No    是否启用端到端测试

	
2.  config/index.js     port:修改端口
3.  localhost+端口   进入入口
4.   npm install --save axios     引入axios
5.  main.js中import axios from 'axios'  	Vue.prototype.axios=axios
6.  main,js中引入element   官网有教程
7.  最外层index.html引入初始化全局css
8.  config/index.js引入proxyTable参数解决代理问题   //这只是开发环境（dev）中解决了跨域问题，生产环境中真正部署到服务器上如果是非同源还是存在跨域问题
9.	router/index.js  路由修改对应components的vue文件
10.	npm install --save vuex   引入vuex模块
11. 创建vuex目录下的store.js
12.