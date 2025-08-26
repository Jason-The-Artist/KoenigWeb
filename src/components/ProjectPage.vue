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


@media (max-width: 1450px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}
@media (max-width: 1060px) {

  .product-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (max-width: 600px) {
  .main-headline{
    font-size: 10vw;
  }

}

</style>

<template>

  <Nav current="galerie" class="on-top"/>

  <div class="header-background header-outer center" id="home">
    <div class="header-inner main-content-width center" style="margin-top: 80px">
      <div class="main-smaller-width">
        <div class="center-horizontal">
          <UIButton title="Zurück zur Galerie" left sec css="white-sec" textCss="white-text" @click="$router.push('/galerie')">
            <ArrowLeft20Regular/>
          </UIButton>
        </div>
        <h1 class="reset-margin main-headline center-text white">{{current.title}}</h1>
        <p class="default-textsize center-text decent-white">{{current.sub}}</p>
      </div>
    </div>
  </div>

  <div style="height: 50px"></div>

  <div class="center-horizontal">
    <div>
      <div class="center-horizontal" v-for="dat in current.projects">
        <ProjectCard :title="dat.title" :folder="dat.folder" :images="dat.images" :year="dat.year" :city="dat.city" :description="dat.description"/>
      </div>
    </div>
  </div>

  <div style="height: 100px"></div>

  <Footer/>

</template>


<script>

import Nav from "@/components/views/Nav.vue"
import UIButton from "@/components/views/UIButton.vue"
import {Icon} from "@vicons/utils"
import {ArrowLeft20Regular, ChevronDoubleDown20Regular, Checkmark20Regular} from "@vicons/fluent"
import {HealingRound, GrassFilled} from "@vicons/material"
import {Wall} from "@vicons/tabler"
import LeistungCard from "@/components/views/LeistungCard.vue";
import Footer from "@/components/views/Footer.vue"
import GalleryCard from "@/components/views/GalleryCard.vue"
import LeistungLine from "@/components/views/LeistungLine.vue"
import ProjectCard from "@/components/views/ProjectCard.vue"

export default {
  name: "ProjectPage",
  components: {
    ProjectCard,
    LeistungLine,
    GalleryCard,
    Footer, LeistungCard: LeistungCard,
    Icon, UIButton, Nav, ArrowLeft20Regular, HealingRound, Wall, GrassFilled, ChevronDoubleDown20Regular, Checkmark20Regular},
  data() {
    return {
      project: this.$route.params.project,
      data: [
        {
          title: "Pflasterarbeiten",
          sub: "Dies ist ein Einleitungstext",
          nav: "pflasterarbeiten",
          projects: [
            {
              title: "Blanco Iberico 8/11",
              folder: "pflasterarbeiten",
              images: ["blanco-iberico1.jpg", "blanco-iberico2.jpg", "blanco-iberico3.jpg", "blanco-iberico4.jpg",
                "blanco-iberico5.jpg", "blanco-iberico6.jpg", "blanco-iberico7.jpg", "blanco-iberico8.jpg", "blanco-iberico9.jpg"],
              year: "2019",
              city: "Berlin",
              description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem"
            },
            {
              title: "Farbe: Rechteckpflaster Muschelkalk - Pallisade Betongrau",
              folder: "rechteckpflaster",
              images: ["rechteckpflaster1.jpg", "rechteckpflaster2.jpg", "rechteckpflaster3.jpg", "rechteckpflaster4.jpg",
                "rechteckpflaster5.jpg", "rechteckpflaster6.jpg", "rechteckpflaster7.jpg", "rechteckpflaster8.jpg", "rechteckpflaster9.jpg",
                "rechteckpflaster10.jpg", "rechteckpflaster11.jpg", "rechteckpflaster12.jpg", "rechteckpflaster13.jpg", ],
              year: "2020",
              city: "München",
              description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem"
            }
          ]
        },
        {
          title: "Terassen",
          sub: "Dies ist ein Einleitungstext",
          nav: "terassen",
          projects: [
            {
              title: "Lounge",
              folder: "terassen/lounge",
              images: ["20220821_105102.jpg", "20220821_105329.jpg", "20221113_101122.jpg"],
              year: "",
              city: "",
              description: "<ul><li>Mauersteine geklebt</li><li>Kantholz 10x12 gehobelt und lasiert</li></ul>"
            },
            {
              title: "Terrasse 90x60x2 gebundene Bauweise",
              folder: "terassen/terasse-90-60-2",
              images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "6.jpg"],
              year: "",
              city: "",
              description: "Terrassenplatten gebundene Bauweise<ul><li>Keramikplatte 90x60x2 geklebt</li></ul>"
            },
            {
              title: "Terrasse Keramik 60x60x2 auf Alu Unterkonstruktion",
              folder: "terassen/terasse-keramik",
              images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg"],
              year: "",
              city: "",
              description: "<ul><li>Keramikplatte 90x60x2 geklebt</li></ul>"
            },
            {
              title: "Terrasse Keramik40x80x3 Keramik auf Stelzlager",
              folder: "terassen/terasse-40-80-3",
              images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"],
              year: "",
              city: "",
              description: "Terrassenplatten auf Stelzlager verlegt (Halbverband)<br>Keramikplatte 80x40x3"
            },
            {
              title: "Terrasse Keramikplatte 100x100x2 auf Stelzlager",
              folder: "terassen/terasse-100-100-2",
              images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"],
              year: "",
              city: "",
              description: "Terrassenplatten auf Stelzlager verlegt (Halbverband)<br>Keramikplatte 80x40x3"
            },
            {
              title: "Terrasse WPC Diele auf Alu Unterkonstruktion",
              folder: "terassen/terasse-wpc",
              images: ["20240527_125720.jpg", "20240527_125725.jpg", "IMG-20250809-WA0048.jpg", "IMG-20250809-WA0049.jpg", "IMG-20250809-WA0050.jpg"],
              year: "",
              city: "",
              description: "Terrassenplatten auf Stelzlager verlegt. Mit Randeinfassung und Blende aus Aluminium.<br>Keramikplatte 100x100x2"
            }
          ]
        },
        {
          title: "Pooldecks",
          sub: "Dies ist ein Einleitungstext",
          nav: "pooldecks",
          projects: [
            {
              title: "Pooldeck Lärche",
              folder: "pooldeck-laerche",
              images: ["pooldeck-laerche1.jpg", "pooldeck-laerche2.jpg", "pooldeck-laerche3.jpg", "pooldeck-laerche4.jpg",
                "pooldeck-laerche5.jpg", "pooldeck-laerche6.jpg", "pooldeck-laerche7.jpg", "pooldeck-laerche8.jpg", "pooldeck-laerche9.jpg"],
              year: "2017",
              city: "Bonn",
              description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem"
            }
          ]
        },
        {
          title: "Trockenmauern",
          sub: "Dies ist ein Einleitungstext",
          nav: "trockenmauern",
          projects: [
            {
              title: "Santuro Mauer",
              folder: "santuro",
              images: ["santuro1.jpg", "santuro2.jpg", "santuro3.jpg", "santuro4.jpg",
                "santuro5.jpg", "santuro6.jpg", "santuro7.jpg", "santuro8.jpg"],
              year: "2015",
              city: "Frankfurt",
              description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem"
            },
            {
              title: "Diephaus Mauer 50 x25 x 15",
              folder: "diephaus",
              images: ["diephaus1.jpg", "diephaus2.jpg", "diephaus3.jpg", "diephaus4.jpg",
                "diephaus5.jpg", "diephaus6.jpg"],
              year: "2018",
              city: "Berlin",
              description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem"
            }
          ]
        },
        {
          title: "Eingangsgestaltung mit Naturstein",
          sub: "Dies ist ein Einleitungstext",
          nav: "eingangsgestaltung",
          projects: [
            {
              title: "Eingangstreppe Außenbereich",
              folder: "eingangstreppe",
              images: ["eingangstreppe1.jpg", "eingangstreppe2.jpg", "eingangstreppe3.jpg", "eingangstreppe4.jpg",
                "eingangstreppe5.jpg", "eingangstreppe6.jpg", "eingangstreppe7.jpg"],
              year: "2021",
              city: "Münster",
              description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem"
            },
            {
              title: "Treppenpodest teilweise überdacht",
              folder: "treppenpodest",
              images: ["treppenpodest1.jpg", "treppenpodest2.jpg", "treppenpodest3.jpg", "treppenpodest4.jpg",
                "treppenpodest5.jpg", "treppenpodest6.jpg"],
              year: "2022",
              city: "Dortmund",
              description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem"
            },
            {
              title: "Außentreppe Granit",
              folder: "granittreppe",
              images: ["granittreppe1.jpg", "granittreppe2.jpg", "granittreppe3.jpg"],
              year: "2022",
              city: "Dortmund",
              description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem"
            }
          ]
        }
      ],
      current: {}
    };
  },

  created() {
  },

  mounted() {
    for(let i = 0; i < this.data.length; i++){
      if(this.data[i].nav === this.project){
        this.current = this.data[i]
      }
    }
  },

  methods: {
  }
}
</script>