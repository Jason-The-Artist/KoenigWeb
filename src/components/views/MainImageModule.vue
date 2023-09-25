<template>
<div class="center-horizontal pointer" @click="clicked">
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
    thumb: String,
    id: Number
  },

  data(){
    return{
      imgSrc: document.baseURI
    }
  },

  created() {
    if(this.imgSrc.includes("127.0.0.1")){
      this.imgSrc = this.imgSrc.split("/#/")[0] + "/src/assets/" + this.thumb
    }else{
      this.imgSrc = this.imgSrc.split("/#/")[0] + "/images/" + this.thumb
    }
  },

  mounted() {

  },

  methods: {
    clicked(){
      this.$emit("clicked", this.id)
    }
  }

}
</script>