<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class="v-popup">
      <div class="v-popup__header">
        <span>{{ popupTitle }}</span>
        <span>
          <i
              class="material-icons"
              @click="closePopup"
          >
            close
          </i>
        </span>
      </div>
      <div class="v-popup__content">
        <slot></slot>
      </div>
      <div class="v-popup__footer">
        <button class="close_modal" @click="closePopup">close</button>
        <button
            class="submit_btn"
            @click="rightBtnAction"
        >{{ rightBtnTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-popup",
  props:{
    rightBtnTitle: {
      type: String,
      default: 'ok'
    },
    popupTitle:{
      type: String,
      default: 'name'
    }

  },
  data(){
    return{

    }
  },
  methods:{
    rightBtnAction(){
      this.$emit('rightBtnAction')
    },
    closePopup(){
      this.$emit('closePopup')
    },
  },
  mounted(){
    let vm = this;
    document.addEventListener('click', function (item){
      if(item.target === vm.$refs['popup_wrapper']){
        vm.closePopup();
      }
    })
  },
}

</script>

<style lang="scss">
.popup_wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
  .v-popup{
    padding: 16px;
    position: fixed;
    top: 50px;
    width: 400px;
    background-color: white;
    box-shadow: 0 0 17px 0 #e7e7e7;
    border-radius: 8px;
    z-index: 4;
    &__header, &__footer{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__content{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .submit_btn{
      padding: 8px;
      background-color: #4d984d;
      color: white;
      outline: none;
      border-radius: 8px;
      border: 1px solid #4d984d;
      transition: .1s;
      cursor: pointer;
      margin-top: 10px;
    }
    .close_modal{
      padding: 8px;
      color: white;
      background-color: red;
      outline: none;
      border-radius: 8px;
      border: 1px solid red;
      transition: .1s;
      cursor: pointer;
      margin-top: 10px;
    }
    .close_modal:active{
      background-color: white;
      color: red;
      border: 1px solid red;
    }
    .submit_btn:active{
      border: 1px solid #4d984d;
      background-color: white;
      color: #4d984d;
    }
    .material-icons{
      cursor: pointer;
    }
  }

</style>