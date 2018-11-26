<template>
    <div   @click = "isShow = !isShow">
        <div class="nav-box">
            <div class="left">
                <i class="fa fa-bars"></i>
                <span>卖座电影</span>
            </div>
            <div class="right">
                <span>北京<i class="fa fa-angle-down"></i></span>
                <i class="fa fa-user-o"></i>
            </div>
        </div>
        <nav-list :is-show = "isShow" @hidelist = "hidelist"></nav-list>
    </div>
</template>

<script>
import NavList from './NavList';
export default {
    name:"Nav",
    components:{
        "nav-list":NavList
    },
    data:function(){
        return{
            isShow:false
        }
    },
    methods:{
        hidelist:function(){
            this.isShow = false;
        }
    }
}
</script>

<style scoped>
    .nav-box{
        width: 100%;
        height: 50px;
        display: flex;
        background: #282828;
        /* position: fixed; */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        justify-content: space-between;
    }
    .nav-box .left{
        float: left;
    }
    .nav-box .right{
        float: right;
    }
    .nav-box .left i{
        float: left;
        width: 47px;
        height: 50px;
        line-height:50px;
        text-align: center;
        border-right: 1px solid #222;
        box-shadow: 1px 0 1px #363636;
    }
    .nav-box .left span{
        float: left;
        width: 100px;
        margin-left: 10px;
        color: #efefef;
    }
    .nav-box .right i{
        float: right;
        margin-right: 10px;
    }
    .nav-box .right span{
        float: left;
        width: 50px;
        margin-right: 14px;
        text-align: center;
        color: #999;
    }
    .nav-box .left i,.nav-box .right i{
        height: 50px;
        line-height: 50px;
        color: #999;
        font-size: 15px;
    }
    .nav-box .left span,.nav-box .right span{
        display: block;
        height: 50px;
        line-height: 50px;
        font-size: 15px;
    }
</style>


