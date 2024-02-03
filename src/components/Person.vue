<template>
    <div class="person">
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <button @click="showTel">查看联系方式</button>
        <button @click="changeAge">增加年龄</button>
        <button @click="changeName">修改姓名</button>
    </div>
    <div>
        <h1>a:{{ a }}</h1>
        <h1>c:{{ c }}</h1>
        <button @click="b">test</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Person',
        beforeCreate(){
            console.log("beforeCreate")
        },
        //data和methods可与setup同时存在
        //setup生命周期早，data可读取setup数据，setup不可读取data
        data(){
            return {
                a:100,
                c:this.name
            }
        },
        methods:{
            b(){
                console.log('b')
            }
        },
        setup(){
            console.log("setup")
            //setup函数中this指向undefined,vue3中弱化this

            //数据
            let name = '张三'//name不是响应式的
            let age = 18//age不是响应式的
            let tel = '123456789'

            //方法
            function showTel(){
                alert(tel)
            }

            //这样修改页面不改变
            function changeAge(){
                console.log(age)
                age++
                console.log(age)
            }

            function changeName(){
                console.log(name)
                name = '李四'
                console.log(name)
            }

            //将数据和方法暴露出去，模板中才可以直接使用
            return {name,age,showTel,changeAge,changeName}

            //return function(){return 'hh'}
            //return ()=>{return 'hh'}
        }
    }
</script>