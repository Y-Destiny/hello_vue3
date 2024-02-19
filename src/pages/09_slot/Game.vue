<template>
  <div class="game">
    <h2>游戏列表</h2>
    <slot :games="games"></slot>
  </div>
</template>

<script setup lang="ts" name="Game">
import { ref } from 'vue'
import { nanoid } from 'nanoid';
let games = ref([
  { id: nanoid(), name: 'LOL' },
  { id: nanoid(), name: 'DNF' },
  { id: nanoid(), name: 'CF' }
])
</script>

<style scoped>
.game {
  width: 200px;
  height: 300px;
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

h2 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
</style>