<template>
 <div class="content-box">
    <ul class="content-list">
        <content-list class="card" 
        v-for = "film in films" 
        :key = "film.id"
        :film = "film"
        :cp = "componentType">
        </content-list>
    </ul>
    <div class="more-button">更多{{btnType}}电影</div>
    <div class="dividing-line">
        <div class="upcoming">即将上映</div>
    </div>
    
        <!-- <div class="more-button" v-if = "componentType == 'now-playing'">更多热卖电影</div>
    
    <div class="dividing-line">
        <div class="upcoming">即将上映</div>
    </div>
    
        <div class="more-button" v-if = "componentType == 'coming-soon'">更多即将上映电影</div> -->
    
 </div>
</template>

<script>
import axios from "axios"
import ContentList from "./ContentList"
export default {
    name: "Content",
    data:function(){
        return {
            films:[]
        }
    },
    props:["componentType","count"],
    components:{
        "content-list":ContentList
    },
    methods:{
        getfilms(){
            axios.get("/mz/v4/api/film/"+this.componentType,{
                params:{
                    __t:Date.now(),
                    page:1,
                    count:this.count
                }
            }).then((res)=>{
                this.films = res.data.data.films;
            })
        }
    },
    created() {
        this.getfilms();
    },
    computed:{
        btnType:{
            get:function(){
                return this.componentType == "now-playing" ? "热卖" : "即将上映"
            }
        }
    }

}
</script>

<style scoped>
 .content-box{
            background-color: #f9f9f9;
            overflow: hidden;
}
.content-list{
    padding-top: 18px;
}
.more-button{
    width: 160px;
    height: 30px;
    border: 1px solid #aaa;
    border-radius: 15px;
    margin: 10px auto 30px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: #616161;
    cursor: pointer;      
}
.dividing-line {
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #a8a8a8;}
.upcoming {
    width: 65px;
    height: 20px;
    margin: 0 auto;
    margin-bottom: -10px;
    border-radius: 5px;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    color: #eee;
    background-color: #a7a7a7;}
</style>


