<template>
<div class="icon-class-cpy">
  <div class="icon-class-cpy--wrapper">
    <div class="tag">
      <span > {{ classIcon}}</span>
    </div>
    <div class="copy-icon" :data-clipboard-text="classIcon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z"/></svg>
    </div>
  </div>
</div>
</template>

<script>
import ClipboardJS from 'clipboard'

let clipboard;

export default {
  name: "IconClassCopy",
  props:{
    iconClass:{required:true,type:String}
  },
  computed:{
    classIcon(){
      return `<i class="${this.iconClass}"></i>`
    },
  },
  mounted(){
    clipboard = new ClipboardJS('.copy-icon')
    const self = this

    clipboard.on('success',function(e){
      self.$emit('classCopy',e)
    })

  }
}
</script>

<style lang="scss" scoped>
.icon-class-cpy{
  @include fit-content;

  &--wrapper{
    @apply flex justify-between py-3 px-4 rounded;
    width: 22rem;

    background-color: $bg-secondary;

    .tag{

    }
    .copy-icon{
      @apply pl-5 pr-2;
      border-left:2px solid $clr-lighten;
      cursor: pointer;
    }
  }
}
</style>
