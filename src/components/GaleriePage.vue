<template>
  <div ref="root" class="relative show-page">
    <div class="absolute center-horizontal fullwidth">
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

            <div style="height: 100px"></div>
          </div>
        </div>
        <div style="height: 100px"></div>
      </div>
    </div>
    <MainNav @hide="hide"/>
  </div>
</template>

<script>

import MainNav from "@/components/views/MainNav.vue";
import ImageSwipe from "@/components/views/ImageSwipe.vue";
import MainModule from "@/components/views/MainModule.vue";

export default {
  name: "GaleriePage",
  components: {MainModule, ImageSwipe, MainNav},

  data(){
    return{
      pageName: "GaleriePage"
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