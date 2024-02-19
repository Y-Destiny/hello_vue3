<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category>
        <template v-slot:s2>
          <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
          </ul>
        </template>
        <template v-slot:s1>
          <h2>热门游戏列表</h2>
        </template>
      </Category>

      <Category>
        <template v-slot:s1>
          <h2>今日美食城市</h2>
        </template>
        <template v-slot:s2>
          <img :src="imgUrl" alt="food" />
        </template>
      </Category>
      <!-- #s1即v-slot:s1简写-->
      <Category>
        <template #s1>
          <h2>今日影视推荐</h2>
        </template>
        <template #s2>
          <video :src="videoUrl" controls></video>
        </template>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import Category from './Category.vue'
import { nanoid } from 'nanoid';
import { ref } from 'vue';

let games = ref([
  { id: nanoid(), name: 'LOL' },
  { id: nanoid(), name: 'DNF' },
  { id: nanoid(), name: 'CF' }
])

let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
let videoUrl = ref('https://media.w3.org/2010/05/sintel/trailer.mp4')

</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}

.content {
  display: flex;
  justify-content: space-evenly;
}

img,
video {
  width: 100%;
}
</style>