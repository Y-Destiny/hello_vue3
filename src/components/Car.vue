<template>
    <div class="car">
        <!--模板无需xxx.value,自动进行 xxx.value获取数据-->
        <h2>汽车:一辆{{ car.brand }},价值{{ car.price }}</h2>
        <button @click="changePrice">修改价格</button>
        <button @click="changeCar">修改汽车</button>
        <br>
        <h2>游戏:</h2>
        <ul>
            <li v-for="g in games" :key='g.id'>{{ g.name }}</li>
        </ul>
        <button @click="changeFristGame">修改</button>
        <br>
        <h2>test:{{ obj.a.b.c }}</h2>
        <button @click="changeObj">修改</button>
        <br>
        <h2>sum:{{ sum }}</h2>
        <button @click="changeSum">sum+1</button>
    </div>
</template>

<script lang="ts" setup name="Car">
    import { reactive,ref } from 'vue';

    //数据
    let car =reactive({brand:'奔驰',price:100})

    let games=ref([
        {id:'game1',name:'g1'},
        {id:'game2',name:'g2'},
        {id:'game3',name:'g3'}
    ])

    let obj=reactive({
        a:{
            b:{
                c:666
            }
        }
    })

    //可以使用`volar`插件自动添加`.value`
    let sum=ref(0)

    function changePrice(){
        console.log(car)
        car.price+=10
        console.log(car)
    }

    //`reactive`重新分配一个新对象，会**失去**响应式（可以使用`Object.assign`去整体替换）。
    function changeCar(){
        Object.assign(car,{brand:'宝马',price:200})
        //car.value={brand:'宝马',price:200} 故土的刺客不更新
        //car.value={brand:'宝马',price:200} 故土的刺客不更新
        //car.value=reactive{brand:'宝马',price:200} 不更新
    }

    function changeFristGame(){
        games.value[0].name='g4'
    }

    function changeObj(){
        obj.a.b.c=777
    }

    function changeSum(){
        sum.value++
    }
</script>
