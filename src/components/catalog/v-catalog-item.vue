<template>
  <div class="v-catalog-item">

    <v-popup
      v-if="isInfoPopupVisible"
      rightBtnTitle="add to cart"
      :popupTitle="product_data.name"
      @closePopup="closeInfoPopup"
      @rightBtnAction="addToCart"
    >
      <img
          :src=" require('../../assets/images/' + product_data.image) "
          alt="img"
          class="v-catalog-item__image"
      >
      <div class="block_for_info">
        <p class="v-catalog-item__name">{{product_data.name}}</p>
        <p class="v-catalog-item__price">price: {{product_data.price}}р.</p>
        <p class="v-catalog-item__price">{{product_data.category}}</p>
      </div>
    </v-popup>

    <img
        :src=" require('../../assets/images/' + product_data.image) "
        alt="img"
        class="v-catalog-item__image"
    >
    <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">price: {{product_data.price}}р.</p>
    <div class="block_for_btn">
      <button
        class="v-catalog-item__show-info"
        @click="showPopupInfo"
      >
        show info
      </button>
      <button
          class="v-catalog-item__add_to_cart_btn btn"
          @click="addToCart"
      >add to cart</button>
    </div>
  </div>
</template>

<script>
import vPopup from '../popup/v-popup'

export default {
  name: "v-catalog-item",
  components:{
    vPopup
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      isInfoPopupVisible: false
    }
  },
  computed: {},
  methods: {
    showPopupInfo(){
      this.isInfoPopupVisible = true
    },
    closeInfoPopup(){
      this.isInfoPopupVisible = false
    },
    addToCart() {
      this.$emit('addToCart', this.product_data);
    }
  },
  mounted() {
    this.$set(this.product_data, 'quantity', 1);
  }
}
</script>

<style lang="scss">
  .v-catalog-item{
    border-radius: 8px;
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 grey;
    padding: $padding*2;
    margin-bottom: $margin*2;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__image{
      width: 160px;
      border-radius: 8px;
    }
    &__show-info{
      margin-bottom: 4px;
      cursor: pointer;
    }
    .block_for_info{
      margin-left: 16px;
    }
    .block_for_btn{
      display: flex;
      flex-direction: column;
      width: 154px;
    }
  }
</style>