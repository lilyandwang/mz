<template>
    <div class="nav-list-container">
        <transition 
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft"
        >
            <ul class="nav-list-wrap" v-if = "isShow">
                <router-link class="nav-item"
                v-for="nav in navList"
                :key = "nav.id"
                :to= "nav.path"
                tag = "li"
                >
                    <span>{{nav.title}}</span>
                    <i class="fa fa-angle-right"></i>
                </router-link>
            </ul>
        </transition>

        <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        >
            <div class="mask" v-if = "isShow" @click="hidelist"></div>
        </transition>     
    </div>
</template>

<script>
export default {
    name : "NavList",
    props:["isShow"],
    data:function(){
        return {
            navList:[
                {id:1,title:"首页",path:'/'},
                {id:2,title:"影院",path:'/movie'},
                {id:3,title:"我的",path:'/my'}   
            ]
        }
    },
    methods:{
        hidelist:function(){
            this.$emit("hidelist");
        }
    }
}
</script>

<style scoped>
    .nav-list-container{
        width: 100%;
        height: 100%;
        position: absolute;
        /* z-index: 10; */
    }
    .nav-list-wrap{
        width: 66%;
        height: 100%;
        background: #282828;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
    }
    .nav-list-wrap li{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        border-bottom: 1px solid #222;
        box-shadow:0 1px 1px #363636;
    }
    .nav-list-wrap li span{
        display: block;
        height: 50px;
        line-height: 50px;
        color: #999;
    }
    .nav-list-wrap li i{
        font-size: 16px;
        color: #666;
    }
    .mask{
        width: 100%;
        height: 100%;
        background:rgba(0, 0, 0, .3);
        position: relative;
        z-index: 998;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
</style>


