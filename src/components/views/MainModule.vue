<template>
<div class="center-horizontal">
  <div class="main-box decent-red-background">
    <h1 class="logo-green">{{title}}</h1>
    <div class="content-module">
      <p class="content-text-size">{{content}}</p>
    </div>
    <button class="module-button pointer">
      <h2>Ein Button</h2>
    </button>
  </div>
</div>
</template>

<script>

export default {
  name: "MainModule",

  props: {
    title: String,
    content: String,
  },

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