<template>
<div>
<router-view></router-view>
<AirTable 
:defaultConfig="defaultConfig" 
:tableData="tableData"
:columData="columData"
:rowClick="rowClick"></AirTable>
</div>
</template>

<script>
import AirTable from '../../components/common/AirTable'
export default {
  components: {AirTable},
  data(){
    return{
      defaultConfig:{
        isStripe:true,
        isBorder:true,
        tableHeight:'auto',
        isType:'selection',
        isFixed:true
      },
      tableData:[{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            number: '1111111'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            number: '1111111'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            number: '1111111'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            number: '1111111'
          }],
      columData:[{
        name:'日期',
        key:'date',
        isSortable:true,
        isFixed:true,
        width:'300'
      },{
        name:'姓名',
        key:'name'
      },{
        name:'地址',
        key:'address'
      },{
        name:'编号',
        key:'number'
      }],
    }
  },
  methods:{
        rowClick:function(fn){
          console.log(fn);
        }
      }
}
</script>
