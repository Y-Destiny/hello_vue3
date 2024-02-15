<template>
    <div class="person">
        <h2>person</h2>
        姓：<input type="text" v-model="firstName"><br>
        名：<input type="text" v-model="lastName"><br>
        全名：<span>{{ fullName }}</span><br>
        <button @click="changeName">修改名字</button>
    </div>
</template>

<!-- setup 语法糖 自动return-->
<!--使用setup插件可使用name指定组件名-->
<script lang="ts" setup name="Person">
    import { reactive,ref,computed } from 'vue';

    let firstName=ref('张')
    let lastName=ref('三')

    //计算属性

    /*
    //只读
    let fullName=computed(()=>{
        return firstName.value+'-'+lastName.value
    })
    */

    //读写
    let fullName=computed({
        get(){
            return firstName.value+'-'+lastName.value
        },
        set(val){
            console.log(val)
            let names=val.split('-')
            firstName.value=names[0]
            lastName.value=names[1]
        }
    })

    function changeName(){
        console.log(fullName.value)
        fullName.value='李-四'
    }


</script>