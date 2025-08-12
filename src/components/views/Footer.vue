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
  color: #8ca3af;
}

.line{
  height: 1px;
  background: rgba(140, 163, 175, 0.5);
}

.info-grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

@media (max-width: 450px) {

  .info-grid{
    grid-template-columns: repeat(1, 1fr);
  }

}

</style>

<template>

  <div class="max-width footer center-horizontal">
    <div class="max-width">
      <div class="center-horizontal">
        <div class="footer-inner">
          <div class="info-grid">
            <div>
              <div class="center-horizontal">
                <Icon size="40" class="white">
                  <Call20Regular/>
                </Icon>
              </div>
              <p class="decent-text center-text">+49 173 3629360</p>
            </div>
            <div>
              <div class="center-horizontal">
                <Icon size="40" class="white">
                  <Mail20Regular/>
                </Icon>
              </div>
              <p class="decent-text center-text">info-handwerker.akoenig@gmx.de</p>
            </div>
            <div>
              <div class="center-horizontal">
                <Icon size="40" class="white">
                  <Location20Regular/>
                </Icon>
              </div>
              <p class="decent-text center-text" style="margin-bottom: 0">In der Lache 44</p>
              <p class="decent-text reset-margin center-text">34295 Edermünde</p>
            </div>
          </div>
        </div>
      </div>
      <div class="center-horizontal">
        <div class="footer-inner">
          <div style="height: 20px"></div>
          <div class="max-width line"></div>
          <div style="height: 30px"></div>
          <div class="space-between">
            <div><p class="decent-text reset-margin">© 2025 Alexander König. | Powered by <a style="text-decoration: none" class="white" href="https://web.inforge.de">Inforge</a></p></div>
            <div class="flex">
              <p class="reset-margin"><a href="/impressum" class="decent-text">Impressum</a></p>
              <div style="width: 20px"></div>
              <p class="reset-margin"><a href="/datenschutz" class="decent-text">Datenschutz</a></p>
            </div>
          </div>
          <div style="height: 20px"></div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>

import {Call20Regular, Mail20Regular, Location20Regular} from "@vicons/fluent"
import {Icon} from "@vicons/utils"

export default {
  name: "Footer",
  components: {Icon, Call20Regular, Mail20Regular, Location20Regular},
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