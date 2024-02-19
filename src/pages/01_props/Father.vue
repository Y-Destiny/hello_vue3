<template>
    <div class="father">
        <h3>父组件</h3>
		<h4>汽车：{{ car }}</h4>
		<h4 v-if='toy'>儿子的玩具：{{ toy }}</h4>
		<!--
			1. 通过属性传递数据,父传子
			2. 通过事件传递数据,子传父
		-->
		<Child :car="car" :sendToy="getToy"/>
    </div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue'
	import {ref} from 'vue'
	// 数据
	let car = ref('奔驰')

	let toy = ref('')


	function getToy(value: string){
		console.log('父',value)
		toy.value = value
	}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>