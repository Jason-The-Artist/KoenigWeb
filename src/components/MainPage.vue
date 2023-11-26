<template>
<div ref="root" class="center-horizontal show-page">
  <div class="fullwidth">
    <div class="relative">
      <div class="fullwidth absolute overflow-hidden">
        <ImageSwipe/>
      </div>
      <div class="absolute center-horizontal fullwidth">
        <div>
          <div class="block-space"></div>
          <div class="white-background main-text-box more-round-corner center-horizontal" style="margin-top: -50px">
            <div class="center-text full-width-percent">
              <div v-html="convertU(content)"></div>


              <div style="height: 100px"></div>

            </div>
          </div>
          <div style="height: 100px"></div>
          <div class="absolute" style="bottom: 0;">
            <MainFooter @hide="hide"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  <div class="absolute center-horizontal">
    <div class="fullwidth">
      <MainNav @hide="hide"/>
    </div>
  </div>
</template>

<script>

import MainNav from "@/components/views/MainNav.vue";
import InfoNav from "@/components/views/InfoNav.vue";
import MainModule from "@/components/views/MainModule.vue";
import ImageSwipe from "@/components/views/ImageSwipe.vue";
import MainFooter from "@/components/views/MainFooter.vue";

export default {
  name: "MainPage",
  components: {MainFooter, ImageSwipe, MainModule, InfoNav, MainNav},

  data(){
    return{
      pageName: "MainPage",
      json: {},
      content: ""
    }
  },

  created() {
    console.log("created")
  },

  beforeDestroy() {
  },

  mounted() {
    this.$refs.root.className = this.$refs.root.className.replace("hide-page", "show-page")

    fetch('http://testing.handwerker-akoenig.de/pages.json')
        .then(response => response.json())
        .then(data => {
          this.json = data
          this.content = this.json.seiten.main

        })
        .catch(error => {
          console.error('Error fetching pages data:', error);
        });
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
    },
    convertU(text){
      return text.replace(/!u00F6/g, 'ö')
          .replace(/!u00E4/g, 'ä')
          .replace(/!u00FC/g, 'ü')
          .replace(/!u00DF/g, 'ß')
          .replace(/!!o/g, 'ö')
          .replace(/!!a/g, 'ä')
          .replace(/!!u/g, 'ü')
          .replace(/!!s/g, 'ß')
          .replace(/!!O/g, 'Ö')
          .replace(/!!A/g, 'Ä')
          .replace(/!!U/g, 'Ü')
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
