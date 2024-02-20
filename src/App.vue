<template>
	<div class="container-fluid wraper">
		<h2>姓名：{{ person.name }}</h2>
		<h2>年龄：{{ person.age }}</h2>

		<button @click="person.age++">修改年龄</button>
		<h2>姓名：{{ person2.name }}</h2>
		<h2>年龄：{{ person2.age }}</h2>

		<button @click="person2.age++">修改年龄2</button>

		<hr>
		<h2>城市列表</h2>
		<ul>
			<li v-for="city in citys" :key="city.id">{{ city.name }}</li>
		</ul>
	</div>
</template>

<script setup lang="ts" name="App">
import { ref, toRaw, reactive, markRaw } from 'vue'
//toRaw仅对reactive对象有效
let person = reactive({ name: 'John', age: 25 })
console.log(person)
let person2 = toRaw(person)
console.log(person2)


/* markRaw 使对象永远不会变为响应式*/
let citys = markRaw([
	{ id: 'asdda01', name: '北京' },
	{ id: 'asdda02', name: '上海' },
	{ id: 'asdda03', name: '天津' },
	{ id: 'asdda04', name: '重庆' }
])
// 根据原始对象citys去创建响应式对象citys2 —— 创建失败，因为citys被markRaw标记了
let citys2 = reactive(citys)
</script>

<style></style>