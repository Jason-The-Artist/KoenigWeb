<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>

  <MainPage/>
  <main>
    <div class="container my-3">
      <router-view />
      <notifications/>
    </div>
  </main>
</template>

