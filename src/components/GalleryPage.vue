<style scoped>

.header-background{
  background: linear-gradient(90deg, #eaf3ef 0%, #f3f4ea 100%);
}


.header-outer{
  height: 550px;
}

.header-inner{
  height: 80%;
}

.main-headline{
  font-size: 80px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.main-smaller-width{
  max-width: 800px;
  width: 100%;
}


@media (max-width: 1450px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 1060px) {

  .product-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (max-width: 600px) {
  .main-headline{
    font-size: 10vw;
  }
}

</style>

<template>

  <Nav current="galerie" class="on-top"/>

  <div class="header-background header-outer center" id="home">
    <div class="header-inner main-content-width center">
      <div class="main-smaller-width">
        <h1 class="reset-margin main-headline center-text">Projekt-<span class="prim-color">Galerie</span></h1>
        <p class="default-textsize center-text decent-color">Jedes Projekt erzählt eine Geschichte. Hier sind einige meiner Lieblings-Geschichten – von verrückten Ideen bis zu praktischen Wundern.</p>
      </div>
    </div>
  </div>

  <div style="height: 100px"></div>

  <div class="center-horizontal">
    <div class="leistung-content-width center-horizontal">
      <div class="product-grid max-width">
        <GalleryCard title="Pflasterarbeiten" :count="2" sub="Sub-Text für Pflasterarbeiten" nav="/galerie/pflasterarbeiten" img="pflasterarbeiten.jpg"><HealingRound/></GalleryCard>
        <GalleryCard title="Terassen" :count="6" sub="Sub-Text für Terassen" nav="/galerie/terassen" img="terassen.jpg"><Wall/></GalleryCard>
        <GalleryCard title="Pooldecks" :count="1" sub="Sub-Text für Pooldecks" nav="/galerie/pooldecks" img="pooldecks.jpg"><GrassFilled/></GalleryCard>
        <GalleryCard title="Trockenmauern" :count="2" sub="Sub-Text für Trockenmauern" nav="/galerie/trockenmauern" img="trockenmauern.jpg"><GrassFilled/></GalleryCard>
        <GalleryCard title="Eingangsgestaltung mit Naturstein" :count="3" sub="Sub-Text für Eingangsgestaltung" nav="/galerie/eingangsgestaltung" img="eingangsgestaltung.jpg"><GrassFilled/></GalleryCard>
      </div>
    </div>
  </div>

  <div style="height: 100px"></div>

  <Footer/>

</template>


<script>

import Nav from "@/components/views/Nav.vue"
import UIButton from "@/components/views/UIButton.vue"
import {Icon} from "@vicons/utils"
import {ArrowRight20Regular, ChevronDoubleDown20Regular, Checkmark20Regular} from "@vicons/fluent"
import {HealingRound, GrassFilled} from "@vicons/material"
import {Wall} from "@vicons/tabler"
import LeistungCard from "@/components/views/LeistungCard.vue";
import Footer from "@/components/views/Footer.vue"
import GalleryCard from "@/components/views/GalleryCard.vue"
import LeistungLine from "@/components/views/LeistungLine.vue"

export default {
  name: "GalleryPage",
  components: {
    LeistungLine,
    GalleryCard,
    Footer, LeistungCard: LeistungCard,
    Icon, UIButton, Nav, ArrowRight20Regular, HealingRound, Wall, GrassFilled, ChevronDoubleDown20Regular, Checkmark20Regular},
  data() {
    return {
      fadePizza: false,
      fadeHeader: false,
      fadeNav: false,
      fadeSubHeader: false,
      fadeSubButtons: false,
      fadeSubInfos: false,
    };
  },

  created() {
  },

  beforeDestroy() {
  },

  mounted() {

    setTimeout(() => {
      this.fadeNav = true
      this.fadePizza = true
      this.fadeHeader = true
    },10)

    setTimeout(() => {
      this.fadeSubHeader = true
      setTimeout(() => {
        this.fadeSubButtons = true
        setTimeout(() => {
          this.fadeSubInfos = true
        },200)
      },200)
    },500)
  },

  methods: {

    onContact(){
      const yOffset = -100;
      const element = this.$refs.contact
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({top: y, behavior: 'smooth'});
    },

    onProjects(){
      const yOffset = -100;
      const element = this.$refs.projects
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({top: y, behavior: 'smooth'});
    },

    getCookies(key) {
      return this.$cookies.get(key);
    },
    setCookies(key, value) {
      this.$cookies.set(key, value, 2147483647);
    },
  }
}
</script>