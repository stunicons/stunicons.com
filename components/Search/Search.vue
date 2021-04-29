<template>
<div class="search">
  <div class="search--wrapper">
    <div class="search--filter">
      <search-filter />
    </div>
    <div class="search--input">
      <SearchInput @input="search" v-model="searchKey"/>
    </div>
    <div class="search--collection">
      <collection-accessor @openCollection="$emit('openCollection')" :number-of-icons="numberOfStoredIcons"/>
    </div>
  </div>
</div>
</template>

<script>
import SearchInput from "./SearchInput";
import CollectionAccessor from "./Collection-accessor";
import SearchFilter from "./SearchFilter";
export default {
name: "Search",
  components: {SearchFilter, CollectionAccessor, SearchInput},
  props:{
    numberOfStoredIcons:{default:0},
    value:{type:String}
  },
  data(){
    return{
      searchKey:this.value
    }
  },
  methods:{
    search(){
      this.$emit('input',this.searchKey)
    }
  }
}
</script>

<style lang="scss" scoped>
.search{
  @apply my-24;
  &--wrapper{
    @apply flex ;

  }

  &--input{
    @apply mx-2;
    flex:1;
  }
}
</style>
