## 基于vue的后台管理系统

###技术栈
脚手架：Vue-cli</br>
vue全家桶：vuejs + vue-router + vuex </br>
mock数据：json-server + faker.js </br>
UI框架：element-ui
获取数据：axios
**整个项目使用es6的语法编写**
###主要实现了以下功能
1.使用vue-router实现了页面间的跳转
2.使用vuex来管理组件间的状态
3.使用json-server+faker.js完成了项目数据的模拟并实现了数据的动态添加与获取
4.自己实现了一个简易的TodoList并集成在了项目中
5.自定义样式（只写了一点点，后续会继续完善）

###运行项目
首先将项目clone到本地，然后依次执行以下命令

npm install

npm start 此时打开localhost：8088已经可以看到页面了

如果想要实现表格数据的添加与查询，执行命令

npm run mockdev （需要重新打开一个终端）