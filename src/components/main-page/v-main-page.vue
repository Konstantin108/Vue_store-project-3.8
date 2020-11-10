<template>
  <div class="v-main-page">
    <h1>MainPage</h1>
    <h3>
      <router-link :to="{name: 'catalog'}">Go to Catalog</router-link>
    </h3>
  </div>
</template>

<script>
export default {
  name: "v-main-page",
  data(){
    return{

    }
  },
  props:{

  },
  methods:{

  }
}
</script>

<style scoped>

</style>