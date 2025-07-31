<style scoped>

.leistung-icon{
  width: 40px;
  height: 40px;
  border-radius: 150px;
}

.leistung-line{
  padding: 10px;
  background: white;
  margin-top: 10px;
}

.green{
  background-color: #07956f;
}

.sec{
  background-color: #fcd34d;
}

.blue{
  background-color: #238ad5;
}

</style>

<template>

  <div class="leistung-line round-corner shadow center-vertical">
    <div class="leistung-icon center" :class="color">
      <Icon size="25" class="white">
        <Checkmark20Regular/>
      </Icon>
    </div>
    <div style="width: 10px"></div>
    <p class="reset-margin default-textsize">{{title}}</p>
  </div>

</template>


<script>

import {Checkmark20Regular} from "@vicons/fluent"
import {Icon} from "@vicons/utils"

export default {
  name: "LeistungLine",
  components: {Icon, Checkmark20Regular},
  data() {
    return {
    };
  },

  props: {
    title: String,
    color: String
  },

  created() {
  },

  mounted() {


  },


  methods: {


  }
}
</script>