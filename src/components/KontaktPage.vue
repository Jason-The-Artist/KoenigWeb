<template>
  <div ref="root" class="relative show-page">
    <div class="absolute center-horizontal fullwidth">
      <div class="fullheight">
        <div style="height: 150px"></div>
        <div class="white-background main-text-box more-round-corner center-horizontal">
          <div class="center-text full-width-percent">
            <h2 class="logo-red bold" style="font-size: 40px">Kontakt</h2>
            <p>Kontaktiert mich, weil ich brauche Arbeit</p>
            <div class="break-line orange-background"></div>

            <h2>Tel: 0000000000</h2>

            <button class="module-button pointer" @click="clicked" style="width: auto">
              <h2>testemail@gmail.com</h2>
            </button>

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
      pageName: "KontaktPage"
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
    },

    clicked(){
      window.open("mailto:mail.sender.je@gmail.com")
    }

  },

}
</script>