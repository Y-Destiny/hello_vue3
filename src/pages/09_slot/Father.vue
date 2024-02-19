<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category title="game">
        <ul>
          <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
      </Category>

      <Category title="food" >
        <img :src="imgUrl" alt="food" />
      </Category>
      <Category title="movie" >
        <video :src="videoUrl" controls></video>
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