<template>
  <div class="grand-child">
    <h3>我是孙组件</h3>
    <h4>银子：{{ money }}万元</h4>
    <h4>车子:{{ car.brand }},价值{{ car.price }}</h4>
    <button @click="changeMoney(6)">money增加</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
import { inject } from 'vue'

let { money, changeMoney } = inject('moneyContext', { money: 0, changeMoney: (value: number) => { } })
//通过默认值辅助类型推断
let car = inject('car', { brand: '默认品牌', price: 0 })



</script>

<style scoped>
.grand-child {
  background-color: orange;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
}
</style>