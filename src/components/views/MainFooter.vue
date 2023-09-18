<template>
<div class="top-round-corner white-background main-text-box footer-pos">
  <div class="center-horizontal">
    <h2 class="center-horizontal black pointer footer-text" @click="click1">AGB</h2>
    <div class="nav-space"></div>
    <h2 class="center-horizontal black pointer footer-text" @click="click2">Datenschutzerklärung</h2>
    <div class="nav-space"></div>
    <h2 class="center-horizontal black pointer footer-text" @click="click3">Impressum</h2>
  </div>
</div>
</template>

<script>

import router from "@/router";

export default {
  name: "MainFooter",

  data(){
    return{
    }
  },

  created() {

  },

  mounted() {

  },

  methods: {
    click1(){
      setTimeout(() => router.push("/agb"), 500)
      this.emitHide("AGBPage")
    },

    click2(){
      setTimeout(() => router.push("/datenschutz"), 500)
      this.emitHide("DatenschutzPage")
    },

    click3(){
      setTimeout(() => router.push("/impressum"), 500)
      this.emitHide("ImpressumPage")
    },

    emitHide(name){
      this.$emit("hide", name);
    },
  }

}
</script>