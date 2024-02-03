<template>
    <div class="person">
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <button @click="showTel">查看联系方式</button>
        <button @click="changeAge">增加年龄</button>
        <button @click="changeName">修改姓名</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Person',
        data() {
            return {
                name: '张三',
                age: 18,
                tel: '123456789'
            }
        },
        methods: {
            changeName(){
                this.name = '李四'
            },
            changeAge(){
                this.age++
            },
            showTel(){
                alert(this.tel)
            }
        },
    }
</script>