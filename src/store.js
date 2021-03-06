import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const leftTree = {
myleftTreeItems: [
{
icon: 'el-icon-menu',
index: '/home/hello',
title: 'Home'
},
{
icon: 'el-icon-menu',
index: '2',
title: '表格',
subs: [
{
index: '/home/table/tablelist',
title: '基础表格'
},
{
index: '/home/pagetable',
title: '带分页表格'
}
]
},
{
icon: 'el-icon-date',
index: '3',
title: '表单',
subs: {
substitle:'为了有多层菜单',
index:'4',
subends:[
{
index: '/home/form/baseform',
title: '基本表单'
},
{
index: '/home/form/validform',
title: '验证表单'
}
]
}
},
{
icon: 'el-icon-menu',
index: '/home/todo',
title: 'TodoList'
},
{
icon: 'el-icon-menu',
index: '/home/draglist',
title: '拖拽'
}
],
sysOptleftTreeItems: [
{
icon: 'el-icon-menu',
index: '1',
title: '插件',
subs: [
{
index: '/home/maps',
title: '地图'
},
{
index: '/home/editor',
title: 'VueEditor'
}
]
},{
icon: 'el-icon-menu',
index: '/home/vuetable',
title: 'vue表格插件'
},{
icon: 'el-icon-menu',
index: '/home/charts',
title: '图表'
},{
icon: 'el-icon-menu',
index: '/home/uploadfile',
title: '文件上传'
}
]
}

const state = {
leftTree: leftTree.myleftTreeItems,
options: [],
activeIndex: '',
userInfo: {}
}

const mutations = {
add_tabs(state,data){
this.state.options.push(data);
},
set_active_index (state, index) {
this.state.activeIndex = index;
},
toggle_left(state,key){
this.state.leftTree = leftTree[key+'leftTreeItems'];
},
delete_tabs(state,name){
this.state.options = this.state.options.filter(option => option.route !== name);
},
get_user_info(state,info){
this.state.userInfo = info;
}
}

export default new Vuex.Store({
state,
mutations
})
