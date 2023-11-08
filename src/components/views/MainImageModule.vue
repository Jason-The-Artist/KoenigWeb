<template>
<div class="center-horizontal">
  <div class="main-box decent-red-background" style="height: auto">
    <h1 class="logo-green">{{title}}</h1>
    <img :src="imgSrc" class="image-module">
    <p>{{teaser}}</p>
    <div class="center-horizontal">
      <button class="module-button pointer" @click="clicked">
        <h2>Mehr ansehen</h2>
      </button>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "MainImageModule",

  props: {
    title: String,
    thumb: String,
    id: String,
    teaser: String,
    isPopup: Boolean,
    src: String
  },

  data(){
    return{
      imgSrc: ""
    }
  },

  created() {
    this.setImg()
  },

  mounted() {

  },

  updated() {
    this.setImg()
  },

  methods: {
    clicked(){
      if(this.isPopup){
        this.$emit("clicked", this.id)
      }else{
        this.$router.push("/" + this.id + "/" + this.src)
      }
    },

    setImg(){
      this.imgSrc = document.baseURI
      if(this.imgSrc.includes("127.0.0.1") || this.imgSrc.includes("localhost")){
        this.imgSrc = this.imgSrc.split("/#/")[0] + "/src/assets/" + this.thumb
      }else{
        this.imgSrc = this.imgSrc.split("/#/")[0] + "/images/" + this.thumb
      }
    }
  }

}
</script>