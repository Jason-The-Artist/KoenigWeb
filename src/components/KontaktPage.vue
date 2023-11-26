<template>
  <div ref="root" class="relative show-page">
    <div class="absolute center-horizontal fullwidth">
      <div class="fullheight">
        <div style="height: 150px"></div>
        <div class="white-background main-text-box more-round-corner center-horizontal">
          <div class="center-text full-width-percent">
            <div v-html="convertU(content)"></div>

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
  name: "KontaktPage",
  components: {MainFooter, MainModule, ImageSwipe, MainNav},

  data(){
    return{
      pageName: "KontaktPage",
      content: ""
    }
  },

  created() {

  },


  mounted() {
    this.$refs.root.className = this.$refs.root.className.replace("hide-page", "show-page")

    fetch('http://testing.handwerker-akoenig.de/pages.json')
        .then(response => response.json())
        .then(data => {
          this.content = data.seiten.kontakt

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