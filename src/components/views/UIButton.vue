<style scoped>
.ui-button {
  display: flex;
  width: fit-content;
  padding-left: 15px;
  padding-right: 15px;
  height: 40px;
  margin: 2px;
  min-width: 220px;

  border: 1px solid transparent;

  border-radius: 5px;

  cursor: pointer;
}

.ui-background{
  background-color: #07956f;
  transition: background-color 0.2s ease;
}

.text-color{
  color: white;
}

.ui-button-text {
  font-size: 15px;
}

.hover-left{
  transition: transform 0.2s ease;
}

.hover-right{
  transition: transform 0.2s ease;
}

.ui-button:hover .hover-left{
  transform: translateX(5px);
}

.ui-button:hover .hover-right{
  transform: translateX(-5px);
}


.ui-background:hover{
  background-color: #057859;
}

.ui-button-sec{
  background: transparent;
  border: 1px solid #07956f;
  transition: background-color 0.2s ease;
}

.ui-button-sec:hover{
  background-color: rgba(10, 220, 166, 0.1);
}

.brighter{
  border: 1px solid #34d198;
}

.brighter-text{
  color: #34d198;
}

.white-prim{
  background-color: white;
}

.white-prim:hover{
  background-color: #e8e8e8;
}

.white-sec{
  border: 1px solid white;
}

.text-prim{
  color: #057859;
}

.white-text{
  color: white;
}

</style>

<template>

  <button class="ui-button shadow pixel-border-orange center-horizontal center prim-color-background" :class="sec ? 'ui-button-sec ' + css : 'ui-background ' + css" @click="click">
    <span v-if="left" class="center-vertical">
      <Icon size="20" class="white hover-right" :class="textCss">
        <slot></slot>
      </Icon>
      <span style="width: 10px"></span>
    </span>
    <span class="ui-button-text default-font" :class="sec ? 'prim-color ' + textCss : 'text-color ' + textCss">{{ title }}</span>
    <span v-if="right" class="center-vertical">
      <span style="width: 10px"></span>
      <Icon size="20" class="white hover-left" :class="textCss">
        <slot></slot>
      </Icon>
    </span>
  </button>


</template>


<script>

import {ArrowRight20Regular} from "@vicons/fluent"
import {Icon} from "@vicons/utils"

export default {
  name: "UIButton",
  components: {Icon, ArrowRight20Regular},
  data() {
    return {
    };
  },

  props: {
    title: String,
    right: Boolean,
    left: Boolean,
    sec: Boolean,
    bright: Boolean,
    css: String,
    textCss: String
  },

  created() {
  },
  mounted() {
    if(this.css === ""){
      this.customCss = "button-background"
    }else{
      this.customCss = this.css;
    }
  },



  methods: {

    click() {
      this.$emit("clicked")
    },
  },
}
</script>