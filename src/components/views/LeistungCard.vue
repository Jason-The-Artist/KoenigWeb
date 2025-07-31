<style scoped>

.card{
  width: 100%;
  max-width: 400px;
  border: solid 1px #cfcfcf;
  padding: 30px;
}
.img-layout{
  height: 180px;
}

.product-img{
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.info-layout{
  width: 90%;
}

.icon{
  width: 60px;
  height: 60px;
  border-radius: 200px;
}

.small-circle{
  width: 8px;
  height: 8px;
  border-radius: 50px;
}

@media (max-width: 1450px) {
  .card{
    width: 100%;
    max-width: 400px;
  }
}

</style>

<template>

  <div class="center-horizontal">
    <div class="card round-corner">
      <div class="icon decent-prim-background center">
        <Icon size="35" class="prim-color">
          <slot>

          </slot>
        </Icon>
      </div>
      <div style="height: 20px"></div>
      <div class="center-vertical space-between">
        <h2 class="reset-margin">{{title}}</h2>
      </div>
      <div>
        <p class="decent-color">{{sub}}</p>
      </div>
      <div v-for="dat in list">
        <div style="height: 10px"></div>
        <div class="center-vertical">
          <div class="small-circle prim-color-background"></div>
          <div style="width: 10px"></div>
          <p class="reset-margin decent-color">{{dat}}</p>
        </div>
      </div>
    </div>
  </div>

</template>


<script>

import {HealingRound} from "@vicons/material"
import {Icon} from "@vicons/utils"

export default {
  name: "LeistungCard",
  components: {Icon, HealingRound},
  data() {
    return {
    };
  },

  props: {
    title: String,
    sub: String,
    list: Array
  },

  created() {
  },

  mounted() {


  },


  methods: {


  }
}
</script>