<template>
    <div class="home-page">
        <app-banner/>
        <app-content component-type="now-playing" count="5"/>
        <app-content component-type="coming-soon" count="3"/>
    </div>
</template>

<script>
import Banner from '../page/Banner'
import Content from '../page/Content'

export default {
    name:"Home",
    components:{
        "app-banner":Banner,
        "app-content":Content
    },
}
</script>

<style scoped>

</style>


