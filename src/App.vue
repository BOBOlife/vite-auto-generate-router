<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <router-link class="item" to="/">首页</router-link>
    <router-link class="item" to="/about">about</router-link>
    <router-link class="item" to="/contact">contact</router-link>

  </div>
  <router-view></router-view>
</template>

<style scoped>
.item {
  display: inline-block;
  margin: 0 10px;
  color: black;
}
</style>
