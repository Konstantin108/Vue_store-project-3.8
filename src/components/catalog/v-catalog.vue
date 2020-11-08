<template>
  <div class="v-catalog">
    <v-select
        :categories="categories"
        @select="sortByCategories"
        :selected="selected"
    >
    </v-select>
    <v-textfield
        v-model="model"
        label="Placeholder"
    >
    </v-textfield>
    <p>{{model}}</p>
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="v-catalog__link_to_cart">Cart: {{ CART.length }}</div>
    </router-link>
    <h1>{{title}}</h1>
    <div class="v-catalog__list">
      <v-catalog-item
          v-for="product in filteredProducts"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
      >
      </v-catalog-item>
    </div>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import vTextfield from '../v-textfield'
import vSelect from '../v-select'

import {mapActions, mapGetters} from 'vuex'
export default {
name: "v-catalog",
  components:{
    vCatalogItem,
    vTextfield,
    vSelect
  },
  props:{},
  data(){
    return{
      title: 'Catalog',
      model: '',
      categories:[
        {name: 'all clothes', value: 'all'},
        {name: "man's clothing", value: 'men'},
        {name: "women's clothing", value: 'women'},
      ],
      selected: 'All clothes',
      sortedProducts: []
    }
  },
  computed:{
    ...mapGetters([
        'PRODUCTS',
        'CART'
    ]),
    filteredProducts(){
      if(this.sortedProducts.length){
        return this.sortedProducts
      }else{
        return this.PRODUCTS
      }
    }
  },
  methods:{
    ...mapActions([
       'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
    ]),
    addToCart(data){
        this.ADD_TO_CART(data)
    },
    sortByCategories(category){
      this.sortedProducts = [];
      let vm = this;
      this.PRODUCTS.map(function (item){
        if(item.category === category.name){
          vm.sortedProducts.push(item)
        }
      })
      this.selected = category.name
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    .then((response) => {
      console.log('data is loaded');
    })
  }
}
</script>

<style lang="scss">
  .v-catalog{
    &__list{
     display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
    &__link_to_cart{
      position: absolute;
      top: 10px;
      right: 10px;
      padding: $padding*2;
      border: solid 1px blue;
    }
    &__link_to_textfield{
      position: absolute;
      top: 10px;
      right: 156px;
      padding: $padding*2;
      border: solid 1px blue;
    }
  }

</style>