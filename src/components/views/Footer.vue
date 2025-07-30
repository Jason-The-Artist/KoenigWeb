<style scoped>

.footer{
  padding-top: 30px;
  padding-bottom: 30px;
  background: black;
}

.footer-inner{
  width: 60%;
}

.decent-text{
  color: #ffe6dd;
}

.line{
  height: 1px;
  background: rgba(140, 163, 175, 0.5);
}

@media (max-width: 1000px) {
  .footer-inner{
    width: 95%;
  }
}

@media (max-width: 600px) {

  h3{
    font-size: 15px;
  }

  p{
    font-size: 12px;
  }

}

</style>

<template>

  <div class="max-width footer center-horizontal">
    <div class="max-width">
      <div class="center-horizontal">
        <div class="footer-inner">
          <div class="space-between">
            <div><p class="decent-text reset-margin">© 2025 Inforge</p></div>
            <div class="flex">
              <p class="reset-margin"><a href="https://inforge.de/impressum" class="decent-text">Impressum</a></p>
              <div style="width: 20px"></div>
              <p class="reset-margin"><a href="https://inforge.de/agb" class="decent-text">AGB</a></p>
              <div style="width: 20px"></div>
              <p class="reset-margin"><a href="https://inforge.de/impressum/#datenschutz" class="decent-text">Datenschutz</a></p>
            </div>
          </div>
          <div style="height: 20px"></div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>

import {Instagram, Facebook} from "@vicons/fa"
import {Icon} from "@vicons/utils"

export default {
  name: "Footer",
  components: {Icon, Instagram, Facebook},
  data() {
    return {
    };
  },

  props: {
  },

  created() {
  },

  mounted() {


  },


  methods: {


  }
}
</script>