<template>
    <div class="talk">
        <button @click="getLoveTalk">获取</button>
        <ul>
            <li v-for="talk in talkStore.talkList" :key="talk.id">
                {{ talk.content }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="LoveTalk">
import { reactive } from 'vue';
import { nanoid } from 'nanoid';
import axios from 'axios';
import { useTalkStore } from '@/store/loveTalk'

const talkStore = useTalkStore();

let talkList = reactive([
    { id: "1", content: '今天天气不错1' },
    { id: "2", content: '今天天气不错2' },
    { id: "3", content: '今天天气不错3' },
]);

async function getLoveTalk() {
    console.log('获取');

    //{data:{content:title}} 连续解构赋值并重命名title

    let { data: { content } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')

    let obj = { id: nanoid(), content };
    talkStore.talkList.unshift(obj);
    console.log(obj);
}

</script>

<style scoped>
.talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>
