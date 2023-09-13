<template>
<div class="outer-nav center-vertical">
  <div class="fullwidth">
    <div>
      <div class="display-flex fullwidth center-vertical">
        <div class="white-background nav-height" style="width: 5%"></div>
        <div class="nav-element nav-round-corner nav-logo-element">
          <img src="../../assets/logo_transparent.png" class="nav-logo">
        </div>
        <div class="full-center white-background nav-height" style="width: 45%">
          <h2 class="nav-module center-horizontal logo-green" @click="click1">Nav 1. Element</h2>
          <div class="nav-space"></div>
          <h2 class="nav-module center-horizontal logo-green" @click="click2">Nav 2. Element</h2>
          <div class="nav-space"></div>
          <h2 class="nav-module center-horizontal logo-green" @click="click3">Nav 3. Element</h2>
        </div>
        <div class="nav-element center-horizontal nav-round-corner nav-info-element" style="width: 25%">
          <div>
            <h2 class="logo-grey nav-info-text">Tel 0000-00000</h2>
            <h2 class="logo-grey nav-info-text">Email: test.email@gmail.com</h2>
          </div>
        </div>
        <div class="white-background nav-height" style="width: 5%"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "MainNav",

  data(){
    return{
    }
  },

  created() {
  },

  mounted() {

  },

  methods: {
    click1(){

    },

    click2(){

    },

    click3(){

    },
  }

}
</script>