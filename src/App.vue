<template>
    <Person a="哈哈" b="ss" :list="personList"/>
</template>

<script lang="ts" setup name="App">
    //js或ts
    import Person from './components/Person.vue'

    import {reactive} from 'vue'
    import {type PersonInter,type Persons} from '@/types'

    let personList=reactive<Persons>([
        {
            id:"1",
            name:"张三",
            age:18,
            x:0
        },
        {
            id:"2",
            name:"李四",
            age:20
        }
    ])
</script>

<style>

</style>