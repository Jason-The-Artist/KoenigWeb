<style scoped>
.modal-mask-saved {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(10px);
}

.modal-wrapper-saved {
  display: table-cell;
}

.modal-container-saved {
  display: block;
  margin: 0px auto;
  padding: 5px 5px;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}


.card{
  padding: 20px;
  background: white;
}

</style>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask-saved">
      <div class="modal-wrapper-saved">
        <div class="modal-container-saved max-height">
          <div class="center max-height">
            <div class="card shadow round-corner">
              <div class="center-horizontal">
                <UIButton title="Close" @click="onClose" sec/>
              </div>
              <div class="center-horizontal">
                <h2>Add Plan</h2>
              </div>
              <div class="center-horizontal">
                <p class="reset-margin">Display Name</p>
              </div>
              <div class="center-horizontal">
                <input class="functional-input" v-model="input">
              </div>
              <div style="height: 10px"></div>
              <div class="center-horizontal">
                <p class="reset-margin">Id Name</p>
              </div>
              <div class="center-horizontal">
                <input class="functional-input" v-model="id">
              </div>
              <div style="height: 30px"></div>
              <div class="center-horizontal">
                <UIButton title="Add" @click="onAdd"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>



<script>

import UIButton from "@/components/views/UIButton.vue";
import {CloseRound} from "@vicons/material";
import {Icon} from "@vicons/utils";
import {CheckboxChecked20Regular, Delete20Regular} from "@vicons/fluent"
import {CheckboxUndeterminate} from "@vicons/carbon"

export default {
  name: "AddPlanPopup",
  components: {CheckboxUndeterminate, CheckboxChecked20Regular, Delete20Regular, Icon, CloseRound, UIButton},

  props: {
    show: Boolean,
  },
  data(){
    return{
      input: "",
      id: ""
    }
  },


  created() {

  },

  mounted() {

  },

  methods: {

    onClose(){
      this.$emit("close");
    },

    onAdd(){
      this.$emit("add", this.input, this.id);
    },

  },

}
</script>