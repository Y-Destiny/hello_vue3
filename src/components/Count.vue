<template>
    <div class="count">
        <h2>当前求和为:{{ sum }}</h2>
        <h2>在{{ school }} 学习 {{ subject }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">+</button>
        <button @click="sub">-</button>
    </div>
</template>

<script lang="ts" setup name="Count">
import { ref } from 'vue';
import { useCountStore } from '@/store/count'
import { storeToRefs } from 'pinia';


const countStore = useCountStore();
const { sum, school, subject } = storeToRefs(countStore);

let n = ref(1);

function add() {
    //第三种修改,actions
    countStore.increment(n.value);
}

function sub() {
    countStore.sum -= n.value;
}

</script>

<style scoped>
.count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

select,
button {
    margin: 0 5px;
    height: 25px;
}
</style>
