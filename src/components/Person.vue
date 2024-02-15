<template>
    <div class="person">
        <h1>情况1:监视[ref]定义[基本类型]数据</h1>
        <h2>sum:{{ sum }}</h2>
        <button @click="changeSum">sum+1</button>
    </div>
    <div class="person">
        <h1>情况2:监视[ref]定义[对象类型]数据</h1>
        <h2>姓名:{{ person.name }}</h2>
        <h2>年龄:{{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改</button>
    </div>
    <div class="person">
        <h1>情况3:监视[reactive]定义[对象类型]数据</h1>
        <h2>姓名:{{ person1.name }}</h2>
        <h2>年龄:{{ person1.age }}</h2>
        <button @click="changeName1">修改姓名</button>
        <button @click="changeAge1">修改年龄</button>
        <button @click="changePerson1">修改</button>
    </div>
    <div class="person">
        <h1>情况4:监视ref或reactive定义的【对象类型】数据中的某个属性</h1>
        <h2>姓名:{{ person2.name }}</h2>
        <h2>年龄:{{ person2.age }}</h2>
        <h2>汽车：{{ person2.car.c1 }}、{{ person2.car.c2 }}</h2>
        <button @click="changeName2">修改姓名</button>
        <button @click="changeAge2">修改年龄</button>
        <button @click="changeC1">修改c1</button>
        <button @click="changeC2">修改c2</button>
        <button @click="changeCar">修改汽车</button>
    </div>
    <div class="person">
        <h1>情况5:监视多个数据</h1>
        <h2>姓名:{{ person3.name }}</h2>
        <h2>年龄:{{ person3.age }}</h2>
        <h2>汽车：{{ person3.car.c1 }}、{{ person3.car.c2 }}</h2>
        <button @click="changeName3">修改姓名</button>
        <button @click="changeAge3">修改年龄</button>
        <button @click="changeC3">修改c1</button>
        <button @click="changeC4">修改c2</button>
        <button @click="changeCar1">修改汽车</button>
    </div>
</template>

<!-- setup 语法糖 自动return-->
<!--使用setup插件可使用name指定组件名-->
<script lang="ts" setup name="Person">
    import {ref, watch, reactive} from 'vue';


    //情况1:监视[ref]定义[基本类型]数据
    let sum=ref(0)

    function changeSum(){
            sum.value++
    }

    //监听 参数：(监视的数据，回调函数)
    //返回值：停止监听的函数
    const stopWatch = watch(sum,(newVal,oldVal)=>{
        console.log('sum:',newVal,oldVal)
        if(newVal>5){
            stopWatch()
        }
    })
    console.log('stopWatch:',stopWatch)  
    
    //情况2:监视[ref]定义[对象类型]数据
    let person=ref({name:'张三',age:18})

    function changeName(){
        person.value.name+='~'
    }

    function changeAge(){
        person.value.age++
    }   

    function changePerson(){
        person.value={name:'李四',age:20}
    }

    //监听 参数：(监视的数据，回调函数,{配置项deep,immediate...})
    /*监视`ref`定义的【对象类型】数据：
    *直接写数据名，监视的是对象的【地址值】，
    *若想监视对象内部的数据，要手动开启深度监视。
    */
    /**
     * 配置项：
     * deep：true 深度监视
     * ---执行changeAge和changePerson时，不会修改地址，newValue和oldValue一样的
     * immediate：true 立即执行回调函数(页面加载时执行一次回调函数)
     * ..... 
     */
    watch(person,(newVal,oldVal)=>{
        console.log('person:',newVal,oldVal)
    },{deep:true,immediate:true})

    
    //情况3:监视[reactive]定义[对象类型]数据
    let person1=reactive({name:'张三',age:18})
    
    function changeName1(){
        person1.name+='~'
    }

    function changeAge1(){
        person1.age++
    }

    function changePerson1(){
        //地址不变
        Object.assign(person1,{name:'李四',age:20})
    }

    //监听 参数：(监视的数据，回调函数)
    //默认是开启深度监视的
    watch(person1,(newVal,oldVal)=>{
        console.log('person1:',newVal,oldVal)
    })

    //情况4:监视ref或reactive定义的【对象类型】数据中的某个属性
    let person2=reactive({
        name:'张三',
        age:18,
        car:{
            c1:'奔驰',
            c2:'宝马'
        }
        })

    function changeName2(){
        person2.name+='~'
    }

    function changeAge2(){
        person2.age++
    }

    function changeC1(){
        person2.car.c1+='~'
    }

    function changeC2(){
        person2.car.c2+='~'
    }

    function changeCar(){
        person2.car={c1:'奥迪',c2:'大众'}
    }

    //监听 参数：(监视的数据，回调函数)
    //监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式
    watch(()=>person2.name,(newVal,oldVal)=>{
        console.log('person2.name:',newVal,oldVal)
    })
    // 监视响应式对象中的某个属性，且该属性是对象类型的，可以直接写，也能写函数，更推荐写函数
    // 直接写，可以监视单个属性，但修改整个对象时，不会触发回调函数
    // 修改整个对象监视的是原来的对象地址
    watch(()=>person2.car,(newVal,oldVal)=>{
        console.log('person2.car:',newVal,oldVal)
    },{deep:true})


    //情况5:监视多个数据
    let person3=reactive({
        name:'张三',
        age:18,
        car:{
            c1:'奔驰',
            c2:'宝马'
        }
    })

    function changeName3(){
        person3.name+='~'
    }

    function changeAge3(){
        person3.age++
    }

    function changeC3(){
        person3.car.c1+='~'
    }

    function changeC4(){
        person3.car.c2+='~'
    }

    function changeCar1(){
        person3.car={c1:'奥迪',c2:'大众'}
    }

    //监听 参数：(监视的数据，回调函数)
    //监视多个数据,数组中的内容都是监视的数据
    watch([()=>person3.name,()=>person3.age,person3.car],([newName,newAge,newCar],[oldName,oldAge,oldCar])=>{
        console.log('person3.name:',newName,oldName)
        console.log('person3.age:',newAge,oldAge)
        console.log('person3.car:',newCar,oldCar)
    })
</script>