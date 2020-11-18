<template>
  <div class="v-product-page">
    <img
        v-if="product.image"
        :src=" require('../../assets/images/' + product.image) "
        alt="img"
        class="v-catalog-item__image"
    >
    <p>Product name: {{ product.name }}</p>
    <p>Article: {{product.article}}</p>
    <p>Price: {{product.price}}</p>
    <button
        class="v-catalog-item__add_to_cart_btn btn"
        @click="addToCart"
    >add to cart</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "v-product-page",
  props:{

  },
  data(){
    return{}
  },
  computed:{
    ...mapGetters([
        'PRODUCTS'
    ]),
    product(){
      let result = {}
      let vm = this;
      this.PRODUCTS.map(function (item){
        if(item.article === vm.$route.query.product){
          result = item;
        }
      })
      return result;
    }
  },
  mounted() {

    this.GET_PRODUCTS_FROM_API()
  },
  methods:{
    ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
    ]),
    addToCart() {
      this.ADD_TO_CART(this.product)
    }
  }
}
</script>

<style lang="scss">

</style>