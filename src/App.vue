<template>
	<div class="container-fluid wraper">
		<h2>求和：{{ sum }}</h2>
		<h2>姓名：{{ person.name }}</h2>
		<h2>年龄：{{ person.age }}</h2>
		<h2>汽车：{{ car.brand }}</h2>
		<h2>价格：{{ car.price }}</h2>
		<h2>颜色：{{ car.Options.color }}</h2>
		<button @click="changeSum">点我sum+1</button>
		<button @click="changeAge">点我age+1</button>
		<button @click="changeName">点我改名</button>
		<button @click="changePerson">点我重置</button>
		<button @click="changeBrans">修改brand</button>
		<button @click="changePrice">修改price</button>
		<button @click="changeColor">修改颜色</button>
		<button @click="changeCar">修改汽车</button>
	</div>
</template>

<script setup lang="ts" name="App">
import { ref, reactive, shallowReactive, shallowRef } from 'vue'

let sum= shallowRef(0)
let person = shallowRef({
	name: 'John111',
	age: 30
})
let car= shallowReactive({
	brand: 'Benz',
	price: 1000000,
	Options: {
		color: 'red'
	}
})
function changeSum() {
	sum.value++
}

function changeAge() {
	person.value.age++
}

function changeName() {
	person.value.name = 'Tom'
}

function changePerson() {
	person.value = {
		name: 'John',
		age: 25
	}
}

function changeBrans() {
	car.brand = 'Audsasi'
}

function changePrice() {
	car.price +=1
}

function changeColor() {
	car.Options.color = 'blue'
}

function changeCar() {
	Object.assign(car , {
		brand: 'BMW',
		price: 3000000,
		Options: {
			color: 'black'
		}
	})
}


</script>

<style>
</style>