<template>
<div class="center-horizontal">
  <div class="fullwidth">
    <div class="relative">
      <div class="absolute">
        <img src="../assets/sample2.png" class="main-image">
      </div>
      <div class="absolute center-horizontal">
        <div class="fullwidth">
          <div style="height: 50px"></div>
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

export default {
  name: "MainPage",
  components: {InfoNav, MainNav},

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
