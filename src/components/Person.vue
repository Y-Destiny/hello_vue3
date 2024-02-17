<template>
    <div class="person">
        <h2>当前求和为：{{ sum }},10倍:{{ bigSum }}</h2>
        <button @click="add">点我加一</button>
        <hr>
        <img v-for="(dog, index) in dogList" :src="dog" :key="index"><br>
        <button @click="getDog">获取狗狗图片</button>
    </div>
</template>

<!-- setup 语法糖 自动return-->
<!--使用setup插件可使用name指定组件名-->
<script lang="ts" setup name="Person">
import useSum from '@/hooks/useSum'
import useDog from '@/hooks/useDog'

const { sum, bigSum, add } = useSum()
const { dogList, getDog } = useDog()

</script>

<style scoped>
.person {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
}

img {
    height: 200px;
    margin: 10px;
}
</style>