<template>
    <ul class="coming-content"
    v-infinite-scroll = "loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="1"
    infinite-scroll-immediate-check="true"
    >
        <li v-for = "movie in moreMovies" :key = "movie.id">
           <div class="film-item">
               <div class="film-item-img">
                   <img :src= "movie.poster.origin" alt="">
               </div>
               <div class="desc" v-if = "_type == 'coming-soon'">
                   <div class="film-name">
                       <p>{{movie.name}}</p>
                       <p><span></span><i class="fa fa-angle-right"></i></p>
                   </div>
                   <div class="film-intro">
                       {{movie.intro}}
                   </div>
                   <div class="film-counts">
                       {{movie.premiereAt | timetodate}}上映
                   </div>
               </div>
               <div class="desc" v-else>
                   <div class="film-name">
                       <p>{{movie.name}}</p>
                       <p><span>{{movie.grade}}</span><i class="fa fa-angle-right"></i></p>
                   </div>
                   <div class="film-intro">
                       {{movie.intro}}
                   </div>
                   <div class="film-counts">
                       {{movie.cinemaCount}}家影院上映 {{movie.scheduleCount}}人购票
                   </div>
               </div>
           </div>
        </li>
    </ul> 
</template>

<script>
import {Toast} from "mint-ui"
export default {
    name:"MovieContent",
    props:["movies","_type"],
    data:function(){
        return {
            loading:false,
            myMovies:[],
            page:1
        }
    },
    computed:{
        moreMovies:{
            get:function(){
                this.myMovies = this.movies;
                return  this.myMovies;
                console.log(this.myMovies)
            },
            set:function(val){
                for(var i = 0 ; i < val.length;i++){
                    this.myMovies.push(val[i]);
                }
            }
        }
    },
    methods:{
        loadMore(){
            this.loading = true;
            if(this.page <= 5){
                this.page ++;
            }else{
                Toast({
                    message:"我是有底线的",
                    position:"center",
                    duration:5000,
                    iconClass:"fa fa-battery-empty"
                })
                return false;
            }
            // console.log(this._type);
            this.$http.get("/mz/v4/api/film/"+this._type,{
                params:{
                    page:this.page,
                    count:7
                }
            })
            .then((res)=>{
                this.moreMovies = res.data.data.films;
                //  console.log(res,this.moreMovies);
                this.loading = false;
            })
         }
     },
     //清除数据
     beforeRouteLeave(to, from, next) {
           this.$data.myMovies.length = 0;
           this.$data.page = 1;
           this.$data.loading = false;
           console.log(this.$data)
           next();
      }
}
</script>

<style scoped>
.coming-content{
    background: #f9f9f9;
    width: 100%;
    height: 100%;
}
.film-item{
    width: 100%;
    padding: 20px 0;
    border-bottom: dashed 1px #c9c9c9;
    cursor: pointer;
}
.film-item-img{
    width: 60px;
    float: left;
    overflow: hidden;
    margin-top: 10px;
    margin-left: 20px;
}
.film-item-img img{
    width: 100%;
}
.desc{
    padding-left: 15px;
    display: inline-block;
    width: 75%;
    margin-top: 7px;
}
.film-name p:nth-child(1){
    font-size: 16px;
    line-height: 32px;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    float: left;
} 
.film-name p:nth-child(2){
    float: right;
    line-height: 32px;
    font-size: 16px;
} 
.film-name p:nth-child(2) span{
    color: #fc7103;
}
.film-name p:nth-child(2) i{
    color: #c6c6c6;
    margin-left: 5px;
}
.film-intro{
    height: 24px;
    line-height: 24px;
    color: #8e8e8e;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    display: inline-block;
}
.film-counts{
    line-height: 24px;
    color: #ffb375;
    font-size: 12px;
}
</style>


