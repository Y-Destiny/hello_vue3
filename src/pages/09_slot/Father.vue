<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Game>
        <template #default="{games}">
          <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
          </ul>
        </template>
      </Game>

      <Game>
        <template v-slot="{games}">
          <ol>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
          </ol>
        </template>
      </Game>

      <Game>
        <template v-slot="{games}">
          <h4 v-for="game in games" :key="game.id">{{ game.name }}</h4>
        </template>
      </Game>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import Game from './Game.vue'

import { ref } from 'vue';


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

h2 {
    background-color: orange;
    text-align: center;
}
</style>