<style scoped>

.nav{
  height: 60px;
  background: white;
}

.gradient{
  height: 15px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent);
}

.icon{
  width: 30px;
  height: 30px;
}

.logo-area{
  font-size: 20px;
  font-weight: bold;
}

.nav-item{
  margin-left: 30px;
  text-decoration: none;
  color: #5c5c5c;
  transition: color 0.1s linear;
}

.nav-item:hover{
  color: #2562e9;
}

.hide-nav{
  display: flex;
}

.show-mobile{
  display: none;
}

.mobile-nav{
  height: 0;
  width: 100%;
  background: white;
  overflow: hidden;
  transition: height 0.5s ease;
}

.mobile-nav-height{
  height: 190px;
}

.mobile-item{
  width: 100%;
}

.nav-p{
  height: 50px;
}

@media (max-width: 940px) {
  .nav-item{
    margin-left: 10px;
    text-decoration: none;
    color: #5c5c5c;
    transition: color 0.1s linear;
  }

  .logo-area{
    font-size: 15px;
    font-weight: bold;
  }

  .icon{
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 800px) {
  .hide-nav{
    display: none;
  }

  .show-mobile{
    display: flex;
  }
}

</style>

<template>

  <div class="fixed full-width">
    <div class="nav center-horizontal">
      <div class="space-between max-height main-content-width center-vertical">
        <div class="logo-area center-vertical pointer" @click="onRoot">
          <img src="../../assets/inforge-icon.png" style="width: 30px">
          <div style="width: 10px"></div>
          Inforge Web Service
        </div>
        <div v-if="!nothing">
          <div class="center-vertical hide-nav">
            <a href="/#home" class="nav-item">Startseite</a>
            <a href="/#menu" class="nav-item">Leistungen</a>
            <a href="/#about" class="nav-item">Über uns</a>
            <a href="/#projects" class="nav-item">Projekte</a>
            <a href="/#contact" class="nav-item">Kontakt</a>
            <div v-if="!noButton" class="flex">
              <div style="width: 10px"></div>
              <UIButton title="Webseite bestellen" style="width: 170px" @click="onOrder"/>
            </div>
          </div>
          <div class="show-mobile" v-if="!nothing">
            <Icon size="30" class="decent-color pointer" @click="onMobileMenu">
              <Menu2/>
            </Icon>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-nav" :class="showMobileMenu ? 'mobile-nav-height' : ''">
      <p class="reset-margin max-width center-text"><a href="/#home" class="nav-item" @click="hideMobileNav">Startseite</a></p>
      <div style="height: 10px"></div>
      <p class="reset-margin max-width center-text"><a href="/#menu" class="nav-item" @click="hideMobileNav">Leistungen</a></p>
      <div style="height: 10px"></div>
      <p class="reset-margin max-width center-text"><a href="/#about" class="nav-item" @click="hideMobileNav">Über uns</a></p>
      <div style="height: 10px"></div>
      <p class="reset-margin max-width center-text"><a href="/#projects" class="nav-item" @click="hideMobileNav">Projekte</a></p>
      <div style="height: 10px"></div>
      <p class="reset-margin max-width center-text"><a href="/#contact" class="nav-item" @click="hideMobileNav">Kontakt</a></p>
      <div style="height: 10px"></div>
      <div class="center-horizontal">
        <UIButton title="Webseite bestellen" style="width: 170px" @click="onOrder"/>
      </div>
    </div>
    <div class="gradient max-width"></div>
  </div>

</template>


<script>

import {Menu2} from "@vicons/tabler"
import {Icon} from "@vicons/utils"
import UIButton from "@/components/views/UIButton.vue"

export default {
  name: "Nav",
  components: {UIButton, Icon, Menu2},
  data() {
    return {
      showMobileMenu: false,
    };
  },

  props: {
    noButton: Boolean,
    nothing: Boolean,
  },

  created() {
  },

  mounted() {

  },


  methods: {

    onRoot(){
      this.$router.push("/")
    },

    onOrder(){
      this.$router.push("/order")
    },

    onMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },

    hideMobileNav() {
      this.showMobileMenu = false
    }
  }
}
</script>