import Vue from "vue";
import App from "./App";
import router from "./router.js";
// axios
import axios from "axios";
Vue.prototype.$http = axios;
// mint-ui
import {InfiniteScroll} from "mint-ui";
import "mint-ui/lib/style.css"
Vue.use(InfiniteScroll);

import "./stylesheets/reset.css";
import "animate.css";

Vue.filter("timetodate",(val)=>{
  var d = new Date(val);
  return (d.getMonth() + 1) + "月" +d.getDate() + "日";
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
