<template>
<div class="top-round-corner white-background main-text-box footer-pos">
  <div class="full-center">
    <div v-for="(dat) in social">
      <div>
        <a class="a-not-bg pointer" style="margin-right: 20px" :href="dat.url"><img class="footer-icon" :src="dat.icon"/></a>
      </div>
    </div>
    <div class="nav-space"></div>
    <h2 class="center-horizontal black pointer footer-text" @click="click3">{{impressum}}</h2>
  </div>
</div>
</template>

<script>

import router from "@/router";
import js from "../../assets/menu.json"

export default {
  name: "MainFooter",

  data(){
    return{
      json: {},
      social: [],
      impressum: ""
    }
  },

  created() {
    this.json = js
  },

  mounted() {
    fetch('http://testing.handwerker-akoenig.de/menu.json')
        .then(response => response.json())
        .then(data => {
          this.json = data
          this.impressum = this.json.menuBottom.impressum
          for(let i = 0; i < this.json.menuBottom.social.length; i++){
            let imgSrc = document.baseURI
            if(imgSrc.includes("127.0.0.1") || imgSrc.includes("localhost")){
              imgSrc = "../../src/assets/" + this.json.menuBottom.social[i].icon
            }else{
              imgSrc = imgSrc.split("/#/")[0] + "/images/icons/" + this.json.menuBottom.social[i].icon
            }

            let dat = {
              icon: imgSrc,
              url: this.json.menuBottom.social[i].url
            }
            this.social.push(dat)
          }

        })
        .catch(error => {
          console.error('Error fetching pages data:', error);
        });
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