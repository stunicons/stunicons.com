<template>
<div class="header">
  <div class="header--wrapper">
    <div class="header--filter">
      <search-filter />
    </div>
    <div class="header--icon-body-selector">
      <icon-body-selector />
    </div>
    <div class="header--collection">
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
.header{
  @apply my-16;
  &--wrapper{
    @apply flex items-center ;

  }

  &--icon-body-selector{
    @apply mx-2 flex justify-center;
    flex:1;
  }
}
</style>
