<template>
    <Person ref="person"/>
    <Car/>
    <button @click="show">显示person</button>
</template>

<script lang="ts" setup name="App">
    //js或ts
    import Person from './components/Person.vue'
    import Car from './components/Car.vue'


    import {ref} from 'vue'

    let person=ref()

    function show(){
        console.log(person.value)
    }
</script>

<style>

</style>