<template>
  <div class="v-catalog">
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
    <div class="filters">
      <v-select
          :categories="categories"
          @select="sortByCategories"
          :selected="selected"
      >
      </v-select>
      <div class="range-slider">
        <input
            type="range"
            min="0"
            max="1000"
            step="10"
            v-model.number="minPrice"
            @change="setRangeSlider"
        >
        <input
            type="range"
            min="0"
            max="1000"
            step="10"
            v-model.number="maxPrice"
            @change="setRangeSlider"
        >
      </div>
      <div class="range-values">
        <p>min: {{minPrice}}p.</p>
        <p>max: {{maxPrice}}p.</p>
      </div>
    </div>
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
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 1000
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
    setRangeSlider(){
      if(this.minPrice > this.maxPrice){
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.sortByCategories()
    },
    sortByCategories(category){
      let vm = this;
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter(function (item){
        return item.price >= vm.minPrice && item.price <= vm.maxPrice
      })
      if(category){
        this.sortedProducts = this.sortedProducts.filter(function (e){
          vm.selected = category.name
          return e.category === category.name
        })
      }
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    .then((response) => {
      console.log('data is loaded');
      this.sortByCategories()
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
      border-radius: 8px;
    }
  }
  .range-slider{
    width: 200px;
    margin: auto 16px;
    text-align: center;
    position: relative;
  }
  .range-slider svg, .range-slider input[type=range]{
    position: absolute;
    left: 0;
    bottom: 0;
  }
  input[type=range]::-webkit-slider-thumb{
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
  }
  .range-values{
    width: 210px;
  }
  .filters{
    display: flex;
    justify-content: space-around;
  }
</style>