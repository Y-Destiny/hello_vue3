<template>
    <div class="person">
        
    </div>

</template>

<!-- setup 语法糖 自动return-->
<!--使用setup插件可使用name指定组件名-->
<script lang="ts" setup name="Person">

    import {type PersonInter,type Persons} from '@/types'

    let person:PersonInter={
        id:"1",
        name:"张三",
        age:18
    }

    let personList:Array<PersonInter>=[
        {
            id:"1",
            name:"张三",
            age:18
        },
        {
            id:"2",
            name:"李四",
            age:20
        }
    ]

    let personList2:Persons=[
        {
            id:"1",
            name:"张三",
            age:18
        },
        {
            id:"2",
            name:"李四",
            age:20
        }
    ]

    
</script>