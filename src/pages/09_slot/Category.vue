<template>
    <div class="category">
        <slot name="s1"><br>默认内容</slot>
        <slot name="s2"><br>默认内容</slot>
    </div>
</template>

<script setup lang="ts" namw="category">

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