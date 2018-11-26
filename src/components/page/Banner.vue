<template>
    <!-- Swiper -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"
            v-for = "banner in banners"
            :key = "banner.id"
            >
            <img :src = "banner.imageUrl" alt="">
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from "../../../node_modules/swiper/dist/js/swiper.min.js";
import "../../../node_modules/swiper/dist/css/swiper.min.css";

export default {
    name:"Banner",
    data:function(){
        return {
            banners:[
                {"id":711,"name":"新卖座卡公告","url":"https://m.maizuo.com/v4/?co=maizuo&showwxpaytitle=1  ","imageUrl":"https://pic.maizuo.com/h5PicUpload/062a965ab71db31fe0b7ad6f8c529935.jpg","weight":3},
                {"id":712,"name":"新卖座卡公告","url":"https://m.maizuo.com/v4/?co=maizuo&showwxpaytitle=1  ","imageUrl":"https://pic.maizuo.com/h5PicUpload/062a965ab71db31fe0b7ad6f8c529935.jpg","weight":3},
                {"id":713,"name":"新卖座卡公告","url":"https://m.maizuo.com/v4/?co=maizuo&showwxpaytitle=1  ","imageUrl":"https://pic.maizuo.com/h5PicUpload/062a965ab71db31fe0b7ad6f8c529935.jpg","weight":3},
                {"id":714,"name":"新卖座卡公告","url":"https://m.maizuo.com/v4/?co=maizuo&showwxpaytitle=1  ","imageUrl":"https://pic.maizuo.com/h5PicUpload/062a965ab71db31fe0b7ad6f8c529935.jpg","weight":3}
            ]
        }
    },
    mounted:function(){
        var swiper = new Swiper('.swiper-container',{
            pagination:{
                el:'.swiper-pagination',
            },
            autoplay:true,
            loop:true
        });
    }
}
</script>

<style scoped>
    img{
        width: 100%;
    }
    html, body {
      position: relative;
      height: 100%;
      z-index: 10;
    }
    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
</style>