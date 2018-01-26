<template>
    <el-container>
        <el-header><Header></Header></el-header>
        <el-container>
            <el-aside width="200px"><Sidebar></Sidebar></el-aside>
            <el-main><Content></Content></el-main>
        </el-container>
    </el-container>
</template>

<script>
import Header from '../components/Layout/airtimeHeader'
import Sidebar from '../components/Layout/airtimeSidebar'
import Content from '../components/Layout/airtimeContent'
export default {
  components: {
    Header,
    Sidebar,
    Content
  }
}
</script>
