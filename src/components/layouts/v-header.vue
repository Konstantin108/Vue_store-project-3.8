<template>
  <div class="v-header">
    <router-link :to="{name: 'mainPage'}">
      <img src="../../assets/logo.png" alt="logo">
    </router-link>
    <div class="block_for_input">
      <input
          type="text"
          class="search-field"
          v-model="searchValue"
      >
      <button class="search_btn">
        <i class="material-icons" @click="search(searchValue)">search</i>
      </button>
      <button class="search_btn">
        <i class="material-icons" @click="clearSearchField">cancel</i>
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "v-header",
  data(){
    return{
      searchValue: ''
    }
  },
  props:{

  },
  computed:{
    ...mapGetters([
        'SEARCH_VALUE'
    ])
  },
  methods:{
    ...mapActions([
      'GET_SEARCH_VALUE_TO_VUEX'
    ]),
    search(value){
      this.GET_SEARCH_VALUE_TO_VUEX(value);
      if(this.$route.path !== '/catalog'){
        this.$router.push('/catalog');
      }
    },
    clearSearchField(){
      this.searchValue = '';
      this.GET_SEARCH_VALUE_TO_VUEX();
      if(this.$route.path !== '/catalog'){
        this.$router.push('/catalog');
      }
    }
  }
}
</script>

<style lang="scss">
  .v-header{
    z-index: 3;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $green-bg;
    padding-right: 28px;
    padding-left: 28px;
    padding-top: 16px;
    padding-bottom: 16px;
    img{
      width: 50px;
    }
    .search-field{
      padding: 6px;
      outline: none;
    }
    .block_for_input{
      margin-right: 88px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .search_btn{
      margin-left: 16px;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      transition: .1s;
    }
    .search_btn:active{
      color: white;
    }
  }
</style>