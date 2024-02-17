<template>
    <div class="person">
        <h1>中国</h1>
        <h2 ref="title2">北京</h2>
        <h3>海淀区</h3>
        <button @click="showLog">输出</button>
    </div>

</template>

<!-- setup 语法糖 自动return-->
<!--使用setup插件可使用name指定组件名-->
<script lang="ts" setup name="Person">
    import {ref, watch, reactive,watchEffect} from 'vue';

    import { defineExpose } from 'vue';
    //创建title2，用于存储ref标记的内容
    let title2 = ref();
    let a=ref(0)
    let b=ref(1)
    let c=ref(2)

    function showLog() {
        console.log(title2.value);
    }

    //暴露给父组件,否则无法访问
    defineExpose({a,b,c})
</script>