<template>
    <div class="person">
        <!--模板无需xxx.value,自动进行 xxx.value获取数据-->
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>地址：{{ address }}</h2>
        <button @click="changeAge">增加年龄</button>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAddress">修改地址</button>
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
    import { reactive,toRefs,toRef } from 'vue';

    let person=reactive({
        name:'张三',
        age:18,
        address:'北京',
        tel:'1234567890'
    })

    //作用：将一个响应式对象中的每一个属性，转换为`ref`对象。
    //备注：`toRefs`与`toRef`功能一致，但`toRefs`可以批量转换。

     // 通过toRefs将person对象中的n个属性批量取出，且依然保持响应式的能力
    let {name,age}=toRefs(person)

    // 通过toRef将person对象中的gender属性取出，且依然保持响应式的能力
    let address = toRef(person,'address')

    function changeAge(){
        age.value+=1
    }

    function changeName(){
        name.value='李四'
    }

    function changeAddress(){
        address.value='上海'
    }

</script>