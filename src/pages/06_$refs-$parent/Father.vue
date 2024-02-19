<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>房产：{{ house }}</h4>
		<button @click="changeToy">修改c1玩具</button>
		<button @click="c2.book++">修改c2书籍</button>
		<button @click="getAllChild($refs)">孩子书增加</button>
		<Child1 ref="c1"/>
		<Child2 ref="c2"/>
	</div>
</template>

<script setup lang="ts" name="Father">
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
import { ref, reactive } from "vue";
// 数据
let house = ref(4)
let c1=ref()
let c2=ref()

function changeToy(){
	c1.value.toy='变形金刚'
}
function getAllChild(refs:any){
	console.log(refs)
	for (let key in refs) {
		console.log(refs[key])
		refs[key].book += 2
	}
}

defineExpose({house})
</script>

<style scoped>
.father {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
}

.father button {
	margin-bottom: 10px;
	margin-left: 10px;
}
</style>

