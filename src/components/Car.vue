<template>
    <div class="car">
        <!--模板无需xxx.value,自动进行 xxx.value获取数据-->
        <h2>汽车:一辆{{ car.brand }},价值{{ car.price }}</h2>
        <button @click="changePrice">修改价格</button>
        <br>
        <h2>游戏:</h2>
        <ul>
            <li v-for="g in games" :key='g.id'>{{ g.name }}</li>
        </ul>
        <button @click="changeFristGame">修改</button>
        <br>
        <h2>test:{{ obj.a.b.c }}</h2>
        <button @click="changeObj">修改</button>
    </div>
</template>

<script lang="ts" setup name="Car">
    import { reactive,ref } from 'vue';

    //数据
    let car =ref({brand:'奔驰',price:100})

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

    function changePrice(){
        console.log(car)
        car.value.price+=10
        console.log(car)
    }

    function changeFristGame(){
        games.value[0].name='g4'
    }

    function changeObj(){
        obj.a.b.c=777
    }
</script>
