<template>
<article class="header">
  <div class="header--wrapper">
    <h2> {{ heading}} </h2>
    <span>{{number}}</span>
  </div>
</article>
</template>

<script>
export default {
  name: "IconPackHeader",
  props:{
  heading:{required:true,type:String},
  number:{required:true}
}
}
</script>

<style lang="scss" scoped>
.header{
  &--wrapper{
  @apply flex;
    h2{
      font-size: 1.1rem;
      text-transform: capitalize;
      font-weight: 500;
    }
    span{
      @apply px-4 py-1 ml-4 rounded-full;
      color:$bg !important;
      font-size: .9rem;
      background-color: $clr-primary;
    }
  }
}
</style>
