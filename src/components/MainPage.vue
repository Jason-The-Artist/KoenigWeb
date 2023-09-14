<template>
<div class="center-horizontal">
  <div class="fullwidth">
    <div class="relative">
      <div class="fullwidth absolute overflow-hidden">
        <img src="../assets/sample2.png" class="main-image overflow-hidden">
      </div>
      <div class="absolute center-horizontal fullwidth">
        <div>
          <div class="block-space"></div>
          <div class="white-background main-text-box more-round-corner center-horizontal" style="margin-top: -50px">
            <div class="center-text full-width-percent">
              <h2 class="logo-red bold" style="font-size: 40px">Jason Enns- Ihr Softwareentwickler</h2>
              <p>Softwareentwicklung mit Herz und Verstand. Webseite, Apps, Frontend, Backend, alles ist dabei!</p>
              <div style="height: 20px"></div>
              <div class="break-line orange-background"></div>
              <div style="height: 20px"></div>
              <p>Sotwareentwicklung is ein langer und aufwendiger Prozess. Es benötigt talentierte und creative Menschen
                die programmieren beherschen, damit man ein gutes Ergebnis hat. Zum Glück gibt es Jason Enns der sehr talentiert
                ist und ihnen ein Meisterwerk programmieren kann. Mein Ziel wird es sein einmal selbständig zu sein und
                durch meinen guten Ruf zu leben. Bis dahin dauert es aber noch, weil ich erst richtige Berufserfahrung sammeln muss.
                Um aber Berufserfahrung zu sammeln, muss man erstmal studieren. Ich fange mitte Oktober an zu studieren. Also bis
                zur Selbsständigkeit ist es noch ein langer Weg. Und weil dieser Text so schön geschrieben ist, kopiere ich ihn nochmal!
                Sotwareentwicklung is ein langer und aufwendiger Prozess. Es benötigt talentierte und creative Menschen
                die programmieren beherschen, damit man ein gutes Ergebnis hat. Zum Glück gibt es Jason Enns der sehr talentiert
                ist und ihnen ein Meisterwerk programmieren kann. Mein Ziel wird es sein einmal selbständig zu sein und
                durch meinen guten Ruf zu leben. Bis dahin dauert es aber noch, weil ich erst richtige Berufserfahrung sammeln muss.
                Um aber Berufserfahrung zu sammeln, muss man erstmal studieren. Ich fange mitte Oktober an zu studieren. Also bis
                zur Selbsständigkeit ist es noch ein langer Weg.</p>
              <div style="height: 20px"></div>
              <div class="break-line orange-background"></div>
              <div style="height: 20px"></div>
              <h1 class="logo-red">Meine Leistungen</h1>
              <div class="main-grid center-horizontal">
                <MainModule title="Web-Development" content="Webseiten mit der Vue.js Architektur! Ich kann mit Vue.js schöne und intuitive Webseiten entwickeln."/>
                <MainModule title="App-Development" content="Android Apps können nützlich und unterhaltsam sein. Ich kann ihnen
                dabei helfen ihre eigene Android App zu besitzen und ihre Träume zu verwirklichen"/>
                <MainModule title="BackEnd" content="Ein BackEnd ist oft notwendig um komplexe Prozesse und Inhalte bereitzustellen.
                Mit einem BackEnd können Anwendungen miteinander kommunizieren. Ich kann ihnen ein passendes Backend für ihre Projekte entwickeln."/>
                <MainModule title="Java Anwendung" content="Java ist eine allrounder Sprache. Java ist auch sehr gut um Anwendungen zu entwickeln.
                Diese Anwendungen sind automatisch in der Lage auf MacOs, Linux und Windows zu laufen."/>
                <MainModule title="AI-Development" content="Ich habe mich nur 5 Minuten lang mit AI-Development beschäftig. Ich habe das nur für ein Platzhalter geschrieben. Als ich kann hier nichts für sie tun."/>
                <MainModule title="Game-Development" content="Auch das dient eher für ein Platzhalter. Dennoch habe ich mich vor
                langer Zeit mit Game-Development beschäftigt und habe ein kleines Spiel mal in Unity3D entwickelt"/>
              </div>




              <div style="height: 200px"></div>
            </div>
          </div>
          <div style="height: 200px"></div>
        </div>
      </div>
      <div class="absolute center-horizontal">
        <div class="fullwidth">
          <div style="height: 70px"></div>
          <MainNav/>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import MainNav from "@/components/views/MainNav.vue";
import InfoNav from "@/components/views/InfoNav.vue";
import MainModule from "@/components/views/MainModule.vue";

export default {
  name: "MainPage",
  components: {MainModule, InfoNav, MainNav},

  data(){
    return{
    }
  },

  created() {

  },

  beforeDestroy() {
  },

  mounted() {

  },

  methods: {
    getCookies(key){
      return this.$cookies.get(key);
    },
    setCookies(key, value){
      return this.$cookies.set(key, value, 2147483647);
    },

  },

}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
