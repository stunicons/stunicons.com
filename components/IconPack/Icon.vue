<template>
<div class="icon-card" @mouseenter="mouseOver = true" @mouseleave="mouseOver = false" :class="{hoverEffect:hoverEffect,stored:stored}" >
  <div class="add-to-collection" @click="actOnIcon">
    <div class="add-icon icon" v-if="mouseOver && !stored">
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3.75V14.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.75 9H14.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
    <div class="remove-icon icon" v-if="mouseOver && stored">
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3.75V14.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.75 9H14.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
    <div class="stored-icon icon" v-if="!mouseOver && stored && hoverEffect">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"/></svg>
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
    hoverEffect:{default:true},
    stored:{default:false},
  },
  data(){
    return{
      mouseOver:false,
    }
  },
  methods:{
    actOnIcon(){
      if(this.stored)
        this.$emit('remove')
      else
        this.$emit('add')
    }
  }

}
</script>

<style lang="scss" scoped>
.icon-card{
  @apply rounded-md;
  background-color: $bg-secondary;
  width: 7rem;
  height:6rem;
  position: relative;

  .icon{
    font-size:1.5rem;
  }


  &.hoverEffect:hover,
  &.stored{
    .add-to-collection{
      display: block;
    }
    .icon{
        font-size: 2rem;
        //cursor: pointer;
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
      padding: 4px;

      svg{
        fill:$bg;
      }

      &.remove-icon{
        transform: rotate(45deg);
      }

    }

  }

  .icon-card--wrapper{
    @apply flex items-center justify-center flex-col;
    height: 100%;
    width: 100%;


    .icon, .name{
      @apply  pb-2 ;
      transition:all .3s ease;
    }
    .name{
      font-size: .7rem;
    }
  }
}
</style>
