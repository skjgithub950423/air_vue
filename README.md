## 基于vue的后台管理系统

###技术栈
脚手架：Vue-cli</br>
vue全家桶：vuejs + vue-router + vuex </br>
mock数据：json-server + faker.js </br>
UI框架：element-ui</br>
获取数据：axios</br>
**整个项目使用es6的语法编写**</br>
###主要实现了以下功能
1.使用vue-router实现了页面间的跳转</br>
2.使用vuex来管理组件间的状态</br>
3.使用json-server+faker.js完成了项目数据的模拟并实现了数据的动态添加与获取</br>
4.自己实现了一个简易的TodoList并集成在了项目中</br>
5.自定义样式（只写了一点点，后续会继续完善）</br>

###运行项目
首先将项目clone到本地，然后依次执行以下命令</br>

npm install</br>

npm start 此时打开localhost：8088已经可以看到页面了</br>

如果出现报错的情况与vue-datasource有关的错误 在node_modules文件夹下找到vue-datasource的安装包 把其中的node_modules文件夹删除 在当前文件夹重新执行npm install </br>

如果想要实现表格数据的添加与查询，执行命令</br>

npm run mockdev （需要重新打开一个终端）</br>