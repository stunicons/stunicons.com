<template>
<div class="copy">
  <div class="copy--wrapper">
    <div class="copy--icon">
      <slot name="icon"></slot>
    </div>
    <h4 class="copy--title">
      <slot name="title"></slot>
    </h4>
  </div>
</div>
</template>

<script>
export default {
  name: "Copy"
}
</script>

<style lang="scss" scoped>
.copy{
  height: fit-content;
  width: fit-content;

  &--wrapper{
   @apply px-10 py-5 rounded-md;
    background-color: $clr-primary-lighten;

  }

  &--icon{
   @apply px-2;
    svg{
      fill:$clr-primary;
    }
  }
  &--title{
   @apply px-2;
    color:$clr-primary;
  }
}
</style>
