<template>
    <div class="category">
        <h2>{{ title }}</h2>
        <slot></slot>
    </div>
</template>

<script setup lang="ts" namw="category">

defineProps(['title'])
</script>

<style scoped>
.category {
    background-color: skyblue;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    width: 200px;
    height: 300px;
}
h2 {
    background-color: orange;
    text-align: center;
}
</style>