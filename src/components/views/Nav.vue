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
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 5px;
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.nav-item-not-selected{
  transition: background-color 0.2s linear;
}

.nav-item-not-selected:hover{
  background: #e0f6ec;
}

.nav-item-selected{
  color: white;
  background: #07956f;
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
  height: 140px;
}

.mobile-item{
  width: 100%;
}

.nav-p{
  height: 50px;
}

.project-button{
  padding: 10px;
  border-radius: 100px;
}

.project-button-mobile{
  padding: 4px;
  border-radius: 100px;
  width: fit-content;
}

.logo{
  width: 200px;
  object-fit: contain;
}

@media (max-width: 900px) {
  .hide-nav{
    display: none;
  }

  .show-mobile{
    display: flex;
  }
}

</style>

<template>

  <div class="fixed max-width">
    <div class="nav center-horizontal">
      <div class="space-between max-height main-content-width center-vertical">
        <div class="center-vertical">
          <h2 class="reset-margin prim-color">Fliesenleger</h2>
        </div>
        <div>
          <div class="center-vertical hide-nav">
            <a href="/" class="nav-item round-corner" :class="current === 'home' ? 'nav-item-selected' : 'nav-item-not-selected'">Start</a>
            <a href="/leistungen" class="nav-item round-corner" :class="current === 'leistungen' ? 'nav-item-selected' : 'nav-item-not-selected'">Leistungen</a>
            <a href="/galerie" class="nav-item round-corner" :class="current === 'galerie' ? 'nav-item-selected' : 'nav-item-not-selected'">Galerie</a>
            <a href="/kontakt" class="nav-item round-corner" :class="current === 'kontakt' ? 'nav-item-selected' : 'nav-item-not-selected'">Kontakt</a>
            <div style="width: 20px"></div>
            <div class="project-button prim-color-background center-vertical pointer" @click="$router.push('/kontakt')">
              <div style="width: 10px"></div>
              <p class="reset-margin white bold">Projekt starten</p>
              <div style="width: 10px"></div>
            </div>
          </div>
          <div class="show-mobile">
            <Icon size="30" class="decent-color pointer" @click="onMobileMenu">
              <Menu2/>
            </Icon>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-nav" :class="showMobileMenu ? 'mobile-nav-height' : ''">
      <p class="reset-margin max-width center-text"><a href="/" class="nav-item" @click="hideMobileNav">Start</a></p>
      <div style="height: 10px"></div>
      <p class="reset-margin max-width center-text"><a href="/leistungen" class="nav-item" @click="hideMobileNav">Leistungen</a></p>
      <div style="height: 10px"></div>
      <p class="reset-margin max-width center-text"><a href="/galerie" class="nav-item" @click="hideMobileNav">Galerie</a></p>
      <div style="height: 10px"></div>
      <p class="reset-margin max-width center-text"><a href="/kontakt" class="nav-item" @click="hideMobileNav">Kontakt</a></p>
      <div style="height: 10px"></div>
      <div class="center-horizontal">
        <div class="project-button-mobile prim-color-background center-vertical pointer" @click="$router.push('/kontakt')">
          <div style="width: 10px"></div>
          <p class="reset-margin white bold">Projekt starten</p>
          <div style="width: 10px"></div>
        </div>
      </div>
    </div>
    <div class="gradient max-width"></div>
  </div>

</template>


<script>

import {Menu2} from "@vicons/tabler"
import {Icon} from "@vicons/utils"
import {Lightning} from "@vicons/carbon"

export default {
  name: "Nav",
  components: {Icon, Menu2, Lightning},
  data() {
    return {
      showMobileMenu: false,
    };
  },

  props: {
    current: String
  },

  created() {
  },

  mounted() {

  },


  methods: {
    onMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },

    hideMobileNav() {
      this.showMobileMenu = false
    },

    onStartProject(){

    }
  }
}
</script>