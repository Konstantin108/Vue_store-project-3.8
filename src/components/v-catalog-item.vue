<template>
  <div class="v-catalog-item">
    <img
        :src=" require('../assets/images/' + product_data.image) "
        alt="img"
        class="v-catalog-item__image"
    >
    <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">price: {{product_data.price}}р.</p>
    <button
        class="v-catalog-item__add_to_cart_btn btn"
        @click="addToCart"
    >add to cart</button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
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
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 grey;
    padding: $padding*2;
    margin-bottom: $margin*2;
    &__image{
      width: 160px;
    }
  }
</style>