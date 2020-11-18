<template>
  <div class="v-cart-item">
    <img
        class="v-cart-item__image"
        :src=" require('../../assets/images/' + cart_item_data.image) "
        alt="img-item"
    >
    <div class="v-cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="cart_item_data__quantity">
      <p>Quantity</p>
      <span>
        <span class="quantity__btn" @click="decrementItem">-</span>
         {{cart_item_data.quantity}}
        <span class="quantity__btn" @click="incrementItem">+</span>
      </span>
    </div>
    <button class="btn"
        @click="deleteFromCart"
      >Delete
    </button>
  </div>
</template>

<script>

export default {
name: "v-cart-item",
  props:{
    cart_item_data:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
  return{}
  },
  methods:{
    decrementItem(){
      this.$emit('decrement')
    },
    incrementItem(){
      this.$emit('increment')
    },
    deleteFromCart(){
      this.$emit('deleteFromCart')
    }
  },
  computed:{},
  mounted() {
    this.$set(this.cart_item_data, 'quantity', 1)
  }
}
</script>

<style lang="scss">
  .v-cart-item{
    display: flex;
    border-radius: 8px;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    margin-bottom: 4px;
    box-shadow: 0 0 8px 0 grey;
    padding: $padding*2;
    margin-bottom: $margin*2;
    &__image{
      width: 160px;
      border-radius: 8px;
    }

    .quantity__btn{
      cursor: pointer;
    }
  }
</style>