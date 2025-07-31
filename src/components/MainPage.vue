<style scoped>

.header-background{
  background: linear-gradient(90deg, #eaf3ef 0%, #f3f4ea 100%);
}

.glow{
  box-shadow: 0px 0px 100px #0a8f49
}

.header-outer{
  height: 100vh;
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

@media (max-width: 1450px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
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

  <Nav current="home" class="fade-bottom-before on-top" :class="fadeNav ? 'fade-bottom-after' : ''"/>

  <div class="header-background header-outer center" id="home">
    <div class="header-inner main-content-width space-between center-vertical mobile-column">
      <div class="center half-width fade-before" :class="fadeHeader ? 'fade-after' : ''">
        <div style="width: 90%">
          <div class="mobile-center-horizontal">
            <div class="main-tag">Professionelles Handwerk seit 2015</div>
          </div>
          <h1 class="reset-margin main-headline mobile-center-text">Träume werden <span class="prim-color">Realität</span></h1>
          <p class="default-textsize decent-color fade-before mobile-center-text" :class="fadeSubHeader ? 'fade-after' : ''">Von der Idee bis zum perfekten Ergebnis – ich verwandle Ihre Visionen in greifbare Meisterwerke. Handwerk mit Herz und Verstand.</p>
          <div class="mobile-center-horizontal fade-before mobile-button-column" :class="fadeSubButtons ? 'fade-after' : ''">
            <div class="center-horizontal">
              <UIButton title="Projekt starten" right @click="$router.push('/kontakt')">
                <ArrowRight20Regular/>
              </UIButton>
            </div>
            <div class="button-space"></div>
            <div class="center-horizontal">
              <UIButton title="Arbeiten ansehen" sec @click="$router.push('/galerie')"/>
            </div>
          </div>
        </div>
      </div>
      <div class="center half-width relative max-height">
        <img src="../assets/sample-main.jpg" class="max-width fade-before round-corner glow" :class="fadePizza ? 'fade-after' : ''">
      </div>
    </div>
  </div>

  <div class="center-horizontal down-icon" id="menu">
    <Icon size="40" class="prim-color">
      <ChevronDoubleDown20Regular/>
    </Icon>
  </div>

  <div class="center-horizontal" ref="menu">
    <div class="leistung-content-width center-horizontal">
      <div>
        <div class="center-horizontal">
          <div class="main-tag">Meine Leistungen</div>
        </div>
        <div class="center-horizontal">
          <h2 class="huge-headline center-text">Professionelles Handwerk für jeden Bedarf</h2>
        </div>
        <div class="center-horizontal">
          <p class="decent-color default-textsize reset-margin center-text">Von Pflasterarbeiten bis zur Terassengestaltung - wir bieten Ihnen das komplette Spektrum professioneller Handwerksarbeiten.</p>
        </div>
      </div>
    </div>
  </div>

  <div style="height: 50px"></div>

  <div class="center-horizontal">
    <div class="leistung-content-width center-horizontal">
      <div class="product-grid max-width">
        <LeistungCard title="Pflasterarbeiten" sub="Sub-Text für Pflasterarbeiten" :list="['Kleine Steine', 'Große Steine', 'Spezielles Muster']"><HealingRound/></LeistungCard>
        <LeistungCard title="Trockenmauern" sub="Sub-Text für Trockenmauern" :list="['Kleine Wände', 'Rote Wände', 'Mit Muster']"><Wall/></LeistungCard>
        <LeistungCard title="Terassengestaltung" sub="Sub-Text für Terassengestaltng" :list="['Holzboden', 'Verschiedene Formen', 'Regenschutz']"><GrassFilled/></LeistungCard>
      </div>
    </div>
  </div>

  <div style="height: 100px" id="gallery"></div>

  <div class="max-width header-background">
    <div style="height: 50px"></div>
    <div class="center-horizontal" ref="menu">
      <div class="leistung-content-width center-horizontal">
        <div>
          <div class="center-horizontal">
            <div class="main-tag">Meine Projekte</div>
          </div>
          <div class="center-horizontal">
            <h2 class="huge-headline center-text">Was ich für Sie erschaffe</h2>
          </div>
          <div class="center-horizontal">
            <p class="decent-color default-textsize reset-margin center-text">Hier sehen sie einige Projekte von mir.</p>
          </div>
        </div>
      </div>
    </div>

    <div style="height: 50px"></div>

    <div class="center-horizontal">
      <div class="leistung-content-width center-horizontal">
        <div class="product-grid max-width">
          <GalleryCard title="Eingangstreppe Außenbereich" sub="Die Eigangstreppe im Außenbereich mit dem Material Granit" nav="/galerie/eingangsgestaltung/#eingangstreppe-aussenbereich" img="titelbilddeck.jpg"><HealingRound/></GalleryCard>
          <GalleryCard title="Keramikplatte + WPC" sub="Kombination aus Keramikplatte Grau Format 100cm x 100cm + WPC Diele Kastanienbraun" nav="/galerie/terassen/#keramikpalette-wpc" img="titelbildhein.jpg"><Wall/></GalleryCard>
          <GalleryCard title="Pooldeck Lärche" sub="Pooldeck, Unterkonstruktion Bankirai + Deckbelag aus Lärche" nav="/galerie/pooldecks/#pooldecks-laerche" img="titelbildmartina.jpg"><GrassFilled/></GalleryCard>
        </div>
      </div>
    </div>

    <div style="height: 50px"></div>

    <div class="center-horizontal">
      <UIButton title="Mehr Projekte ansehen" right @click="$router.push('/galerie')">
        <ArrowRight20Regular/>
      </UIButton>
    </div>

    <div style="height: 50px"></div>
  </div>

  <div class="max-width us-background center-horizontal">
    <div class="header-inner main-content-width space-between center-vertical mobile-column">
      <div class="center half-width">
        <div>
          <div class="mobile-center-horizontal">
            <div class="dark-tag">Über mich</div>
          </div>
          <h1 class="huge-headline white mobile-center-text">Hinter jedem Projekt steht <span class="bright-prim-color">Leidenschaft</span></h1>
          <p class="default-textsize reset-margin mobile-center-text decent-white">Ich bin nicht nur Handwerker – ich bin Problemlöser, Träume-Verwirklicher und manchmal auch Zauberer. Mit über 10 Jahren Erfahrung und einer großen Begeisterung absolviere ich jedes Projekt.</p>
          <div style="height: 20px"></div>
          <div class="flex">
            <div class="center-vertical about-half-width">
              <div>
                <h2 class="reset-margin bright-prim-color" style="font-size: 40px">10+</h2>
                <p class="decent-white" style="margin-top: 5px">Jahre Leidenschaft</p>
              </div>
            </div>
            <div class="center-vertical about-half-width">
              <div>
                <h2 class="reset-margin bright-prim-color" style="font-size: 40px">100%</h2>
                <p class="decent-white" style="margin-top: 5px">Herzblut</p>
              </div>
            </div>
          </div>
          <div style="height: 30px"></div>
          <div class="mobile-center-horizontal">
            <UIButton title="Lernen sie mich kennen" sec css="brighter" textCss="brighter-text" @click="$router.push('/kontakt')"/>
          </div>
        </div>
      </div>
      <div class="center half-width">
        <img src="../assets/sample-main.jpg" class="max-width round-corner max-height contain">
      </div>
    </div>
  </div>

  <div id="contact"></div>

  <div class="max-width contact-background prim-color-background center-horizontal">
    <div class="header-inner center-horizontal">
      <div>
        <div class="center-horizontal" ref="contact">
          <div>
            <div class="center-horizontal">
              <h1 class="huge-headline center-text white">Bereit für Ihr <span class="sec-color">Traumprojekt</span>?</h1>
            </div>
            <div class="center-horizontal">
              <p class="default-textsize reset-margin center-text white">Kontaktieren Sie mich und ich werde für Sie etwas einzigartiges verschaffen.</p>
            </div>
            <div style="height: 30px"></div>
            <div class="center-horizontal mobile-button-column">
              <div class="center-horizontal">
                <UIButton title="Projekt starten" right css="white-prim" textCss="text-prim" @click="$router.push('/kontakt')">
                  <ArrowRight20Regular/>
                </UIButton>
              </div>
              <div class="button-space"></div>
              <div class="center-horizontal">
                <UIButton title="Arbeiten ansehen" sec css="white-sec" textCss="white-text" @click="$router.push('/galerie')"/>
              </div>
            </div>
          </div>
        </div>

        <div style="height: 50px"></div>
      </div>
    </div>
  </div>

  <Footer/>

</template>


<script>

import Nav from "@/components/views/Nav.vue"
import UIButton from "@/components/views/UIButton.vue"
import {Icon} from "@vicons/utils"
import {ArrowRight20Regular, ChevronDoubleDown20Regular} from "@vicons/fluent"
import {HealingRound, GrassFilled} from "@vicons/material"
import {Wall} from "@vicons/tabler"
import LeistungCard from "@/components/views/LeistungCard.vue";
import Footer from "@/components/views/Footer.vue"
import GalleryCard from "@/components/views/GalleryCard.vue"

export default {
  name: "MainPage",
  components: {
    GalleryCard,
    Footer, LeistungCard: LeistungCard,
    Icon, UIButton, Nav, ArrowRight20Regular, HealingRound, Wall, GrassFilled, ChevronDoubleDown20Regular},
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