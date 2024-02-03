<template>
    <Person/>
    <Car/>
</template>

<script lang="ts">
    //js或ts
    import Person from './components/Person.vue'
    import Car from './components/Car.vue'

    export default {
        name: 'App',//组件名
        components: {
            Person,
            Car
        }
    }
</script>

<style>

</style>