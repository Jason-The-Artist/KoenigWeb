


<template>
  <ImageGaleryPopup :show="galeryShow" @close="galeryShow = false" :id="collectionId"/>
  <div ref="root" class="relative show-page">
    <div class="absolute center-horizontal fullwidth" style="min-height: 100vh">
      <div>
        <div style="height: 150px"></div>
        <div class="white-background main-text-box more-round-corner center-horizontal">
          <div class="center-text full-width-percent">
            <h2 class="logo-red bold" style="font-size: 40px">{{convertU(title)}}</h2>

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
import ImageGaleryPopup from "@/components/views/ImageGaleryPopup.vue";
import MainImageModule from "@/components/views/MainImageModule.vue";

export default {
  name: "ProjektPage",
  components: {MainImageModule, ImageGaleryPopup, MainFooter, MainModule, ImageSwipe, MainNav},

  data(){
    return{
      pageName: "ProjektPage",
      projekt: this.$route.params.projekt,
      collectionId: 0,
      title: "",
      content: "",
      json: {},
      projects: {}
    }
  },

  created() {
    this.collectionId = Number(this.$route.params.id.replace("id", ""))
  },


  mounted() {
    this.$refs.root.className = this.$refs.root.className.replace("hide-page", "show-page")

    fetch('http://testing.handwerker-akoenig.de/galery.json')
        .then(response => response.json())
        .then(data => {
          this.json = data
          this.findTitle()

        })
        .catch(error => {
          console.error('Error fetching galery data:', error);
        });

    fetch('http://testing.handwerker-akoenig.de/projects.json')
        .then(response => response.json())
        .then(data => {
          this.projects = data
          this.findContent()

        })
        .catch(error => {
          console.error('Error fetching projects data:', error);
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

    findTitle(){
      for(let i = 0; i < this.json.galery.length; i++){
        if(this.json.galery[i].id === this.collectionId){
          for (let j = 0; j < this.json.galery[i].collection.length; j++){
            let item = this.json.galery[i].collection[j]
            if(item.src === this.projekt){
              this.title = item.title
              break
            }
          }
        }
      }
    },

    findContent(){
      for(let i = 0; i < this.projects.projects.length; i++){
        if(this.projects.projects[i].src === this.projekt){
          this.content = this.projects.projects[i].vHtml
        }
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
    }

  },

}
</script>