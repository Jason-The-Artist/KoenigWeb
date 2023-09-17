<template>
<div class="relative">
  <div class="absolute">
    <div class="outer-nav center-vertical">
      <div class="fullwidth relative">
        <div class="absolute">
          <div class="display-flex fullwidth center-vertical">
            <div class="white-background nav-height shadow" style="width: 5%"></div>
            <div class="nav-element nav-round-corner nav-logo-element shadow">
              <img src="../../assets/logo_transparent.png" class="nav-logo pointer" @click="mainClick">
            </div>
            <div class="full-center white-background nav-height nav-middle-width shadow" style=""></div>
            <div class="nav-element center-horizontal nav-round-corner nav-info-element nav-info-width shadow">
              <div>
                <h2 class="logo-grey nav-info-text">_</h2>
                <h2 class="logo-grey nav-info-text">_</h2>
              </div>
            </div>
            <div class="white-background nav-height nav-right-space-width right shadow"></div>
          </div>
          <div class="center-horizontal relative" style="width: 100%">
            <div ref="navbox" class="none nav-box absolute white-background round-corner center-horizontal"></div>
          </div>
        </div>




        <div class="absolute">
          <div class="display-flex fullwidth center-vertical">
            <div class="white-background nav-height" style="width: 5%"></div>
            <div class="nav-element nav-round-corner nav-logo-element">
              <img src="../../assets/logo_transparent.png" class="nav-logo pointer" @click="mainClick">
            </div>
            <div class="full-center white-background nav-height nav-middle-width" style="">
              <h2 class="nav-module center-horizontal logo-green" @click="mainClick">Startseite</h2>
              <div class="nav-space"></div>
              <h2 class="nav-module center-horizontal logo-green" @click="click1">Leistungen</h2>
              <div class="nav-space"></div>
              <h2 class="nav-module center-horizontal logo-green" @click="click2">Galerie</h2>
              <div class="nav-space"></div>
              <h2 class="nav-module center-horizontal logo-green" @click="click3">Kontakt</h2>
            </div>
            <div class="nav-element center-horizontal nav-round-corner nav-info-element nav-info-width">
              <div>
                <h2 class="logo-grey nav-info-text">Tel: 0000-00000</h2>
                <h2 class="logo-grey nav-info-text">Email: test.email@gmail.com</h2>
              </div>
            </div>
            <div class="white-background nav-height nav-right-space-width right">
              <img ref="navicon" class="nav-height nav-menu-image nav-menu-icon" @click="navIconClicked">
              <div style="width: 20px"></div>
            </div>
          </div>
          <div class="center-horizontal relative" style="width: 100%">
            <div class="nav-box absolute"></div>
            <div ref="navbox" class="none nav-box absolute white-background round-corner center-horizontal">
              <div>
                <div class="center-horizontal">
                  <h3 class="decent-color">Tel: 0000-00000</h3>
                </div>
                <div class="center-horizontal">
                  <h3 class="decent-color">Email: test.email@gmail.com</h3>
                </div>
                <h2 class="nav-box-module center-horizontal logo-green" @click="mainClick">Startseite</h2>
                <div class="nav-space"></div>
                <h2 class="nav-box-module center-horizontal logo-green" @click="click1">Leistungen</h2>
                <div class="nav-space"></div>
                <h2 class="nav-box-module center-horizontal logo-green" @click="click2">Galerie</h2>
                <div class="nav-space"></div>
                <h2 class="nav-box-module center-horizontal logo-green" @click="click3">Kontakt</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import router from "@/router";

export default {
  name: "MainNav",

  data(){
    return{
    }
  },

  created() {
  },

  mounted() {
    let box = this.$refs.navbox
    box.addEventListener('animationend', function() {
      box.className = box.className.replace("off", "none")
    });
  },

  methods: {
    click1(){
      setTimeout(() => router.push("/leistungen"), 500)
      this.emitHide("LeistungenPage")
    },

    click2(){
      setTimeout(() => router.push("/galerie"), 500)
      this.emitHide("GaleriePage")
    },

    click3(){
      setTimeout(() => router.push("/kontakt"), 500)
      this.emitHide("KontaktPage")
    },

    mainClick(){
      setTimeout(() => router.push("/"), 500)
      this.emitHide("MainPage")
    },

    emitHide(name){
      this.$emit("hide", name);
    },

    navIconClicked(){
      console.log("clicked")
      if(this.$refs.navicon.className.includes("nav-cross-icon")){
        this.$refs.navicon.className = this.$refs.navicon.className.replace("nav-cross-icon", "nav-menu-icon")
        this.$refs.navbox.className = this.$refs.navbox.className.replace("on", "off")
      }else{
        this.$refs.navicon.className = this.$refs.navicon.className.replace("nav-menu-icon", "nav-cross-icon")
        if(this.$refs.navbox.className.includes("none")){
          this.$refs.navbox.className = this.$refs.navbox.className.replace("none", "on")
        }else{
          this.$refs.navbox.className = this.$refs.navbox.className.replace("off", "on")
        }
      }
    }
  }

}
</script>