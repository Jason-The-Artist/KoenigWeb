

<template>
  <ImageGaleryPopup :show="galeryShow" @close="galeryShow = false" :id="collectionId"/>
  <div ref="root" class="relative show-page">
    <div class="absolute center-horizontal fullwidth" style="min-height: 100vh">
      <div>
        <div style="height: 150px"></div>
        <div class="white-background main-text-box more-round-corner center-horizontal">
          <div class="center-text full-width-percent">
            <h2 class="logo-red bold" style="font-size: 40px">Galerie</h2>
            <p>Bilder die zeigen wie gut ich bin</p>
            <div style="height: 20px"></div>
            <div class="break-line orange-background"></div>
            <div style="height: 20px"></div>
            <h2>Noch sind keine Bilder vorhanden</h2>


            <div class="main-grid center-horizontal">
              <MainImageModule
                  v-for="(dat) in galeryData"
                  :title="dat.title"
                  :thumb="dat.thumb"
                  :id="dat.id"
                  :isPopup="true"
                  @clicked="imageClicked"/>
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
import ImageGaleryPopup from "@/components/views/ImageGaleryPopup.vue";
import MainImageModule from "@/components/views/MainImageModule.vue";
import json from "../assets/galery.json"

export default {
  name: "GaleriePage",
  components: {MainImageModule, ImageGaleryPopup, MainFooter, MainModule, ImageSwipe, MainNav},

  data(){
    return{
      pageName: "GaleriePage",
      galeryShow: false,
      galeryData: [],
      collectionId: 0
    }
  },

  created() {

  },


  mounted() {
    this.$refs.root.className = this.$refs.root.className.replace("hide-page", "show-page")

    for(let i = 0; i < json.galery.length; i++){
      let items = json.galery[i]
      let dataset = {
        id: items.id,
        title: items.title,
        thumb: items.thumb,
        collection: items.collection
      }
      this.galeryData.push(dataset)
    }
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

    imageClicked(id){
      this.collectionId = id
      this.galeryShow = true
    }

  },

}
</script>