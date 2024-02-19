<template>
    <div class="father">
	    <h3>父组件</h3>
		<h4>{{ str }}</h4>
		<button @click="test(1,2,$event)">test1</button>
		<button @click="str = '哈哈'">test2</button>

		<h4 v-if="toy">{{ toy }}</h4>
		<!--@sendToy自定义事件,getToy回调-->
    	<Child @send-toy="getToy"/>

    </div>
</template>

<script setup lang="ts" name="Father">
    import Child from './Child.vue'
	import { ref } from "vue";

	let str=ref('你好')
	let toy = ref('')
	// $event事件对象
	function test(a:number,b:number,e:Event){
		console.log(a,b,e);
	}

	// 接收事件
	function getToy(value:string){
		toy.value = value
	}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
    border-radius: 10px;
	}
	.father button{
		margin-right: 5px;
	}
</style>