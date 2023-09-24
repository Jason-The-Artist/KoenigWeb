<template>
<div class="center-horizontal">
  <div class="main-box decent-red-background pointer" style="height: auto">
    <h1 class="logo-green">{{title}}</h1>
    <img :src="imgSrc" class="image-module">
  </div>
</div>
</template>

<script>

export default {
  name: "MainImageModule",

  props: {
    title: String,
    thumb: "sample1.png"
  },

  data(){
    return{
      imgSrc: document.baseURI
    }
  },

  created() {
    console.log(this.imgSrc)
    this.imgSrc = this.imgSrc.split("/#/")[0] + "/images/" + this.thumb
  },

  mounted() {

  },

  methods: {

  }

}
</script>