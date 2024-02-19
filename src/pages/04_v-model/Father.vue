<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>{{ username }}</h4>
    <!--v-mode用在html上-->
    <h4>v-mode用在html上</h4>
    <input type='text' v-model="username" />
    <!--v-model底层，动态value+input事件-->
    <h5>v-model底层，动态value+input事件</h5>
    <input type='text' :value="username" @input="username = (<HTMLInputElement>$event.target).value"/>
    <!--v-model用在组件标签-->
    <h4>v-model用在组件标签</h4>
    <YInput v-model="username"/><br>
    <!--底层写法，传递modelValue并绑定@update:modelValue事件-->
    <YInput :modelValue="username" @update:modelValue="username = $event"/>

    <!--vue 3.4 新写法-->
    <h4>vue 3.4 新写法</h4>
    <HInput v-model="username"/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import { ref } from "vue";
  import YInput from "./YInput.vue";
import HInput from "./HInput.vue";

  let username = ref("zhangshan");
  
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
