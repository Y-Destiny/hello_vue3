<template>
    <input type="text" v-model="username"/>
    <input type="text" v-model="username"/>
</template>

<script setup lang="ts" name="YInput">

const username =  defineModel()
</script>

<style scoped>
input {
    border: 2px solid black;
    background-image: linear-gradient(45deg, red, yellow, green);
    height: 30px;
    font-size: 20px;
    color: white;
}
</style>