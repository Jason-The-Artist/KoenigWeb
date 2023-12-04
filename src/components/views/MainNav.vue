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
              <h2 class="nav-module center-horizontal logo-green" @click="mainClick">{{main}}</h2>
              <div class="nav-space"></div>
              <h2 class="nav-module center-horizontal logo-green" @click="click1">{{leistungen}}</h2>
              <div class="nav-space"></div>
              <h2 class="nav-module center-horizontal logo-green" @click="click2">{{galerie}}</h2>
              <div class="nav-space"></div>
              <h2 class="nav-module center-horizontal logo-green" @click="click3">{{kontakt}}</h2>
            </div>
            <div class="nav-element center-horizontal nav-round-corner nav-info-element nav-info-width">
              <div>
                <h2 class="logo-grey nav-info-text">{{tel}}</h2>
                <h2 class="logo-grey nav-info-text">{{email}}</h2>
              </div>
            </div>
            <div class="white-background nav-height nav-right-space-width right">
              <img ref="navicon" class="nav-height nav-menu-image nav-menu-icon" @click="navIconClicked">
              <div style="width: 20px"></div>
            </div>
          </div>
          <div class="center-horizontal relative" style="width: 100%">
            <div ref="navbox" class="none nav-box absolute white-background round-corner center-horizontal">
              <div>
                <div class="center-horizontal">
                  <h3 class="decent-color">{{tel}}</h3>
                </div>
                <div class="center-horizontal">
                  <h3 class="decent-color">{{email}}</h3>
                </div>
                <h2 class="nav-box-module center-horizontal logo-green" @click="mainClick">{{main}}</h2>
                <div class="nav-space"></div>
                <h2 class="nav-box-module center-horizontal logo-green" @click="click1">{{leistungen}}</h2>
                <div class="nav-space"></div>
                <h2 class="nav-box-module center-horizontal logo-green" @click="click2">{{galerie}}</h2>
                <div class="nav-space"></div>
                <h2 class="nav-box-module center-horizontal logo-green" @click="click3">{{kontakt}}</h2>
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
import js from "../../assets/menu.json"

export default {
  name: "MainNav",

  data(){
    return{
      json: {},
      main: "",
      leistungen: "",
      galerie: "",
      kontakt: "",
      tel: "",
      email: "",
    }
  },

  created() {
    //this.json = js
  },

  mounted() {
    let box = this.$refs.navbox
    box.addEventListener('animationend', function() {
      box.className = box.className.replace("off", "none")
    });

    //fetch('http://testing.handwerker-akoenig.de/menu.json')
    fetch('https://handwerker-akoenig.de/menu.json')
        .then(response => response.json())
        .then(data => {
          this.json = data
          let base = this.json.menuTop.navText
          this.main = base.main
          this.leistungen = base.leistungen
          this.galerie = base.galerie
          this.kontakt = base.kontakt
          this.tel = this.json.menuTop.shortInfo.tel
          this.email = this.json.menuTop.shortInfo.email
        })
        .catch(error => {
          console.error('Error fetching pages data:', error);
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
      this.turnOff()
      this.$emit("hide", name);
    },

    navIconClicked(){
      if(this.$refs.navicon.className.includes("nav-cross-icon")){
        this.turnOff()
      }else{
        this.turnOn()
      }
    },
    turnOff(){
      this.$refs.navicon.className = this.$refs.navicon.className.replace("nav-cross-icon", "nav-menu-icon")
      this.$refs.navbox.className = this.$refs.navbox.className.replace("on", "off")
    },
    turnOn(){
      this.$refs.navicon.className = this.$refs.navicon.className.replace("nav-menu-icon", "nav-cross-icon")
      if(this.$refs.navbox.className.includes("none")){
        this.$refs.navbox.className = this.$refs.navbox.className.replace("none", "on")
      }else{
        this.$refs.navbox.className = this.$refs.navbox.className.replace("off", "on")
      }
    }
  }

}
</script>