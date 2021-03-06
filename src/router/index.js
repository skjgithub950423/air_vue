import Vue from 'vue'
import Router from 'vue-router'
import Todo from '../components/Todo/todoContent.vue'
import Hello1 from '../components/Hello/hello1.vue'
import Home from '../pages/Home.vue'
import Layout from '../pages/Layout.vue'
import DragList from '../pages/DragList.vue'
import Form from '../pages/Form/Form.vue'
import BaseForm from '../pages/Form/BaseForm.vue'
import ValidForm from '../pages/Form/VaildForm.vue'
import Maps from '../pages/Maps.vue'
import Charts from '../pages/Charts.vue'
import UploadFile from '../pages/UploadFile.vue'
import Table from '../pages/Tables/Table.vue'
import TableList from '../pages/Tables/TableList.vue'
import TableGet from '../pages/Tables/TableGet.vue'
import VueEditor from '../components/common/VueEditor.vue'
import PageTable from '../pages/Tables/PageTable.vue'
import VueTable from '../pages/Tables/VueTable.vue'
import Login from '../pages/login.vue'
import TableEdit from '../pages/Tables/TableEdit.vue'

Vue.use(Router)

export default new Router({
routes: [
{
path: '/',
redirect: '/login',
component: Home,
children: [
{
path: 'home',
name: 'Home',
component: Layout,
children: [
{
path: 'hello',
name: 'Home',
component: Hello1
},
{
path: 'todo',
name: 'TodoList',
component: Todo
},
{
path: 'draglist',
name: '拖拽',
component: DragList
},
{
path: 'form',
component: Form,
children: [
{path: 'baseform',
name: '基础表单',
component: BaseForm
},
{
path: 'validform',
name: '验证表单',
component: ValidForm
}
]
},
{
path: 'maps',
name: '地图',
component: Maps
},
{
path: 'charts',
name: '图表',
component: Charts
},
{
path: 'uploadfile',
name: '文件上传',
component: UploadFile
},
{
path: 'table',
component: Table,
children: [
{
path: 'tablelist',
name: '基础表格',
component: TableList
},{
path: 'tableget',
name: '基础表格',
component: TableGet
},{
path: 'tableedit',
name: '基础表格',
component: TableEdit
}
]
},
{
path: 'editor',
name: '富文本编辑器',
component: VueEditor
},
{
path: 'pagetable',
name: '带分页表格',
component: PageTable
},{
path: 'vuetable',
name: 'vue表格插件',
component: VueTable
}
]
},
{
path: 'login',
name: '登录',
component: Login
}
]
}
]
})

