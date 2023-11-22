

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask-saved">
      <div class="modal-wrapper-saved">
        <div class="modal-container-saved" style="background: #00000022">
          <div style="justify-content: center">
            <div class="center-horizontal" style="margin-top: 20px">
              <div>
                <div class="center-horizontal">
                  <button class="module-button pointer" @click="onClose()">
                    <h2>schließen</h2>
                  </button>
                </div>

                <div style="height: 20px"></div>

                <div ref="header" class="scroll popup-width center-horizontal main-grid">
                  <MainImageModule
                      v-for="(dat) in data"
                      :title="dat.title"
                      :thumb="dat.img"
                      :id="dat.id"
                      :teaser="dat.teaser"
                      :isPopup="false"
                      :src="dat.src"
                      @clicked="imageClicked"/>


                  <div style="width: 100px; height: 100px"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>



<script>

import MainImageModule from "@/components/views/MainImageModule.vue";

export default {
  name: "ImageGaleryPopup",
  components: {MainImageModule},

  props: {
    show: Boolean,
    id: Number,
  },
  data(){
    return{
      data: [],
      json: {}
    }
  },

  created() {

  },
  
  mounted(){
    fetch('http://testing.handwerker-akoenig.de/galery.json')
        .then(response => response.json())
        .then(data => {
          this.json = data
        })
        .catch(error => {
          console.error('Error fetching galery data:', error);
        });
  },

  updated() {
    this.data = []
    console.log("----------------------------------------------------------------")

    for(let i = 0; i < this.json.galery.length; i++){
      if(this.json.galery[i].id === this.id){
        let category = this.json.galery[i]
        for(let j = 0; j < category.collection.length; j++){
          let item = category.collection[j]

          let dat = {
            title: this.convertU(item.title),
            img: item.img,
            id: "id" + this.id,
            src: item.src,
            teaser: this.convertU(item.teaser)
          }
          this.data.push(dat)
        }
      }
    }
  },

  /*updated() {
    this.parsed = []
    for(let i = 0; i < this.data.length; i++){
      let src = document.baseURI
      if(src.includes("127.0.0.1") || src.includes("localhost")){
        src = src.split("/#/")[0] + "/src/assets/" + this.data[i].img
      }else{
        src = src.split("/#/")[0] + "/images/" + this.data[i].img
      }
      let dat = {
        img: src,
      }
      this.parsed.push(src)
    }
  },*/

  methods: {
    onClose(){
      this.$emit("close")
    },

    imageClicked(){

    },
    convertU(text){
      return text.replace(/!u00F6/g, 'ö')
          .replace(/!u00E4/g, 'ä')
          .replace(/!u00FC/g, 'ü')
          .replace(/!u00DF/g, 'ß')
          .replace(/!!o/g, 'ö')
          .replace(/!!a/g, 'ä')
          .replace(/!!u/g, 'ü')
          .replace(/!!s/g, 'ß')
          .replace(/!!O/g, 'Ö')
          .replace(/!!A/g, 'Ä')
          .replace(/!!U/g, 'Ü')
    }
  },

}
</script>

<style>
.modal-mask-saved {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper-saved {
  display: table-cell;
}

.modal-container-saved {
  display: block;
  width: 90vw;
  margin: 0px auto;
  padding: 5px 5px;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}


@media (max-width: 740px) {
/*
  .modal-container-saved{
    width: 90vw;
  }*/

}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}


.modal-enter-from .modal-container-saved,
.modal-leave-to .modal-container-saved {
  opacity: 0;
}
</style>