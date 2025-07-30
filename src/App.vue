<script>

import Header from "@/components/views/Header.vue";

export default {
  name: "App",
  components: {Header},

  created() {
  },

  mounted() {

  },
  data() {
    return {
    }
  },

  updated() {
  },

  methods: {

  }
}
</script>

<template>
  <notifications />

  <main>
      <router-view />
  </main>
</template>

<style scoped>
</style>
