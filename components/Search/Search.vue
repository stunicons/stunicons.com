<template>
<div class="search">
  <div class="search--wrapper">
    <div class="search--filter">
      <search-filter />
    </div>
    <div class="search--input">
      <SearchInput />
    </div>
    <div class="search--collection">
      <collection-accessor :number-of-icons="numberOfStoredIcons"/>
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
    numberOfStoredIcons:{default:0}
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
