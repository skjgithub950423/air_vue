// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill"
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store.js'
import AMap from 'vue-amap'
import ECharts from 'vue-echarts'
import VueQuillEditor from 'vue-quill-editor'
import {ServerDatasource} from 'vue-datasource'
import particles from 'particles.js'
import axios from 'axios'
import querystring from 'querystring'

import 'element-ui/lib/theme-chalk/index.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(AMap)
Vue.use(VueQuillEditor)
Vue.use(ServerDatasource)
Vue.use(particles)

Vue.component('chart', ECharts)
Vue.component('server-datasource', ServerDatasource) //将server-datasource注册为全局组件

Vue.prototype.$axios = axios //将axios挂载到vue上
Vue.prototype.$qs = querystring //将node的querystring方法挂载到vue

AMap.initAMapApiLoader({
key: '89b51eed35e02c7035cb9c0a1d63a59a',
plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
}); //初始化地图插件

/* eslint-disable no-new */
new Vue({
el: '#app',
store,
router,
components: { App },
template: '<App/>'
})

