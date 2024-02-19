<template>
	<div class="grand-child">
		<h3>孙组件</h3>
		<h4>{{ $attrs }}</h4>
		<button @click="updateD(6)">d+6</button>
	</div>
</template>

<script setup lang="ts" name="GrandChild">
defineProps(['updateD'])
</script>

<style scoped>
.grand-child {
	margin-top: 20px;
	background-color: orange;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 0 10px black;
}
</style>