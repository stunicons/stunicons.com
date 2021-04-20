<template>
<div class="code-highlight">
  <div class="code-highlight--wrapper">
    {{formattedCode}}
  </div>
</div>
</template>

<script>
export default {
  name: "CodeHighlight",
  props:{
    code:{required:true,type:String}
  },
  computed:{
    formattedCode(){
      return this.code
    }
  }

}
</script>

<style lang="scss" scoped>
.code-highlight{
  @include fit-content;

  &--wrapper{
    @apply py-3 px-6 rounded;
    background-color:$bg-secondary;
  }
}
</style>
