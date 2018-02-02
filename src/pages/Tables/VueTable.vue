<template>
    <server-datasource
        :source="userdata"
        :columns="columns"
        :limits="limits"
        :total="totalItem"
        @change="changeLimit"
        @searching="searchItem"
    ></server-datasource>
</template>

<script>
import axios from 'axios'
import '../../../static/datasource.css'
export default {
    data(){
        return {
            alluserdata:'',
            columns:[
                {
                    name:'ID',
                    key: 'id'
                },
                {
                    name:'城市',
                    key: 'city'
                },
                {
                    name:'国家',
                    key:'county'
                }
            ],
            limits:[10,15,20],
            userdata:''
        }
    },
    computed:{
        totalItem(){
            return Number(this.alluserdata.length);
        }
    },
    methods:{
        changeLimit(opt){
            this.userdata = '';
            if(opt.page !== 1){
                this.userdata = this.alluserdata.slice(opt.perpage*(opt.page-1),opt.perpage*opt.page);
            }else{
                this.userdata = this.alluserdata.slice(0,opt.perpage);
            }
        },
        searchItem(val){
            if(!val){
                return;
            };
            this.userdata = this.alluserdata.filter(item => (item.city.indexOf(val)!== -1));
        }
    },
    beforeMount(){
        var self = this;
        axios.get('api/address')
        .then(function(res){
            self.alluserdata = res.data;
            self.userdata = res.data.slice(0,10);
        });
    }
}
</script>
