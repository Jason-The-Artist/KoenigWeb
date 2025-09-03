<style scoped>

.header-background{
  background: linear-gradient(90deg, #eaf3ef 0%, #f3f4ea 100%);
}

.glow{
  box-shadow: 0px 0px 100px #0a8f49
}

.header-outer{
  min-height: 70vh;
}

.header-inner{
  height: 80%;
}

.main-headline{
  font-size: 60px;
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

.mobile-center-horizontal{
  display: flex;
}
.button-space{
  width: 20px;
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
@media (max-width: 1450px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 1000px) {
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

  .mobile-column{
    flex-direction: column;
  }

}
@media (max-width: 1060px) {

  .product-grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .mobile-margin{
    margin-top: 70px;
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

@media (max-width: 500px) {
  .huge-headline{
    font-size: 40px;
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
            <div class="main-tag">Professioneller Fliesenleger seit XXXX</div>
          </div>
          <h1 class="reset-margin main-headline mobile-center-text">Solides <span class="prim-color">Handwerk</span> der Ihren Erwartungen entspricht</h1>
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
      <div class="center half-width max-height mobile-margin">
        <img src="../assets/samples/img3.jpeg" class="max-width fade-before round-corner glow" :class="fadePizza ? 'fade-after' : ''">
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
          <h2 class="huge-headline center-text">Professioneller Fliesenleger für jeden Bedarf aus einer Hand</h2>
        </div>
        <div class="center-horizontal">
          <p class="decent-color default-textsize reset-margin center-text">Wir bieten Ihnen ein großes Spektrum von Fliesenarbeiten an ihrem Haus und gestalten ihre Räume nach Ihren Wünschen. Durch eine gute Vernetzung mit unseren Partnerbetrieben, sind wir in der Lage auch herausfordernde Projekte zu meistern.</p>
        </div>
      </div>
    </div>
  </div>

  <div style="height: 50px"></div>

  <div class="center-horizontal">
    <div class="leistung-content-width center-horizontal">
      <div class="product-grid max-width">
        <LeistungCard title="Pflasterarbeiten" :list="['Betonpflaster', 'Natursteinpflaster', 'Platten', 'Gehwege', 'Grillplätze']"><HealingRound/></LeistungCard>
        <LeistungCard title="Trockenmauern" :list="['Natursteinmauern', 'Betonmauern', 'Sichtschutzmauer', 'Sichtschutzzäune', 'Sitzecken', 'Ruinen']"><Wall/></LeistungCard>
        <LeistungCard title="Terassengestaltung" :list="['Keramikplatten', 'Aluminium', 'Unterkonstruktion', 'Stelzlager', 'WPC Diehlen']"><GrassFilled/></LeistungCard>
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
          <GalleryCard title="Pooldeck" :list="['Unterkonstruktion aus Tropenholz', 'Deckbelag aus Lärchenholz']" nav="/galerie/pooldecks" img="titelbilddeck.jpg"><HealingRound/></GalleryCard>
          <GalleryCard title="Eingangstreppe" :list="['Fundament aus Beton', 'Treppenbelag aus Granit']" nav="/galerie/eingangsgestaltung" img="titelbildhein.jpg"><Wall/></GalleryCard>
          <GalleryCard title="Terrasse kombiniert" :list="['Unterkonstruktion aus Aluminium', 'Terrassenbelag aus Keramik und WPC']" nav="/galerie/terassen" img="titelbildmartina.jpg"><GrassFilled/></GalleryCard>
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
          <p class="default-textsize reset-margin mobile-center-text decent-white">Ich bin nicht nur Handwerker – ich bin ein Problemlöser, Träume-Verwirklicher und manchmal auch Therapeut. Mit großer Erfahrung und handwerklichem Geschick, gehe ich an Ihr Projekt ran. Eine durchdachte Planung, das richtige Aufmaß und Auswahl Hochwertiger Materialien, garantieren das beste Ergebnis für Sie.</p>
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