<template>
  <div ref="root" class="relative show-page">
    <div class="absolute center-horizontal fullwidth">
      <div>
        <div style="height: 150px"></div>
        <div class="white-background main-text-box more-round-corner center-horizontal">
          <div class="center-text full-width-percent">
            <h2 class="logo-red bold" style="font-size: 40px">Leistungen</h2>
            <p>Leistungen die ihre Seele erfüllen</p>
            <div class="break-line orange-background"></div>
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




            <div style="height: 100px"></div>
          </div>
        </div>
        <div style="height: 100px"></div>
        <MainFooter @hide="hide"/>
      </div>
    </div>
  </div>
  <MainNav @hide="hide"/>
</template>

<script>

import MainNav from "@/components/views/MainNav.vue";
import ImageSwipe from "@/components/views/ImageSwipe.vue";
import MainModule from "@/components/views/MainModule.vue";
import MainFooter from "@/components/views/MainFooter.vue";

export default {
  name: "LeistungenPage",
  components: {MainFooter, MainModule, ImageSwipe, MainNav},

  data(){
    return{
      pageName: "LeistungenPage"
    }
  },

  created() {

  },


  mounted() {
    this.$refs.root.className = this.$refs.root.className.replace("hide-page", "show-page")
  },

  methods: {
    getCookies(key){
      return this.$cookies.get(key);
    },
    setCookies(key, value){
      return this.$cookies.set(key, value, 2147483647);
    },

    hide(pageName){
      if(this.pageName !== pageName){
        this.$refs.root.className = this.$refs.root.className.replace("show-page", "hide-page")
      }
    }

  },

}
</script>