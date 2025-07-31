<style scoped>

.card{
  width: 100%;
  max-width: 450px;
  min-height: 310px;
  border: solid 1px;
  border-color: #e3e3e3;
}
.img-layout{
  height: 250px;
}

.product-img{
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.info-layout{
  width: 90%;
}

.black-tag{
  width: fit-content;
  border-radius: 100px;
  padding: 3px;
  padding-left: 6px;
  padding-right: 6px;
  background: #000000;
  color: white;
  font-size: 13px;
  font-weight: bold;
}

.overlay{
  background-color: rgba(0, 0, 0, 0);
  opacity: 0;
  transition: all 0.3s ease;
}

.card:hover .overlay{
  background: rgba(0, 0, 0, 0.3);
  opacity: 1;
}

.card:hover{
  border-color: #07956f;
}

.count-view{
  margin: 10px;
  padding: 10px;
  background: white;
  border-radius: 100px;
}

</style>

<template>

  <div class="center-horizontal">
    <div class="card shadow round-corner pointer" @click="onPath">
      <div class="center-horizontal max-width img-layout relative">
        <img :src="'../../src/assets/gallery/' + img" class="max-width max-height product-img cover">
        <div class="absolute max-width right" v-if="count !== undefined">
          <div class="count-view">
            <p class="reset-margin bold">{{count}} Projekt<span v-if="count > 1">e</span></p>
          </div>
        </div>
      </div>
      <div style="height: 10px"></div>
      <div class="center-horizontal">
        <div class="info-layout">
          <h2 class="reset-margin bold">{{title}}</h2>
          <div style="height: 10px"></div>
          <p class="decent-color reset-margin">{{sub}}</p>
        </div>
      </div>
      <div style="height: 10px"></div>
      <div class="center-horizontal">
        <UIButton title="Mehr erfahren" sec/>
      </div>
      <div style="height: 10px"></div>
    </div>
  </div>

</template>


<script>

import UIButton from "@/components/views/UIButton.vue"

export default {
  name: "GalleryCard",
  components: {UIButton},
  data() {
    return {
    };
  },

  props: {
    title: String,
    img: String,
    sub: String,
    nav: String,
    count: Number
  },

  created() {
  },

  mounted() {


  },


  methods: {
    onPath() {
      this.$router.push(this.nav);
    }
  }
}
</script>