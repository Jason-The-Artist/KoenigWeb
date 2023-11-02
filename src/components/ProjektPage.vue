<template>
  <div ref="root" class="relative show-page">
    <div class="absolute center-horizontal fullwidth">
      <div class="fullheight">
        <div style="height: 150px"></div>
        <div class="white-background main-text-box more-round-corner center-horizontal">
          <div class="center-text full-width-percent">
            <h2 class="logo-red bold" style="font-size: 40px">{{title}}</h2>


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
import json from "../assets/galery.json"

export default {
  name: "ProjektPage",
  components: {MainFooter, MainModule, ImageSwipe, MainNav},

  data(){
    return{
      pageName: "ProjektPage",
      projekt: this.$route.params.projekt,
      collectionId: 0,
      title: ""
    }
  },

  created() {
    this.collectionId = Number(this.$route.params.id.replace("id", ""))
    this.findTitle()
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
    },

    findTitle(){
      for(let i = 0; i < json.galery.length; i++){
        if(json.galery[i].id === this.collectionId){
          for (let j = 0; j < json.galery[i].collection.length; j++){
            let item = json.galery[i].collection[j]
            if(item.src === this.projekt){
              this.title = item.title
              break
            }
          }
        }
      }
    },

  },

}
</script>