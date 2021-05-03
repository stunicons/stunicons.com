<template>
<div class="search">
  <div class="search--wrapper">
    <div class="search--filter">
      <search-filter />
    </div>
    <div class="search--icon-body-selector">
      <icon-body-selector />
    </div>
    <div class="search--collection">
      <collection-accessor @openCollection="$emit('openCollection')" />
    </div>
  </div>
</div>
</template>

<script>
import SearchInput from "./SearchInput";
import CollectionAccessor from "./Collection-accessor";
import SearchFilter from "./SearchFilter";
import IconBodySelector from "../IconBodySelector";
export default {
name: "Header",
  components: {IconBodySelector, SearchFilter, CollectionAccessor, SearchInput},
  props:{
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
    @apply flex items-center ;

  }

  &--icon-body-selector{
    @apply mx-2 flex justify-center;
    flex:1;
  }
}
</style>
