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
        <div class="footer-inner center-horizontal" style="gap: 30px">
          <div class="flex-1">
            <h3 class="white">Leistungen</h3>
            <p class="decent-text">Pflasterarbeiten</p>
            <p class="decent-text">Terassenarbeiten</p>
            <p class="decent-text">Trockenmauern</p>
            <p class="decent-text">Eingangsgestaltung</p>
          </div>
          <div class="flex-1 center-horizontal">
            <div>
              <h3 class="white">Kontakt</h3>
              <p class="decent-text">+491733629360</p>
              <p class="decent-text">info-handwerker.akoenig@gmx.de</p>
              <p class="decent-text">Musterstraße 123</p>
              <p class="decent-text">12345 Musterstadt</p>
            </div>
          </div>
          <div class="flex-1 right">
            <div>
              <h3 class="white">Folgen Sie uns</h3>
              <div class="center-vertical">
                <Icon size="20" class="decent-text">
                  <Instagram/>
                </Icon>
                <p class="reset-margin"><a target="_blank" href="https://www.instagram.com/" class="decent-text">Instagram</a></p>
              </div>
              <div style="height: 5px"></div>
              <div class="center-vertical">
                <Icon size="20" class="decent-text">
                  <Facebook/>
                </Icon>
                <p class="reset-margin"><a target="_blank" href="https://www.facebook.com/" class="decent-text">Facebook</a></p>
              </div>
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
              <p class="reset-margin"><a href="" class="decent-text">Impressum</a></p>
              <div style="width: 20px"></div>
              <p class="reset-margin"><a href="" class="decent-text">Datenschutz</a></p>
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