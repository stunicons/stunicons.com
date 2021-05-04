<template>
<div class="search-input">
  <label>
    <input @input="searchKeyChanged" placeholder="search any icon..." type="text" v-model="searchKey">
  </label>
  <div ref="icon" class="icon" @click="search">
    <i class="si-search"></i>
  </div>
</div>
</template>

<script>
//TODO making test for this component

export default {
  name: "SearchInput",
  props:['value'],
  data(){
    return{
      searchKey:this.value
    }
  },

  methods:{
    //emit event on Header
    search(){
      this.$emit('input',this.searchKey)
    },

    //act on Header key change
    searchKeyChanged(){
      this.search()

      const icon = this.$refs['icon'];

      if(this.searchKey.trim().length > 0) {
        icon.classList.add('searching')
      } else {
        console.log('less')
        icon.classList.remove('searching')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search-input {
  @apply px-2 py-2 my-16 flex items-center rounded-md;
  background-color: $bg ;
  max-width: 50rem;
  width:100%;
  cursor: pointer;

  label{
    flex:1;

    input{
      @apply pl-4;
      height: 2.5rem;
      width: 100%;
      outline: none;
      background-color: transparent;
    }
  }

  .icon{
    @apply px-2 grid place-items-center;
      i{
        font-size: 20px;
        font-weight: 500;
      }
    &.searching{
      i{
        fill:$clr-primary;
      }
    }
  }

}


</style>
