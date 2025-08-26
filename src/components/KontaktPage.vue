<style scoped>

.header-background{
  background: linear-gradient(90deg, #16a249 0%, #166434 100%);
}

.header-outer{
  height: 370px;
}

.header-inner{
  height: 80%;
}

.main-headline{
  font-size: 80px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.main-smaller-width{
  max-width: 800px;
  width: 100%;
}

.address-card{
  width: 500px;
  padding: 20px;
}

.contact-circle{
  width: 50px;
  height: 50px;
  background: #07956f
}

.contact-space{
  width: 20px;
}

.contact-background{
  padding-top: 100px;
  padding-bottom: 100px;
}

.message-card{
  width: 500px;
  padding: 20px;
}

@media (max-width: 1450px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}
@media (max-width: 1060px) {

  .address-card{
    width: 85%;
  }

  .contact-space{
    height: 10px;
  }

  .contact-column{
    flex-direction: column;
  }

  .message-card{
    width: 85%;
  }
}

@media (max-width: 600px) {
  .main-headline{
    font-size: 10vw;
  }

}

</style>

<template>

  <transition name="toast">
    <Toast color="green" :text="successToastText" v-if="showSuccessToast" style="z-index: 89990" />
  </transition>

  <transition name="toast">
    <Toast color="red" :text="errorToastText" v-if="showErrorToast" style="z-index: 89800" />
  </transition>

  <Nav current="kontakt" class="on-top"/>

  <div class="header-background header-outer center" id="home">
    <div class="header-inner main-content-width center" style="margin-top: 80px">
      <div class="main-smaller-width">
        <h1 class="reset-margin main-headline center-text white">Kontakt</h1>
        <p class="default-textsize center-text decent-white">Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Ich freue mich auf Ihre Nachricht!</p>
      </div>
    </div>
  </div>

  <div style="height: 50px"></div>

  <div class="max-width center-horizontal">
    <div class="header-inner contact-background main-content-width center-horizontal">
      <div>
        <div class="center-horizontal" ref="contact">
          <div class="main-content-width center-horizontal">
            <div>
              <div class="center-horizontal">
                <h1 class="huge-headline center-text">Lassen Sie uns Ihr Projekt besprechen</h1>
              </div>
              <div class="center-horizontal">
                <p class="default-textsize reset-margin center-text decent-color">Rufen Sie uns an, oder schreiben Sie eine Nachricht.</p>
              </div>
            </div>
          </div>
        </div>

        <div style="height: 50px"></div>

        <div class="center-horizontal">
          <div class="main-content-width center-horizontal contact-column">
            <div class="center-horizontal">
              <div class="address-card round-corner">
                <h2 class="reset-margin">Kontaktinformationen</h2>
                <div style="height: 20px"></div>
                <div>
                  <div class="center-vertical">
                    <div class="full-round prim-color-background contact-circle center">
                      <Icon size="35" class="white">
                        <Location20Regular/>
                      </Icon>
                    </div>
                    <div style="width: 20px"></div>
                    <div>
                      <p class="reset-margin bold">Adresse</p>
                      <p class="reset-margin decent-color">Musterstraße 123, 12345 Berlin</p>
                    </div>
                  </div>
                  <div style="height: 20px"></div>
                  <div class="center-vertical">
                    <div class="full-round prim-color-background contact-circle center">
                      <Icon size="35" class="white">
                        <Call20Regular/>
                      </Icon>
                    </div>
                    <div style="width: 20px"></div>
                    <div>
                      <p class="reset-margin bold">Telefon</p>
                      <p class="reset-margin decent-color">+49 173 3629360</p>
                    </div>
                  </div>
                  <div style="height: 20px"></div>
                  <div class="center-vertical">
                    <div class="full-round prim-color-background contact-circle center">
                      <Icon size="35" class="white">
                        <Mail20Regular/>
                      </Icon>
                    </div>
                    <div style="width: 20px"></div>
                    <div>
                      <p class="reset-margin bold">E-Mail</p>
                      <p class="reset-margin decent-color">info-handwerker.akoenig@gmx.de</p>
                    </div>
                  </div>
                </div>
                <div style="height: 20px"></div>
                <div class="contact-opening round-corner">
                  <p class="bold reset-margin">Öffnungszeiten</p>
                  <div style="height: 15px"></div>
                  <p class="decent-color reset-margin">Montag - Freitag: 7:00 - 17:00</p>
                  <div style="height: 10px"></div>
                  <p class="decent-color reset-margin">Samstag & Sonntag: Geschlossen</p>
                </div>
              </div>
            </div>
            <div class="contact-space"></div>
            <div class="center-horizontal">
              <div class="message-card shadow round-corner">
                <h2 class="reset-margin">Nachricht senden</h2>
                <div style="height: 20px"></div>
                <div class="center">
                  <div class="flex-1">
                    <div>
                      <p class="reset-margin">Vorname*</p>
                    </div>
                    <div class="center-horizontal max-width">
                      <div class="input-layer">
                        <input class="input" v-model="firstName"/>
                      </div>
                    </div>
                  </div>
                  <div class="flex-1">
                    <div>
                      <p class="reset-margin">Nachname*</p>
                    </div>
                    <div class="center-horizontal max-width">
                      <div class="input-layer">
                        <input class="input" v-model="lastName"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="height: 10px"></div>
                <div>
                  <p class="reset-margin">E-Mail*</p>
                </div>
                <div class="center-horizontal max-width">
                  <div class="input-layer">
                    <input class="input" v-model="email">
                  </div>
                </div>
                <div style="height: 10px"></div>
                <div>
                  <p class="reset-margin">Telefon</p>
                </div>
                <div class="center-horizontal max-width">
                  <div class="input-layer">
                    <input class="input" v-model="telephone">
                  </div>
                </div>
                <div style="height: 10px"></div>
                <div>
                  <p class="reset-margin">Ihr Anliegen*</p>
                </div>
                <div class="center-horizontal max-width">
                  <textarea class="textarea" v-model="message" style="min-height: 100px; font-size: 15px"/>
                </div>
                <div style="height: 10px"></div>
                <p class="reset-margin">Beim Absenden des Kontaktformulares stimme ich die <a href="/datenschutz">Datenschutzbestimmungen</a> zu.</p>
                <div style="height: 10px"></div>
                <div class="center-horizontal" v-if="errorText !== ''">
                  <p class="reset-margin red">{{errorText}}</p>
                  <div style="height: 10px"></div>
                </div>
                <div class="center-horizontal">
                  <UIButton title="Absenden" @click="onSubmit"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer/>

</template>


<script>

import Nav from "@/components/views/Nav.vue"
import UIButton from "@/components/views/UIButton.vue"
import {Icon} from "@vicons/utils"
import {Mail20Regular, Location20Regular, Call20Regular} from "@vicons/fluent"
import LeistungCard from "@/components/views/LeistungCard.vue";
import Footer from "@/components/views/Footer.vue"
import GalleryCard from "@/components/views/GalleryCard.vue"
import LeistungLine from "@/components/views/LeistungLine.vue"
import ProjectCard from "@/components/views/ProjectCard.vue"
import axios from "axios";
import Toast from "@/components/views/Toast.vue";

export default {
  name: "KontaktPage",
  components: {
    Toast,
    ProjectCard,
    LeistungLine,
    GalleryCard,
    Footer, LeistungCard: LeistungCard,
    Icon, UIButton, Nav, Mail20Regular, Location20Regular, Call20Regular},
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      telephone: "",
      errorText: "",
      showSuccessToast: false,
      showErrorToast: false,
      successToastText: "",
      errorToastText: "",
    };
  },

  created() {
  },

  mounted() {
  },

  methods: {
    onSubmit(){

      if(this.firstName === "" || this.lastName === "" || this.email === "" || this.message === ""){
        this.errorText = "Es müssen alle Felder, die mit * markiert sind, ausgefüllt werden."
        return
      }

      this.errorText = ""

      const url = import.meta.env.VITE_CONTACT_URL;
      const data = {
        name: this.firstName + " " + this.lastName,
        email: this.email,
        telephone: this.telephone,
        message: this.message,
        receiver: "info-handwerker.akoenig@gmx.de"
      };

      axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        console.log('Erfolg:', response.data);
        this.successToastText = "Ihre Nachricht wurde erfolgreich gesendet."
        this.displaySuccessToast()
        this.firstName = ""
        this.lastName = ""
        this.email = ""
        this.message = ""
        this.telephone = ""
      }).catch(error => {
        console.error('Fehler:', error);
        this.errorToastText = "Es ist ein Fehler aufgetreten. Bitte versuchen sie es später erneut."
        this.displayErrorToast()
      });
    },

    displaySuccessToast() {
      this.showSuccessToast = true
      setTimeout(() => {
        this.showSuccessToast = false
      }, 4000)
    },

    displayErrorToast() {
      this.showErrorToast = true
      setTimeout(() => {
        this.showErrorToast = false
      }, 4000)
    },
  }
}
</script>