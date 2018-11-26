<template>
    <main>
        <app-nav/>
        <router-view></router-view>
    </main>
</template>

<script>
import Vue from "vue"
import Nav from './components/page/Nav'


export default {
    name:"App",
    components:{
        "app-nav":Nav
    }
}
</script>

<style scoped>
    main{
        height: 100%;
        background: #ebebeb;
    }
</style>
