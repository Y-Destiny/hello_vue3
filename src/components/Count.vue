<template>
    <div class="count">
        <h2>当前求和为:{{ countStore.sum }}</h2>
        <h2>在{{ countStore.school }} 学习 {{ countStore.subject }}</h2>
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


const countStore = useCountStore();
console.log(countStore);
console.log(countStore.$state);
//以下都可以拿到state数据
console.log(countStore.$state.sum);
console.log(countStore.sum);

let n = ref(1);

function add() {
    //第一种修改，直接进行修改
    //countStore.sum += n.value;

    //第二种修改，批量修改
    /*countStore.$patch({
        sum:countStore.sum+n.value,
        school:'北京大学',
        subject:'计算机'
    })*/

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
