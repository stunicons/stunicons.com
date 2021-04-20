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

<style scoped>

</style>
