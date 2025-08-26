<style scoped>

.card{
  width: 100%;
  max-width: 1200px;
  height: 300px;
  border: solid 1px #07956f;
  transition: height 0.5s ease;
  margin-top: 50px;
}

.full-size{
  height: fit-content;
}

.smaller-width{
  width: 90%;
}

.grid2{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.bottom-line{
  width: 100%;
  height: 40px;
  background: rgba(0, 112, 48, 0.8);
}

@media (max-width: 600px) {

  .grid2{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}



</style>

<template>

  <div class="card round-corner overflow-hidden relative" :class="isFull ? 'full-size' : ''">
    <div class="absolute max-width max-height bottom" style="z-index: 999">
      <div class="bottom-line center pointer" @click="isFull = !isFull">
        <p class="default-textsize bold reset-margin white"><span v-if="!isFull">Ausklappen</span><span v-else>Einklappen</span></p>
      </div>
    </div>
    <div class="grid2">
      <div class="center-horizontal">
        <div class="smaller-width">
          <h2 class="prim-color" style="font-size: 30px">{{title}}</h2>
          <div class="center-vertical">
            <div v-if="city !== ''" class="center-vertical">
              <Icon size="25">
                <Location20Regular/>
              </Icon>
              <div style="width: 5px"></div>
              <p class="reset-margin default-textsize">{{city}}</p>
              <div style="width: 30px"></div>
            </div>
            <div v-if="year !== ''" class="center-vertical">
              <Icon size="25">
                <CalendarClearOutline/>
              </Icon>
              <div style="width: 5px"></div>
              <p class="reset-margin default-textsize">{{year}}</p>
            </div>
          </div>
          <p class="default-textsize" v-html="description"></p>
          <div style="height: 20px"></div>
        </div>
      </div>
      <div>
        <img v-if="isFull" v-for="dat in images" :src="'../../src/assets/gallery/' + folder + '/' + dat" class="max-width round-corner"/>
        <img v-else :src="'../../src/assets/gallery/' + folder + '/' + images[images.length - 1]" class="max-width round-corner"/>
      </div>
    </div>
  </div>

</template>


<script>


import {Icon} from "@vicons/utils"
import {Location20Regular} from "@vicons/fluent"
import {CalendarClearOutline} from "@vicons/ionicons5"

export default {
  name: "ProjectCard",
  components: {Icon, Location20Regular, CalendarClearOutline},
  data() {
    return {
      isFull: false
    };
  },

  props: {
    title: String,
    images: Array,
    year: String,
    city: String,
    description: String,
    folder: String
  },

  created() {
  },

  mounted() {

  },


  methods: {
  }
}
</script>