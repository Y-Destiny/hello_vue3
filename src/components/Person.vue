<template>
    <div class="person">
        <!--模板无需xxx.value,自动进行 xxx.value获取数据-->
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <h2>地址：{{ address }}</h2>
        <button @click="showTel">查看联系方式</button>
        <button @click="changeAge">增加年龄</button>
        <button @click="changeName">修改姓名</button>
    </div>
</template>

<!--
<script lang="ts">
    export default {
        name: 'Person',
        beforeCreate(){
            console.log("beforeCreate")
        },
    }
</script>
-->

<!-- setup 语法糖 自动return-->
<!--使用setup插件可使用name指定组件名-->
<script lang="ts" setup name="Person">
    console.log("setup")
    //setup函数中this指向undefined,vue3中弱化this

    //ref 创建：基本类型的响应式数据
    import {ref} from 'vue'

    //数据
    //使用ref()包裹数据变为响应式
    let name = ref('张三')
    let age = ref(18)
    let tel = '123456789'
    let address='beijing'
    //方法
    function showTel(){
        alert(tel)
    }
    
    //这样修改页面不改变
    function changeAge(){
        console.log(age)
        age.value++
        console.log(age)
    }
    
    function changeName(){
        console.log(name)
        name.value = '李四'
        console.log(name)
    }
</script>