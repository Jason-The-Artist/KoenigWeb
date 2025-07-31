<style scoped>

.header-background{
  background: radial-gradient(circle, #1d5e4c 0%, #242d3d 100%);
}

.leistung-background{
  background: linear-gradient(90deg, #eaf3ef 0%, #f3f4ea 100%);
}

.head-glow{
  box-shadow: 0px 0px 100px #0a8f49
}

.header-outer{
  height: 600px;
}

.header-inner{
  height: 80%;
}

.main-headline{
  font-size: 80px;
}

.half-width{
  width: 50%;
}

.down-icon{
  opacity: 0.5;
  transform: translateY(-60px);
}

.huge-headline{
  font-size: 50px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.us-background{
  background-color: #11192c;
  padding-top: 100px;
  padding-bottom: 100px;
}

.contact-background{
  padding-top: 50px;
  padding-bottom: 50px;
}

.about-half-width{
  width: 50%;
}

.tri-width{
  width: 33%;
}

.address-card{
  width: 500px;
  padding: 20px;
}

.message-card{
  width: 500px;
  padding: 20px;
}

.contact-circle{
  width: 50px;
  height: 50px;
  background: rgb(37, 98, 233);
}

.hide-pizza{
  display: flex;
}

.mobile-center-horizontal{
  display: flex;
}

.mobile-center{
  display: flex;
  align-items: center;
}

.button-space{
  width: 20px;
}

.contact-space{
  width: 20px;
}

.inner-img{
  width: 90%;
}

.main-tag{
  width: fit-content;
  border-radius: 100px;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  background: #d7efdf;
  color: #07956f;
  font-size: 13px;
  font-weight: bold;
}

.dark-tag{
  width: fit-content;
  border-radius: 100px;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  background: #133c3f;
  color: #34d198;;
  font-size: 13px;
  font-weight: bold;
}

.black-tag{
  width: fit-content;
  border-radius: 100px;
  padding: 3px;
  padding-left: 6px;
  padding-right: 6px;
  background: #000000;
  color: white;
  font-size: 13px;
  font-weight: bold;
}


.rating-card{
  width: fit-content;
  height: fit-content;
  padding: 15px;
  border-radius: 10px;
  background: white;
}

.round-icon{
  width: 40px;
  height: 40px;
  border-radius: 200px;
}

.contact-opening{
  padding: 20px;
  background: #1f2937;
}

.sec-glow{
  box-shadow: 0px 0px 100px #fcd34d
}

.blue-glow{
  box-shadow: 0px 0px 100px #238ad5
}

.example-view{
  width: 90%;
}

.mobile-column-reverse{
  flex-direction: row;
}

.half-width-ref{
  width: 50%;
}

.inner-half{
  width: 90%;
}


@media (max-width: 1450px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 1110px) {
  .mobile-column-reverse{
    flex-direction: column-reverse;
  }

  .half-width-ref{
    width: 100%;
  }
}

@media (max-width: 1000px) {
  .hide-pizza{
    display: none;
  }
  .half-width{
    width: 100%;
  }

  .mobile-center-horizontal{
    display: flex;
    justify-content: center;
  }

  .mobile-center-text{
    text-align: center;
  }

  .mobile-center{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mobile-column{
    flex-direction: column;
  }

}
@media (max-width: 1060px) {
  .contact-column{
    flex-direction: column;
  }

  .address-card{
    width: 85%;
  }

  .message-card{
    width: 85%;
  }

  .contact-space{
    height: 10px;
  }

  .product-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (max-width: 600px) {
  .main-headline{
    font-size: 10vw;
  }

  .mobile-button-column{
    flex-direction: column;
  }

  .button-space{
    height: 10px;
  }

  .small-mobile-font{
    font-size: 12px;
  }

}

</style>

<template>

  <Nav current="leistungen" class="on-top"/>

  <div class="header-background header-outer center" id="home">
    <div class="header-inner main-content-width space-between center-vertical mobile-column">
      <div>
        <h1 class="reset-margin main-headline center-text white">Professionelles <span class="bright-prim-color">Handwerk</span> für jeden Bedarf</h1>
        <p class="default-textsize fade-before center-text decent-white" :class="fadeSubHeader ? 'fade-after' : ''">Von der Idee bis zum perfekten Ergebnis – ich verwandle Ihre Visionen in greifbare Meisterwerke. Handwerk mit Herz und Verstand.</p>
      </div>
    </div>
  </div>

  <div class="center-horizontal leistung-background">
    <div class="example-view center-horizontal">
      <div>
        <div style="height: 150px"></div>

        <div class="center mobile-column-reverse">
          <div class="half-width-ref center">
            <div class="center inner">
              <img src="../assets/gallery/titelbildmartina.jpg" class="max-width round-corner glow">
            </div>
          </div>
          <div class="half-width-ref center">
            <div class="inner-half">
              <div class="center-horizontal">
                <h2 style="font-size: 50px" class="center-text reset-margin">Arbeiten im Garten</h2>
              </div>
              <div style="height: 20px"></div>
              <div>
                <LeistungLine title="Garten-Arbeit" color="green"/>
                <LeistungLine title="Pflanzungen jeder Art" color="green"/>
                <LeistungLine title="Arbeiten an Rasenfläschen" color="green"/>
                <LeistungLine title="Baum- und Heckenpflege" color="green"/>
                <LeistungLine title="Bewässerungssysteme" color="green"/>
              </div>
            </div>
          </div>
        </div>

        <div style="height: 200px"></div>

        <div class="center">
          <div class="half-width-ref center">
            <div class="inner-half">
              <div class="center-horizontal">
                <h2 style="font-size: 50px" class="center-text reset-margin">Reparaturen und Ausbesserungen</h2>
              </div>
              <div style="height: 20px"></div>
              <div>
                <LeistungLine title="Reparaturen aller Art" color="sec"/>
                <LeistungLine title="Kreative Umbauten" color="sec"/>
                <LeistungLine title="Präzise Montagearbeiten" color="sec"/>
                <LeistungLine title="Individuelle Anfertigungen" color="sec"/>
                <LeistungLine title="Wartung & Pflege" color="sec"/>
              </div>
            </div>
          </div>
          <div class="half-width-ref center">
            <div class="center inner-half">
              <img src="../assets/gallery/titelbildmartina.jpg" class="max-width round-corner sec-glow">
            </div>
          </div>
        </div>

        <div style="height: 200px"></div>

        <div class="center mobile-column-reverse">
          <div class="half-width-ref center">
            <div class="center inner">
              <img src="../assets/gallery/titelbildmartina.jpg" class="max-width round-corner blue-glow">
            </div>
          </div>
          <div class="half-width-ref center">
            <div class="inner-half">
              <div class="center-horizontal">
                <h2 style="font-size: 50px" class="center-text reset-margin">Outdoor-Flächen</h2>
              </div>
              <div style="height: 20px"></div>
              <div>
                <LeistungLine title="Traumterrassen erschaffen" color="blue"/>
                <LeistungLine title="Kunstvolle Pflasterarbeiten" color="blue"/>
                <LeistungLine title="Holz- und Metallzäune" color="blue"/>
                <LeistungLine title="Carports & Überdachungen" color="blue"/>
                <LeistungLine title="Drainage-Lösungen" color="blue"/>
              </div>
            </div>
          </div>
        </div>

        <div style="height: 100px"></div>

      </div>
    </div>
  </div>

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
  name: "LeistungenPage",
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