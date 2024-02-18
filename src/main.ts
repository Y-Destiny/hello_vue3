// 引入 createApp 函数用于创建应用实例
import { createApp } from "vue";
// 引入 App 组件
import App from "./App.vue";
// 引入路由
import router from "./router";

//引入pinia
import { createPinia } from "pinia";

// 创建应用实例并挂载
const app=createApp(App)

//创建pinia
const pinia = createPinia()
//挂载pinia
app.use(pinia)

//挂载路由
app.use(router)
//挂载
app.mount("#app");