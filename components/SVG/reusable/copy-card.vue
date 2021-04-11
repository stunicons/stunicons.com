<template>
<div class="copy-card">
 <div class="copy-card--wrapper">
    <div class="copy-card--icon">
    <slot name="icon"> </slot>
  </div>
  <div class="copy-card--name">
    <slot name="name"></slot>
  </div>
 </div>
</div>
</template>

<script>
export default {
  name: "copy-card"
}
</script>

<style lang="scss" scoped>
.copy-card{
  width:8rem;
  background-color:$clr-primary-lighten;

  &--wrapper{
    @apply py-4;
  }

  &--icon{
      i,svg{
        color:$clr-primary;
        fill:$clr-primary;
      }
  }
  &--name{
    color:$clr-primary;
  }

}
</style>
