// 创建一个路由器，并暴露

// 1. 导入 createRouter 方法
import { createRouter, createWebHistory } from "vue-router";

// 2. 导入组件
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import News from '@/views/News.vue'
import Detail from '@/views/Detial.vue'

//创建路由器
//vue3配置路由要选择工作模式
const router = createRouter({
    history: createWebHistory(),
    // 配置路由
    routes: [
        {
            name: "zhuye",
            path: "/home",
            component: Home
        },
        {
            name: "guanyu",
            path: "/about",
            component: About
        },
        {
            name: "xinwen",
            path: "/news",
            component: News,
            children: [
                {
                    name: 'xiangqing',
                    path: 'detail',
                    component: Detail,
                    //写法2，通过函数决定将路由收到的哪些参数作为props传递给组件
                    props(route){
                        return route.query
                    }
                    
                }
            ]
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})

export default router