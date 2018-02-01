<template>
    <div>
        <ex-table :data="data" show-pagination :search-method="handleSearch" ref="table">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
        </ex-table>
        <el-button @click="$refs.table.setCurrentPage(1)">回到首页</el-button>
    </div>
</template>
<script>
import ExTable from '../../utils/table';
export default {
    components: { ExTable },
    data() {
        return {
            data: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
                }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
                }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    methods: {
        handleSearch(pagination, { currentPage, pageSize }) {
            this.fetchRemoteData(currentPage, pageSize)
        },
        fetchRemoteData(currentPage, pageSize) {
            //currentPage：当前页， pageSize: 每页最大条目数， 用于服务端分页
            //假设http请求数据，结果返回｛data_list: [...], total: ..｝
            //设置表格数据
            this.data = request.data_list;
            //设置分页总数
            const pagination = this.$refs.table.pagination;
            pagination .total = request.total;
        },
    },
    mounted() {
        this.$refs.table.fetchData();
    }
}
</script>