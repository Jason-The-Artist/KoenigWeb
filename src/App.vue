<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <div class="max-width">
      <router-view />
      <notifications/>
    </div>
  </main>
</template>

