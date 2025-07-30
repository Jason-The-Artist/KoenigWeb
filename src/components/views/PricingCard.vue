<style scoped>

.card{
  width: 100%;
  max-width: 280px;
  border: solid 1px #cfcfcf;
  padding: 30px;
}

.selected-card{
  border: solid 1px #ff4f05;
}

.icon{
  width: 60px;
  height: 60px;
  border-radius: 10px;
}


.fav-pricing{
  width: 140px;
  height: 25px;
  rotate: -40deg;
  transform: translate(-40px, -50px);
  color: white;
  font-weight: bold;
  font-size: 14px;
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
    <div class="card round-corner flex overflow-hidden relative" :class="selected === id ? 'selected-card' : recommend ? 'fav-card' : ''">
      <div class="absolute fav-pricing sec-color-background center" v-if="recommend">
        Empfehlung
      </div>
      <div class="center-horizontal max-width">
        <div class="flex column">
          <div class="flex-1">
            <div class="center-horizontal">
              <div class="icon center prim-color-background">
                <slot>

                </slot>
              </div>
            </div>
            <div style="height: 20px"></div>
            <h2 class="reset-margin center-text">{{title}}</h2>
            <p class="decent-color center-text">{{sub}}</p>
            <h2 class="reset-margin center-text" style="font-size: 30px">{{price}}€</h2>
            <p class="decent-color center-text" style="margin-top: 0">{{interval}}</p>
            <div v-for="dat in list">
              <div style="height: 10px"></div>
              <div class="flex center-vertical">
                <Icon size="20" class="prim-color">
                  <CheckboxChecked20Regular/>
                </Icon>
                <div style="width: 5px"></div>
                <p class="reset-margin decent-color">{{dat}}</p>
              </div>
            </div>
          </div>
          <div style="height: 10px"></div>
          <div class="center-horizontal">
            <UIButton :title="selected === id ? 'Ausgewählt' : 'Auswählen'" @click="onSelect" :sec="selected === id"/>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>

import {CheckboxChecked20Regular} from "@vicons/fluent"
import {Icon} from "@vicons/utils"
import UIButton from "@/components/views/UIButton.vue"

export default {
  name: "PricingCard",
  components: {UIButton, Icon, CheckboxChecked20Regular},
  data() {
    return {
    };
  },

  props: {
    title: String,
    sub: String,
    list: Array,
    price: String,
    interval: String,
    id: String,
    selected: String,
    recommend: Boolean
  },

  created() {
  },

  mounted() {


  },


  methods: {

    onSelect() {
      this.$emit('onSelect', this.id)
    }

  }
}
</script>