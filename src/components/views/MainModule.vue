<template>
<div class="center-horizontal">
  <div class="main-box decent-red-background">
    <h1 class="logo-green">{{title}}</h1>
    <div class="content-module">
      <p class="content-text-size">{{content}}</p>
    </div>
    <button class="module-button pointer" @click="clicked">
      <h2>Weitere Infos</h2>
    </button>
  </div>
</div>
</template>

<script>

import router from "@/router";

export default {
  name: "MainModule",

  props: {
    title: String,
    content: String,
    src: String
  },

  data(){
    return{
    }
  },

  created() {
  },

  mounted() {

  },

  methods: {
    clicked(){
      this.$emit("hide");
      setTimeout(() => router.push("/leistung/" + this.src), 500)
    }
  }

}
</script>