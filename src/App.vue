<template>
	<div class="container-fluid wraper">
		<h2>sum：{{ sum }}</h2>
		<h2>sum2：{{ sum2 }}</h2>
		<button @click="changeSum">点我sum+1</button>
		<button @click="changeSum2">点我sum2+1</button>

		<h2>car.name：{{ car.name }}</h2>
		<h2>car.options.color：{{ car.options.color }}</h2>
		<button @click="car.name='宝马'">点我改变car.name</button>
		<button @click="car.options.color='blue'">点我改变car.options.color</button>
		<h2>{{ car2 }}</h2>
		<button @click="car2.name='奥迪'">点我改变car2.name</button>
		<button @click="car2.options.color='yellow'">点我改变car2.options.color</button>
	</div>
</template>

<script setup lang="ts" name="App">
import { ref,reactive, readonly, shallowReadonly } from 'vue'

let sum= ref(0)
let sum2=readonly(sum)

let car = reactive({name: '奔驰' ,options:{color:'red'}})

let car2 = shallowReadonly(car)

function changeSum() {
	sum.value++
}

function changeSum2() {
	sum2.value++
}


</script>

<style>
</style>