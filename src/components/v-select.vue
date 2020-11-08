<template>
  <div class="v-select">
    <p class="select btn"
       @click="areOptionsVisible = !areOptionsVisible"
    >{{ selected }}</p>
    <div class="categories"
         v-if="areOptionsVisible"
    >
      <div class="category"
        v-for="category in categories"
        :key="category.value"
        @click="selectOption(category)"
      >
        {{category.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  data(){
    return{
      areOptionsVisible: false
    }
  },
  props:{
    categories:{
      type: Array,
      default(){
        return []
      }
    },
    selected:{
      type: String,
      default: ''
    }
  },
  computed:{

  },
 // mounted(){
  //  document.addEventListener('click', this.hideSelect.bind(this), true)
  //},
 // beforeDestroy() {
  //  document.removeEventListener('click', this.hideSelect)
 // },
  methods:{
    selectOption(category){
      this.$emit('select', category)
      this.areOptionsVisible = false
    },
    //hideSelect(){
    //  this.areOptionsVisible = false
    //}
  }
}
</script>

<style>
  .v-select{
    position: relative;
  }
  .select{
    width: 200px;
  }

</style>