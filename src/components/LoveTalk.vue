<template>
    <div class="talk">
        <button @click="getLoveTalk">获取</button>
        <ul>
            <li v-for="talk in talkList" :key="talk.id">
                {{ talk.content }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="LoveTalk">

import { useTalkStore } from '@/store/loveTalk'
import { storeToRefs } from 'pinia';

const talkStore = useTalkStore();
const { talkList } = storeToRefs(talkStore);

async function getLoveTalk() {
    console.log('获取');

    //{data:{content:title}} 连续解构赋值并重命名title
    talkStore.getATalk();
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
