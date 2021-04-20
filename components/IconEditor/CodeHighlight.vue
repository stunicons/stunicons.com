<template>
<div class="code-highlight">
  <div class="code-highlight--wrapper">
    <pre><code >{{formattedCode}}</code></pre>
  </div>
</div>
</template>

<script>
import {html,css} from 'js-beautify'

export default {
  name: "CodeHighlight",
  props:{
    code:{required:true,type:String},
    lang:{type:String,default:'html'}
  },
  computed:{
    formattedCode(){
      let formattedCode;
      const l = this.lang;
      const c = this.code


      if(l === 'html')
        formattedCode = html(c,{ indent_size: 2, space_in_empty_paren: true })

      if(l === 'css')
        formattedCode = css(c, { indent_size: 2, space_in_empty_paren: true })

      console.log(formattedCode)

      return formattedCode
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
