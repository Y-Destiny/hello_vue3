// 创建一个路由器，并暴露

// 1. 导入 createRouter 方法
import { createRouter,createWebHistory } from "vue-router";

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
            name:"zhuye",
            path: "/home",
            component: Home
        },
        {
            name:"guanyu",
            path: "/about",
            component: About
        },
        {
            name:"xinwen",
            path: "/news",
            component: News,
            children:[
                {
                    name:"xiangqing",
                    path: "/news/detail",
                    component: Detail
                }
            ]
        }
    ]
})

export default router