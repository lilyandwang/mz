import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/Home'
import Movie from './components/home/Movie'
import MovieContent from "./components/page/MovieContent"

Vue.use(Router)
 
export default new Router({
    mode:"history",
    routes: [
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path:"/movie",
            name:"movie",
            redirect:"/movie/now-playing",
            component:Movie,
            children:[
                {
                    path: 'coming-soon',
                    name: 'coming-soon',
                    component:MovieContent
                },
                {
                    path: 'now-playing',
                    name: 'now-playing',
                    component:MovieContent
                },
            ]
        },
        {
            path:"**",
            template:"<h1>找到不到页面 404 错误</h1>"
        }
    ]
})
