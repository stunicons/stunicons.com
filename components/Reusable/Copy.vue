<template>
<div class="copy">
  <div class="copy--wrapper" @click="clicked">
    <div class="copy--icon">
      <slot name="icon"></slot>
    </div>
    <span class="copy--title">
      <slot name="title"></slot>
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: "Copy",
  methods:{
    clicked(e){
      this.$emit('copy')
    }
  }
}
</script>

<style lang="scss" scoped>
.copy{
  height: fit-content;
  width: fit-content;

  &--wrapper{
   @apply px-6 py-4 rounded-md flex;
    background-color: $clr-primary-lighten;
    cursor: pointer;
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
    font-size: .9rem;
    font-weight: 500;
  }
}
</style>
