<template>
  <h1>404 Not Found :(</h1>
</template>

<script>

export default {
  name: "NotFoundPage",

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
