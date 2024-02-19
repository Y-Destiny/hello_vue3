<template>
    <div class="child">
        <h3>子组件</h3>
		<h4>玩具：{{ toy }}</h4>

    </div>
</template>

<script setup lang="ts" name="Child">
	import { ref ,onMounted} from "vue";
	// 数据
	let toy = ref('奥特曼')

	//声明事件
	//事件命名，推荐 kebab-case
	const emit = defineEmits(['send-toy'])

	onMounted(()=>{
		setTimeout(()=>{
			toy.value = '小汽车'
			// 触发事件
			emit('send-toy',toy.value)
		},2000)
	})
</script>

<style scoped>
	.child{
		margin-top: 10px;
		background-color: rgb(76, 209, 76);
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>