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
      const options = {
        indent_size: 2,
        space_in_empty_paren: true,
        // wrap_line_length:100
      }


      if(l === 'html')
        formattedCode = html(c,options)

      if(l === 'css')
        formattedCode = css(c, options)

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
    width: 45rem;
    background-color:$bg-secondary;
    overflow-x: auto;


    &::-webkit-scrollbar{
      @apply rounded-md;
      height:.5rem;
    }
    &::-webkit-scrollbar-track{
      background-color: darken($bg-tertiary,5);
    }

    &::-webkit-scrollbar-thumb{
      border-radius: 2.5px;
      cursor: pointer;
      background-color: darken($bg-tertiary,30);

      &:hover{
        background-color: darken($bg-tertiary,40);
      }

    }

    code{
      font-family: $firaCode;
    }
  }
}
</style>
