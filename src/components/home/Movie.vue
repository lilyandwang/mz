<template>
     <div class="movie-box">
           <div class="btns">
               <router-link 
               v-for = "btn in btns"
               :key = "btn.id"
               :class = "[btn.className,{active:btn.className == showBtn}]" 
               :to = "{name:btn.className}"
               tag = "div"
               >
                {{btn.title}}
               </router-link>
              
           </div>
             <router-view 
             :movies = "movies"
             :_type = "showBtn">
             </router-view>
     </div>
</template>
<script>

export default {
    name : "Movie",
    data:function(){
        return{
            btns:[
                {id:1,className : "now-playing",title: " 正在热映"}, 
                {id:2,className : "coming-soon",title: " 正在上映"}
            ] ,
            showBtn:"now-playing",
            movies:[]
        } 
    },
    methods:{
        getMsg(){
                  this.$http.get("/mz/v4/api/film/"+this.showBtn,{
                        params:{
                              page:1,
                              count : 7
                        }
                  })
                  .then((res)=>{
                        this.movies = res.data.data.films;
                  })
            }
    },
    created(){
        this.getMsg();
    },
    beforeRouteUpdate (to, from, next) {
        this.showBtn = to.name;
        this.getMsg();
        next();
    }
}
</script>
<style scoped>
      .movie-box{
            padding: 0 15px;
            position: absolute;
            width: 100%;
            height: 100%;
      }
      .btns{
            display: flex;
            border-bottom: solid #fe6e00 1px;
      }

      .btns .now-playing,.btns .coming-soon{
            height: 46px;
            line-height: 46px;
            text-align: center;
            width: 50%;
            font-size: 16px;
      }
      .btns .active{
             border-bottom: solid #fe6e00 3px;
             color:#fe6e00;
      }

</style>


