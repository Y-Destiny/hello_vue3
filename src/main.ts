// 引入 createApp 函数用于创建应用实例
import { createApp } from "vue";
// 引入 App 组件
import App from "./App.vue";
// 引入路由
import router from "./router";

// 创建应用实例并挂载
const app=createApp(App)
//挂载路由
app.use(router)
//挂载
app.mount("#app");