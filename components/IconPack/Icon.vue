<template>
<div class="icon-card" :class="{hoverEffect:hoverEffect}" >
  <div class="add-to-collection" @click="$emit('add')">
    <div class="icon">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3.75V14.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.75 9H14.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
  </div>
  <div class="icon-card--wrapper" @click="$emit('click')">
    <div class="icon">
      <slot name="svg"></slot>
    </div>
    <div class="name">
      <slot name="name"></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Icon",
  props:{
    hoverEffect:{default:true}
  }

}
</script>

<style lang="scss" scoped>
.icon-card{
  @apply flex justify-center items-center rounded-md m-3;
  background-color: $bg-secondary;
  width: 7rem;
  height:6rem;
  position: relative;

  &.hoverEffect:hover{
    .add-to-collection{
      display: block;
    }
  }

  .add-to-collection{
    display: none;
    background-color: $clr-primary  ;
    border-top-right-radius: 6px;
    position: absolute;
    right:0;
    top:0;
    cursor: pointer;

    .icon{
      padding: 6px;
    }

  }

  .icon-card--wrapper{
    @apply flex items-center flex-col;
    height: fit-content;
    width: fit-content;

    .icon, .name{
      @apply  py-3 ;
    }
    .name{
      font-size: .7rem;
    }
  }
}
</style>
