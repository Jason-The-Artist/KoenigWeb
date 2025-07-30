<style scoped>

.background-image{
  margin-top: 30px;
  width: 80%;
  max-width: 600px;
}

.main-field{
  width: 600px;
}



.webforge-view{
  width: 70%;
  height: 600px;
  border-radius: 20px;
  overflow: hidden;
}

.example-view{
  width: 90%;
}

.webforge-background-image{
  flex: 1;
  object-fit: contain;
  width: 100%;
  display: block;
  min-width: 1100px;
}

.fn-head{
  width: fit-content;
  padding: 100px;
  padding-top: 50px;
  border-radius: 20px;
}

.fn-headline{
  font-size: 50px;
}

.fn-sub{
  font-size: 30px;
  font-weight: bold
}

.fn-footer{
  width: fit-content;
  border-radius: 200px;
  background: rgba(0, 0, 0, 0.5);
  padding-right: 20px;
  padding-left: 20px;
  backdrop-filter: blur(7px);
  margin: 10px;
}

.fn-footer-text-size{
  font-size: 20px;
}

.ref-image{
  border: solid 1px white;
  width: 600px;
  border-radius: 20px;
}

.pricing-grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.grid2{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.pricing-view{
  transform: translateY(0px);
  min-height: 400px;
  background: rgba(85, 85, 85, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 10px;
  border: solid 2px;
  border-color: transparent;
  transition: transform 0.2s ease-out, border-color 0.2s linear;
}

.order-button{
  padding: 10px;
  border: solid 2px #ffa600;
  font-size: 25px;
  transform: translateY(-50px);

  border-radius: 100px;
}

.pricing-view:hover{
  transform: translateY(-10px);
  border-color: #ffa600;
}

.fav-border{
  border-color: #ff5900;
}

.pricing-view-selected{
  border: solid 2px #20c2e4;
}

.background-fade{
  width: 100%;
  height: 300px;
  background: linear-gradient(transparent, #000000);
}

.contact-width{
  width: 95%;
  max-width: 600px;
}

.background-object{
  width: 100%;
  height: 40vh;
  background: rgba(255, 136, 0, 0.3);
}

.background-blur{
  backdrop-filter: blur(80px);
}

.blur-element{
  width: 70%;
  height: 70%;
  background: rgba(255, 89, 0, 0.4);
  border-radius: 20px;
}

.main-headline{
  font-size: 70px;
}

.mobile-main{
  flex-direction: row;
}

.main-space{
  height: 200px;
}

.main-image{
  width: 90%
}

.half-width-ref{
  width: 50%;
}

.mobile-column{
  flex-direction: row;
}

.mobile-column-reverse{
  flex-direction: row;
}

.fav-pricing{
  width: 170px;
  height: 35px;
  background: #ff5900;
  rotate: -40deg;
  transform: translate(-45px, -20px);
  color: white;
  font-weight: bold;
  font-size: 18px;
}

.main-button-spacing{
  width: 20px;
}

@media (max-width: 1550px) {
  .pricing-grid{
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1370px) {

  .ref-image{
    width: 95%;
    border-radius: 20px;
  }
}

@media (max-width: 1230px) {
  .grid2{
    grid-template-columns: repeat(1, 1fr);
  }
  .mobile-main{
    flex-direction: column;
  }
  .main-space{
    height: 50px;
  }

  .webforge-view{
    width: 95%;
    height: 600px;
  }
}

@media (max-width: 1150px) {


  .webforge-view{
    height: 1000px;
  }

}

@media (max-width: 1110px) {
  .half-width-ref{
    width: 100%;
  }

  .main-headline{
    text-align: center;
  }

  .mobile-column{
    flex-direction: column;
  }

  .mobile-column-reverse{
    flex-direction: column-reverse;
  }

  .fn-head{
    width: fit-content;
    padding: 10px;
    padding-top: 50px;
    border-radius: 20px;
  }
}

@media (max-width: 1000px) {
  .pricing-grid{
    grid-template-columns: repeat(1, 1fr);
  }
}


@media (max-width: 780px) {

  .fn-headline{
    font-size: 10vw;
  }

  .fn-sub{
    font-size: 4vw;
  }

  .main-button-column{
    flex-direction: column;
  }

}

@media (max-width: 670px) {
  .main-headline{
    font-size: 10vw;
  }
  .main-image{
    width: 90vw;
  }
  .main-field{
    width: 100%;
  }
}


@media (max-width: 510px) {
  .order-button{
    border: solid 2px #ffa600;
    font-size: 4vw;

    border-radius: 100px;
  }
  .webforge-view{
    height: 1200px;
  }
}

</style>

<template>

  <transition name="toast">
    <Toast color="green" :text="successToast" v-if="showSuccessToast" style="z-index: 8998" />
  </transition>

  <transition name="toast">
    <Toast color="red" :text="errorToast" v-if="showErrorToast" style="z-index: 8999" />
  </transition>

  <div class="relative max-width" style="height: 100vh">

    <div class="overflow-hidden max-width fixed max-height">
      <div class="center max-height">
        <div class="background-object"></div>
      </div>
    </div>

    <div class="absolute max-width max-height">
      <div class="fixed background-blur max-width max-height"></div>
    </div>

    <div class="absolute max-width max-height">
      <div class="fixed max-width max-height">
        <div class="particle-container">
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div class="absolute max-width" v-if="fade">

        <div class="relative">

          <div>
            <Header :isWebforge="true"/>

            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fillOpacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

            <div class="center-horizontal">
              <Vue3Lottie :animationData="lottieBackground" :loop="false" class="background-image"/>
            </div>
            <div class="center-horizontal">
              <div class="center-horizontal mobile-main">
                <div class="main-field center">
                  <h1 class="main-headline eras">Professionelle <span class="prim-color">Webentwicklung</span> für Ihr Unternehmen</h1>
                </div>
                <div class="main-field center">
                  <img src="../assets/main-example.png" class="main-image">
                </div>
              </div>
            </div>

            <div style="height: 100px"></div>
          </div>
        </div>

        <div style="height: 20px"></div>

        <div class="center main-button-column">
          <UIButton title="Jetzt Webseite bestellen" @click="onPricing"/>
          <div class="main-button-spacing"></div>
          <div class="fn-footer center pointer" style="padding: 10px; padding-left: 20px; padding-right: 20px;" @click="onReference">
            <h2 style="margin: 5px" class="fn-footer-text-size reset-margin prim-color">Website-Beispiele ansehen</h2>
            <Icon class="fn-footer-text-size prim-color">
              <ChevronsRight/>
            </Icon>
          </div>
        </div>

        <div class="center-horizontal">
          <div class="webforge-view relative center">
            <div class="absolute max-width max-height">
              <div class="center-horizontal">
                <div class="fn-head">
                  <div class="center-horizontal">
                    <h1 class="reset-margin fn-headline prim-color eras center-text">Was ist Inforge Web Service?</h1>
                  </div>
                  <div class="center-horizontal center-text">
                    <p class="default-textsize decent-color">
                      Über Inforge Web Service kann man individuelle Webseiten bestellen und optional direkt hosten lassen.<br>
                      Jede Webseite wird individuell nach den Anforderungen unserer Kundinnen und Kunden entwickelt – maßgeschneidert und zielgerichtet.<br>
                      Inforge Web Service bietet sowohl einfache One-Pager als auch komplexe Webseiten mit eigener Serverlogik, wie z.&nbsp;B. Kontakt- oder Bestellformulare.
                    </p>
                  </div>
                  <div class="center-horizontal center-text">
                    <h2 class="fn-sub" style="margin-top: 0; font-size: 30px; margin-bottom: 10px">Inforge Web Services auf einem Blick</h2>
                  </div>
                  <div class="center-horizontal">
                    <div>
                      <div class="center-vertical">
                        <Icon class="fn-sub prim-color">
                          <ArrowBigRight/>
                        </Icon>
                        <p class="reset-margin default-textsize decent-color">Individuell entwickelte Webseiten</p>
                      </div>
                      <div class="center-vertical">
                        <Icon class="fn-sub prim-color">
                          <ArrowBigRight/>
                        </Icon>
                        <p class="reset-margin default-textsize decent-color">Hosting der Webseite mit eigener Domain</p>
                      </div>
                      <div class="center-vertical">
                        <Icon class="fn-sub prim-color">
                          <ArrowBigRight/>
                        </Icon>
                        <p class="reset-margin default-textsize decent-color">Service für kleinere Änderungen der Webseite</p>
                      </div>
                      <div class="center-vertical">
                        <Icon class="fn-sub prim-color">
                          <ArrowBigRight/>
                        </Icon>
                        <p class="reset-margin default-textsize decent-color">Einfache Bestellung und Bereitstellung der Webseite</p>
                      </div>
                    </div>
                  </div>
                  <div class="center-horizontal">
                    <div class="fn-footer center pointer" style="padding: 10px; padding-left: 20px; padding-right: 20px;" @click="onPricing">
                      <h2 style="margin: 5px" class="fn-footer-text-size reset-margin prim-color">Zu den Angeboten</h2>
                      <Icon class="fn-footer-text-size prim-color">
                        <ChevronsRight/>
                      </Icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative max-width max-height center-horizontal on-bottom">
              <div class="flex max-height center absolute center-horizontal">
                <div class="blur-element webforge-background-image"></div>
              </div>
            </div>
          </div>
        </div>

        <div style="height: 100px"></div>

        <div class="center-horizontal" ref="targetLeistung">
          <div style="width: 90%" class="center-horizontal">
            <div class="max-width">
              <div class="center-horizontal">
                <div class="grid2 max-width">
                  <transition name="faderight">
                    <WebLeistungView is-left img="calendar" text="Bei Inforge Web Service kann man eine Webseite ganz ohne persönliches Treffen oder Meeting bestellen. Während der Bestellung gibt man einfach die eigenen Anforderungen und Wünsche an, gerne auch mit Beispielen wie Screenshots oder Skizzen."/>
                  </transition>
                  <transition name="fadeleft">
                    <WebLeistungView img="speech" text="Während der Bearbeitung der Bestellung werden die Entwicklungsstände gezeigt, sodass man direkt Feedback geben kann. So werden alle Wünsche und Verbesserungsvorschläge berücksichtigt."/>
                  </transition>
                </div>
              </div>
              <div style="height: 20px"></div>
              <div class="center-horizontal">
                <div class="grid2 max-width">
                  <transition name="faderight">
                    <WebLeistungView is-left img="server" text="Inforge Web Service bietet ein Hosting-System, bei der die Webseite direkt nach der Fertigstellung auf den Inforge-Servern gehostet werden kann, ohne dass man sich selbst darum kümmern muss. Dabei bietet Inforge Web Service auch eigene Domains an."/>
                  </transition>
                  <transition name="fadeleft">
                    <WebLeistungView img="gear" text="Inforge Web Service bietet einen Service, mit dem spezielle Anwendungen wie Kontaktformulare, dynamische Inhalte und mehr gehostet werden können. Inforge Web Service übernimmt dabei vollständig die Entwicklung und Bereitstellung dieser Systeme."/>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="height: 100px"></div>

        <div class="center-horizontal" ref="targetReference">
          <transition name="fade">
            <div class="example-view center-horizontal">
              <div>
                <div class="center-horizontal">
                  <h2 class="center-text" style="font-size: 60px">Website-Beispiele</h2>
                </div>

                <div class="center mobile-column-reverse">
                  <div class="half-width-ref center">
                    <div class="center-horizontal">
                      <img src="../assets/material/ref5.jpg" class="ref-image">
                    </div>
                  </div>
                  <div class="half-width-ref center">
                    <div>
                      <div class="center-horizontal">
                        <h2 style="font-size: 40px" class="center-text reset-margin">Webseite für Gastronomien</h2>
                      </div>
                      <div class="center-horizontal">
                        <p class="reset-margin"><a target="_blank" href="https://test2.inforge.de" class="code-font default-textsize">Diese Webseite besuchen -></a></p>
                      </div>
                      <div style="height: 20px"></div>
                      <div class="center-horizontal">
                        <p class="reset-margin center-text default-textsize">Diese Webseite zeigt, wie eine Online-Presänz einer Gastronomie (hier: Pizzeria) aussehen könnte. Es handelt sich hier um eine Single-Page-Webseite mit einem Kontaktformular.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div style="height: 50px"></div>

                <div class="center mobile-column">
                  <div class="half-width-ref center">
                    <div>
                      <div class="center-horizontal">
                        <h2 style="font-size: 40px" class="center-text reset-margin">Webseite für ein Handwerker</h2>
                      </div>
                      <div class="center-horizontal">
                        <p class="reset-margin"><a target="_blank" href="https://peter-enns.com" class="code-font default-textsize">Diese Webseite besuchen -></a></p>
                      </div>
                      <div style="height: 20px"></div>
                      <div class="center-horizontal">
                        <p class="reset-margin center-text default-textsize">Hier sieht man ein Beispiel für eine Webseite eines Handwerksbetriebs. In diesem Fall wurde eine Webseite für den Beruf „Maler/Raumausstatter“ erstellt. Dabei wurde gezielt mit Farben und Animationen gearbeitet. Diese Seite ist ein Beispiel für eine Single-Page-Webseite, die als Portfolio für Handwerksbetriebe dienen kann.</p>
                      </div>
                    </div>
                  </div>
                  <div class="half-width-ref center">
                    <div class="center-horizontal">
                      <img src="../assets/material/ref3.jpg" class="ref-image">
                    </div>
                  </div>
                </div>

                <div style="height: 50px"></div>

                <div class="center mobile-column-reverse">
                  <div class="half-width-ref center">
                    <div class="center-horizontal">
                      <img src="../assets/material/ref1.jpg" class="ref-image">
                    </div>
                  </div>
                  <div class="half-width-ref center">
                    <div>
                      <div class="center-horizontal">
                        <h2 style="font-size: 40px" class="center-text reset-margin">Webseite für mehr Inhalt</h2>
                      </div>
                      <div class="center-horizontal">
                        <p class="reset-margin"><a target="_blank" href="https://malertest.inforge.de" class="code-font default-textsize">Diese Webseite besuchen -></a></p>
                      </div>
                      <div style="height: 20px"></div>
                      <div class="center-horizontal">
                        <p class="reset-margin center-text default-textsize">Diese Webseite ist ein gutes Beispiel für eine Multi-Page-Webseite. Auf der Startseite findet man die wichtigsten Informationen sowie kleine Vorschauen auf ausgewählte Inhalte. Über das klicken eines Projektes bei <a target="_blank" href="https://malertest.inforge.de/#projects">Unsere Projekte</a> kommt man auf eine eigene Seite, welche das Projekt genauer zeigt.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div style="height: 50px"></div>

                <div class="center mobile-column">
                  <div class="half-width-ref center">
                    <div>
                      <div class="center-horizontal">
                        <h2 style="font-size: 40px" class="center-text reset-margin">Inforge als Multi-Page-Webseite</h2>
                      </div>
                      <div class="center-horizontal">
                        <p class="reset-margin"><a target="_blank" href="https://peter-enns.com" class="code-font default-textsize">Diese Webseite besuchen -></a></p>
                      </div>
                      <div style="height: 20px"></div>
                      <div class="center-horizontal">
                        <p class="reset-margin center-text default-textsize">Auch Inforge selbst, die Mutterplattform von Inforge Web Service, ist ein gutes Beispiel für eine Multi-Page-Webseite. Auf der Hauptseite befinden sich kleine Vorschauen zu verschiedenen Themen, deren vollständige Inhalte auf separaten Unterseiten dargestellt werden. Zusätzlich finden sich dort auch Inhalte, die zu wenig Umfang für eine eigene Unterseite haben, aber dennoch zentral platziert sind.</p>
                      </div>
                    </div>
                  </div>
                  <div class="half-width-ref center">
                    <div class="center-horizontal">
                      <img src="../assets/material/ref4.jpg" class="ref-image">
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </transition>
        </div>

        <div style="height: 100px"></div>

        <div class="center-horizontal" ref="pricingLayout" id="pricing">
          <transition name="fade">
            <div style="width: 90%">
              <div class="center-horizontal">
                <h2 class="center-text" style="font-size: 60px;">Preise / Pläne</h2>
              </div>
              <div class="center-horizontal pricing-grid">
                <div class="flex pricing-view" style="flex-direction: column" :class="priceSelectionMode === 'basic' ? 'pricing-view-selected' : ''">
                  <div>
                    <div class="center-horizontal">
                      <h2 class="center-text prim-color reset-margin" style="font-size: 40px;">Basic</h2>
                    </div>
                    <div class="center-horizontal">
                      <h2 class="center-text reset-margin" style="font-size: 20px;">Single-Page-Webseite</h2>
                    </div>
                    <div class="center-horizontal">
                      <h2 style="font-size: 40px; margin-bottom: 0">ab 500€</h2>
                    </div>
                    <div class="center-horizontal">
                      <p style="margin-top: 0" class="center-text">Einmalig</p>
                    </div>
                    <div class="center-horizontal">
                      <div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Webseite mit 1 Seite</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Einfache Animationen</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Gesamtspeichergröße max. 10MB</p>
                        <div style="height: 10px"></div>
                      </div>
                    </div>
                  </div>
                  <div class="center-horizontal flex-1 max-height bottom">
                    <UIButton title="Jetzt auswählen" @click="onSelect('basic')"/>
                  </div>
                </div>


                <div class="flex pricing-view overflow-hidden fav-border" style="flex-direction: column" :class="priceSelectionMode === 'medium' ? 'pricing-view-selected' : ''">
                  <div class="absolute fav-pricing center">
                    Empfehlung
                  </div>
                  <div>
                    <div class="center-horizontal">
                      <h2 class="center-text prim-color reset-margin" style="font-size: 40px;">Medium</h2>
                    </div>
                    <div class="center-horizontal">
                      <h2 class="center-text reset-margin" style="font-size: 20px;">Funktionale Single-Page-Webseite</h2>
                    </div>
                    <div class="center-horizontal">
                      <h2 style="font-size: 40px; margin-bottom: 0">ab 700€</h2>
                    </div>
                    <div class="center-horizontal">
                      <p style="margin-top: 0" class="center-text">Einmalig</p>
                    </div>
                    <div class="center-horizontal">
                      <div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Webseite mit 1 Seite</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Erweiterte Funkrionen wie:</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color" style="margin-left: 20px">-</span> Kontaktformular</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color" style="margin-left: 20px">-</span> Dynamische Inhalte</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color" style="margin-left: 20px">-</span> Newsletter</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color" style="margin-left: 20px">-</span> Individuelle Funktionen je nach Anfrage</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Einfache Animationen</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Gesamtspeichergröße max. 20MB</p>
                        <div style="height: 10px"></div>
                      </div>
                    </div>
                  </div>
                  <div class="center-horizontal flex-1 max-height bottom">
                    <UIButton title="Jetzt auswählen" @click="onSelect('medium')"/>
                  </div>
                </div>

                <div class="flex pricing-view" style="flex-direction: column" :class="priceSelectionMode === 'pro' ? 'pricing-view-selected' : ''">
                  <div>
                    <div class="center-horizontal">
                      <h2 class="center-text prim-color reset-margin" style="font-size: 40px;">Pro</h2>
                    </div>
                    <div class="center-horizontal">
                      <h2 class="center-text reset-margin" style="font-size: 20px;">Funktionale Webseite</h2>
                    </div>
                    <div class="center-horizontal">
                      <h2 style="font-size: 40px; margin-bottom: 0">ab 1200€</h2>
                    </div>
                    <div class="center-horizontal">
                      <p style="margin-top: 0" class="center-text">Einmalig</p>
                    </div>
                    <div class="center-horizontal">
                      <div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Webseite mit mehreren Seiten</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Erweiterte Funkrionen wie:</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color" style="margin-left: 20px">-</span> Kontaktformular</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color" style="margin-left: 20px">-</span> Dynamische Inhalte</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color" style="margin-left: 20px">-</span> Newsletter</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color" style="margin-left: 20px">-</span> Individuelle Funktionen je nach Anfrage</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Moderne Animationen</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Gesamtspeichergröße max. 100MB</p>
                        <div style="height: 10px"></div>
                      </div>
                    </div>
                  </div>
                  <div class="center-horizontal flex-1 max-height bottom">
                    <UIButton title="Jetzt auswählen" @click="onSelect('pro')"/>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>



        <div class="center-horizontal" ref="hostingLayout">
          <transition name="fade">
            <div style="width: 90%" v-if="showHostingBasic">
              <div class="center-horizontal">
                <h2 class="center-text" style="font-size: 60px;">Hosting</h2>
              </div>
              <div class="center-horizontal grid2">
                <div class="flex pricing-view" style="flex-direction: column">
                  <div>
                    <div class="center-horizontal">
                      <h2 class="center-text prim-color reset-margin" style="font-size: 40px;">Kein Hosting</h2>
                    </div>
                    <div class="center-horizontal">
                      <h2 style="font-size: 40px; margin-bottom: 0">0€</h2>
                    </div>
                    <div class="center-horizontal">
                      <div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Keine Bereitstellung einer Domain</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Kein Hosting der Webseite</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Kein Service für kleine Änderungen</p>
                        <div style="height: 10px"></div>
                      </div>
                    </div>
                  </div>
                  <div class="center-horizontal flex-1 max-height bottom">
                    <UIButton title="Jetzt auswählen" @click="onSelectHosting('none')"/>
                  </div>
                </div>



                <div class="flex pricing-view overflow-hidden fav-border" style="flex-direction: column">
                  <div class="absolute fav-pricing center">
                    Empfehlung
                  </div>
                  <div>
                    <div class="center-horizontal">
                      <h2 class="center-text prim-color reset-margin" style="font-size: 40px;">Standart</h2>
                    </div>
                    <div class="center-horizontal">
                      <h2 style="font-size: 40px; margin-bottom: 0">15€</h2>
                    </div>
                    <div class="center-horizontal">
                      <p style="margin-top: 0" class="center-text">Monatliche Zahlung<br>Monatlich kündbar</p>
                    </div>
                    <div class="center-horizontal">
                      <p style="margin-top: 0" class="center-text">Domainpreise nicht inklusive.</p>
                    </div>
                    <div class="center-horizontal">
                      <div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Hosting der Webseite</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Eigene Domain (nach Bedarf)</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Inkl. Service für kleine Änderungen an der Webseite</p>
                        <div style="height: 10px"></div>
                      </div>
                    </div>
                    <div class="center-horizontal">
                      <p>Das Abo startet erst nach Fertigstellung der Webseite.</p>
                    </div>
                  </div>
                  <div class="center-horizontal flex-1 max-height bottom">
                    <UIButton title="Jetzt auswählen" @click="onSelectHosting('standard')"/>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>



        <div class="center-horizontal">
          <transition name="fade">
            <div style="width: 90%" v-if="showHostingPro">
              <div class="center-horizontal">
                <h2 class="center-text" style="font-size: 60px;">Hosting</h2>
              </div>
              <div class="center-horizontal grid2">
                <div class="flex pricing-view" style="flex-direction: column">
                  <div>
                    <div class="center-horizontal">
                      <h2 class="center-text prim-color reset-margin" style="font-size: 40px;">Kein Hosting</h2>
                    </div>
                    <div class="center-horizontal">
                      <h2 style="font-size: 40px; margin-bottom: 0">0€</h2>
                    </div>
                    <div class="center-horizontal">
                      <div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Keine Bereitstellung einer Domain</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Kein Hosting der Webseite</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Kein Hosting der Funtkionen (Backend)</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Kein Service für kleine Änderungen</p>
                        <div style="height: 10px"></div>
                      </div>
                    </div>
                  </div>
                  <div class="center-horizontal flex-1 max-height bottom">
                    <UIButton title="Jetzt auswählen" @click="onSelectHosting('none')"/>
                  </div>
                </div>



                <div class="flex pricing-view overflow-hidden fav-border" style="flex-direction: column">
                  <div class="absolute fav-pricing center">
                    Empfehlung
                  </div>
                  <div>
                    <div class="center-horizontal">
                      <h2 class="center-text prim-color reset-margin" style="font-size: 40px;">Premium</h2>
                    </div>
                    <div class="center-horizontal">
                      <h2 style="font-size: 40px; margin-bottom: 0">ab 20€</h2>
                    </div>
                    <div class="center-horizontal">
                      <p style="margin-top: 0" class="center-text">Monatliche Zahlung<br>Monatlich kündbar</p>
                    </div>
                    <div class="center-horizontal">
                      <p style="margin-top: 0" class="center-text">Domainpreise nicht inklusive.</p>
                    </div>
                    <div class="center-horizontal">
                      <div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Hosting der Webseite</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Hosting der Funtkionen (Backend)</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Eigene Domain (nach Bedarf)</p>
                        <div style="height: 10px"></div>
                        <p class="reset-margin code-font"><span class="prim-color">-></span> Inkl. Service für kleine Änderungen</p>
                        <div style="height: 10px"></div>
                      </div>
                    </div>
                    <div class="center-horizontal">
                      <p>Das Abo startet erst nach Fertigstellung der Webseite.</p>
                    </div>
                  </div>
                  <div class="center-horizontal flex-1 max-height bottom">
                    <UIButton title="Jetzt auswählen" @click="onSelectHosting('premium')"/>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <div style="height: 100px"></div>

        <div class="center-horizontal" id="contact">
          <div class="contact-width">
            <div class="center-horizontal">
              <h2 class="center-text reset-margin" style="font-size: 60px;">Noch Fragen?</h2>
            </div>
            <div class="center-horizontal">
              <p class="default-textsize center-text">Wir setzen uns gerne mit Ihnen in Verbindung.</p>
            </div>

            <div style="height: 20px"></div>
            <div>
              <p class="reset-margin">Vorname & Nachname</p>
            </div>
            <div v-if="inputError === 'name'">
              <p class="reset-margin red">{{inputErrorMessage}}</p>
            </div>
            <div class="center-horizontal max-width">
              <div class="input-layer" :class="inputError === 'name' ? 'input-error' : ''">
                <input class="input" v-model="contactName"/>
              </div>
            </div>
            <div style="height: 10px"></div>
            <div>
              <p class="reset-margin">E-Mail Adresse</p>
            </div>
            <div v-if="inputError === 'email'">
              <p class="reset-margin red">{{inputErrorMessage}}</p>
            </div>
            <div class="center-horizontal max-width">
              <div class="input-layer" :class="inputError === 'email' ? 'input-error' : ''">
                <input class="input" v-model="contactEmail"/>
              </div>
            </div>
            <div style="height: 10px"></div>
            <div>
              <p class="reset-margin">Ihr Anliegen</p>
            </div>
            <div v-if="inputError === 'message'">
              <p class="reset-margin red">{{inputErrorMessage}}</p>
            </div>
            <div class="center-horizontal max-width">
              <textarea class="textarea" style="min-height: 100px; font-size: 15px" v-model="contactMessage" :class="inputError === 'message' ? 'input-error' : ''"/>
            </div>
            <div style="height: 10px"></div>
            <div class="center-horizontal">
              <div class="center-horizontal" v-if="isLoadingContact">
                <svg viewBox="25 25 50 50" class="svg">
                  <circle class="circle" r="20" cy="50" cx="50"></circle>
                </svg>
              </div>
              <UIButton v-else title="Absenden" @click="onContact"/>
            </div>

          </div>
        </div>



        <div style="height: 100px"></div>

        <Footer/>

      </div>
    </transition>
  </div>


</template>


<script>
import NavHeader from "@/components/views/NavHeader.vue";
import UiButtonOld from "@/components/views/UIButtonOld.vue";
import Header from "@/components/views/Header.vue";
import { Vue3Lottie } from 'vue3-lottie'
import lottieBackground from '../assets/lottie/background.json'
import {ArrowBigRight, ChevronsRight} from "@vicons/tabler"
import {Icon} from "@vicons/utils";
import FooterOld from "@/components/views/FooterOld.vue"
import WebLeistungView from "@/components/views/WebLeistungView.vue";
import Toast from "@/components/views/Toast.vue"

export default {
  name: "MainPage",
  components: {
    Toast,
    WebLeistungView,
    Footer: FooterOld,
    Icon, Header, UIButton: UiButtonOld, Vue3Lottie, ArrowBigRight, ChevronsRight },
  data() {
    return {
      fade: true,
      priceSelectionMode: 0,
      showHostingBasic: false,
      showHostingPro: false,
      contactName: "",
      contactEmail: "",
      contactMessage: "",
      inputError: "none",
      inputErrorMessage: "",
      socket: null,
      successToast: "",
      showSuccessToast: false,
      errorToast: "",
      showErrorToast: false,
      isServerOnline: false,
      isLoadingContact: false,
    };
  },

  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll()
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  setup(){
    return {
      lottieBackground,
    }
  },

  mounted() {


    this.sub = this.getCookies("sub")

    setTimeout(() => {
      this.fade = true
    },2000)
    //this.fade = true





    this.socket = new WebSocket(import.meta.env.VITE_INFORGESERVER_URL);

    this.socket.addEventListener('open', (event) => {
      this.isServerOnline = true;
    });

    this.socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data)
      if(window.location.href.includes("localhost")){
        console.log(message)
      }
      if (message.func === "contactStatus") {
        this.isLoadingContact = false
        if(message.status === "success"){
          this.contactName = ""
          this.contactEmail = ""
          this.contactMessage = ""

          this.successToast = "Dein Anliegen wurde erfolgreich übermittelt."
          this.displaySuccessToast()
        }else{
          this.errorToast = "Es ist ein interner Serverfehler aufgetreten. Bitte versuche es später erneut."
          this.displayErrorToast()
        }
      }
    });

  },

  methods: {

    onContact(){
      this.inputError = ""
      if(this.contactName.trim() === ""){
        this.inputError = "name"
        this.inputErrorMessage = "Das Textfeld dar nicht leer sein."
        return
      }
      if(this.contactName.length > 80){
        this.inputError = "name"
        this.inputErrorMessage = "Das Zeichenlimit sind 80 Zeichen."
        return
      }
      if(this.contactEmail.trim() === ""){
        this.inputError = "email"
        this.inputErrorMessage = "Das Textfeld dar nicht leer sein."
        return
      }
      if(this.contactEmail.length > 80){
        this.inputError = "email"
        this.inputErrorMessage = "Das Zeichenlimit sind 80 Zeichen."
        return
      }
      if(!this.contactEmail.toLowerCase()
          .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )){
        this.inputError = "email"
        this.inputErrorMessage = "Dies ist kein gültiges E-Mail-Adressenformat."
        return
      }
      if(this.contactMessage.trim() === ""){
        this.inputError = "message"
        this.inputErrorMessage = "Das Textfeld dar nicht leer sein."
        return
      }
      if(this.contactMessage.length > 1000){
        this.inputError = "message"
        this.inputErrorMessage = "Das Zeichenlimit sind 1000 Zeichen."
        return
      }

      let dat = {
        type: "engine",
        func: "contactMessage",
        name: this.contactName,
        email: this.contactEmail,
        message: this.contactMessage,
      }
      this.isLoadingContact = true
      if(this.isServerOnline){
        //this.send(dat)
      }else{
        this.errorToast = "Dieser Service ist zurzeit nicht erreichbar."
        this.displayErrorToast()
      }
    },

    onPricing(){
      this.$refs.pricingLayout.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    },

    onReference(){
      this.$refs.targetReference.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    },

    scrollToHosting(){
      this.$refs.hostingLayout.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    },

    onSelect(mode){
      this.priceSelectionMode = mode
      this.scrollToHosting()
      if(mode === "basic"){
        this.showHostingBasic = true
        this.showHostingPro = false
      }else if(mode === "medium" || mode === "pro"){
        this.showHostingPro = true
        this.showHostingBasic = false
      }
    },

    onSelectHosting(mode){
      /*
      if(mode === "none"){
        this.$router.push("/old/order/" + this.priceSelectionMode + "/none")
      }else if(mode === "standard"){
        this.$router.push("/old/order/" + this.priceSelectionMode + "/standard")
      }else if(mode === "premium"){
        this.$router.push("/old/order/" + this.priceSelectionMode + "/premium")
      }*/
    },

    handleScroll(event) {
      const targetLeistung = this.$refs.targetLeistung;
      const targetReference = this.$refs.targetReference;
      const targetPricing = this.$refs.pricingLayout;
      if (targetLeistung) {
        const rect = targetLeistung.getBoundingClientRect();
        const triggerPoint = window.innerHeight / 1; //Entry point (je höher die dividierende Zahl desto weiter muss man scrollen)

        if (rect.top < triggerPoint && rect.bottom > 0) {
          setTimeout(() => {
            this.isLeistung1 = true
          },200)

          setTimeout(() => {
            this.isLeistung2 = true
          },400)

          setTimeout(() => {
            this.isLeistung3 = true
          },600)

          setTimeout(() => {
            this.isLeistung4 = true
          },800)
        } else {
          if (!(rect.top < window.innerHeight && rect.bottom > 0)) {
            this.isLeistung1 = false
            this.isLeistung2 = false
            this.isLeistung3 = false
            this.isLeistung4 = false
          }
        }
      }


      if (targetReference && this.isLeistung4) {
        const rect = targetReference.getBoundingClientRect();
        const triggerPoint = window.innerHeight / 1.1; //Entry point (je höher die dividierende Zahl desto weiter muss man scrollen)

        if (rect.top < triggerPoint && rect.bottom > 0) {
          this.fadeReference = true
        } else {
          if (!(rect.top < window.innerHeight && rect.bottom > 0)) {
            this.fadeReference = false
          }
        }
      }


      if (targetPricing && this.fadeReference) {
        const rect = targetPricing.getBoundingClientRect();
        const triggerPoint = window.innerHeight / 0.9; //Entry point (je höher die dividierende Zahl desto weiter muss man scrollen)

        if (rect.top < triggerPoint && rect.bottom > 0) {
          setTimeout(() => {
            this.fadePricing = true
          },200)

          setTimeout(() => {
            this.fadePricing1 = true
          },400)

          setTimeout(() => {
            this.fadePricing2 = true
          },600)

          setTimeout(() => {
            this.fadePricing3 = true
          },800)
        } else {
          if (!(rect.top < window.innerHeight && rect.bottom > 0)) {
            this.fadePricing = false
            this.fadePricing1 = false
            this.fadePricing2 = false
            this.fadePricing3 = false
          }
        }
      }
    },

    send(data) {
      this.socket.send(JSON.stringify(data))
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


    getCookies(key) {
      return this.$cookies.get(key);
    },
    setCookies(key, value) {
      this.$cookies.set(key, value, 2147483647);
    },
  }
}
</script>