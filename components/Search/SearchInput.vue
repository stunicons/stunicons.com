<template>
<div class="search-input">
  <label>
    <input @input="searchKeyChanged" type="text" v-model="searchKey">
  </label>
  <div ref="icon" class="icon" @click="search">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg>
  </div>
</div>
</template>

<script>
//TODO making test for this component

export default {
  name: "SearchInput",
  data(){
    return{
      searchKey:'name the king'
    }
  },

  methods:{
    //emit event on Search
    search(){
      this.$emit('search',this.searchKey)
    },

    //act on Search key change
    searchKeyChanged(){
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
  @apply px-2 py-3 flex items-center rounded-md;
  background-color: $bg-tertiary ;
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
    @apply px-2;

    &.searching{
      svg{
        fill:$clr-primary;
      }
    }
  }

}


</style>
