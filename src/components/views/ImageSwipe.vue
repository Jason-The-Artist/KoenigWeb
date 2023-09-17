<template>
  <div ref="container" class="keen-slider">
    <div class="keen-slider__slide number-slide1"><img src="../../assets/sample1.png" class="main-image overflow-hidden"></div>
    <div class="keen-slider__slide number-slide2"><img src="../../assets/sample2.png" class="main-image overflow-hidden"></div>
    <div class="keen-slider__slide number-slide3"><img src="../../assets/sample3.png" class="main-image overflow-hidden"></div>
  </div>
</template>

<script>
import { useKeenSlider } from "keen-slider/vue.es"
import "keen-slider/keen-slider.min.css"


export default {

  name: "ImageSwipe",

  props: {

  },

  setup() {
    const [container] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 5000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
    )
    return { container }
  },

  data(){
    return{
    }
  },

  created() {
  },

  mounted() {

  },

  methods: {
    click1(){

    },

    click2(){

    },

    click3(){

    },
  }

}
</script>