<template>
    <li>
     
        <div class="img-box">
            <img :src="film.cover.origin" alt="">
        </div>
    
        <div class="content-detail">
            <div class="left">
                <div class="title">
                    {{film.name}}
                </div>
                <div class="audience" v-if = "cp == 'now-playing'">
                    {{film.cinemaCount}}家庭影院上映
                    {{film.watchCount}}人购票
                </div>
            </div>
            <div class="right">
                <span class="rate" v-if = "cp == 'now-playing'">
                    {{film.grade}}
                </span>
                <span class="premiere" v-else>
                    上映日期{{film.premiereAt | timetodate}}
                </span>
            </div>
        </div>
    
    </li>
</template>

<script>

export default {
    name: "ContentList",
    props:['film',"cp"]
}
</script>

<style scoped>
.content-list li {
    margin: 0 17px 17px 17px;
    background-color: #f9f9f9;
}
.content-detail{
    display: flex;
    justify-content: space-between;
}
.content-detail .left{
    height: 50px;
    padding-right: 0;
    padding-top: 20px;
    padding-left: 15px;
}

.audience{
    font-size: 8px;
    color: #9a9a9a;
    line-height: 15px;
}
.title{
    font-size: 12px;
    line-height: 15px;
    -webkit-user-select: text;
    user-select: text;
}
.content-detail .right, .premiere{
    color: #f78360;
    display: inline-block;
    line-height: 50px;
    margin-right: 15px;
    font-size: 18px;
}
.premiere{
    font-size: 12px;
}
</style>


