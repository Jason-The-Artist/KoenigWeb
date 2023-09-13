<template>
<div class="outer-nav center-vertical">
  <div class="fullwidth">
    <div class="relative center-vertical">
      <div class="absolute center-horizontal nav center-vertical white-background" style="width: 100%">
        <h2 class="nav-module center-horizontal logo-green" @click="click1">Nav 1. Element</h2>
        <div class="nav-space"></div>
        <h2 class="nav-module center-horizontal logo-green" @click="click2">Nav 2. Element</h2>
        <div class="nav-space"></div>
        <h2 class="nav-module center-horizontal logo-green" @click="click3">Nav 3. Element</h2>
        <div class="nav-space"></div>
      </div>
      <div class="absolute nav-element display-flex round-corner" style="margin-left: 300px">
        <img src="../../assets/logo_transparent.png" class="nav-logo">
      </div>
      <div class="absolute nav-element display-flex round-corner" style="margin-left: 70vw">
        <div style="margin-left: 20px; margin-right: 20px">
          <h2 class="logo-grey">Tel 0000-00000 Fax: 0000-00000</h2>
          <h2 class="logo-grey">Email: test.email@gmail.com</h2>
        </div>
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