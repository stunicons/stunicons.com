<template>
<div class="code-highlight">
  <div class="code-highlight--wrapper">
    <highlightjs :language='lang' :code="formattedCode" />
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
      }


      if(l === 'html')
        formattedCode = html(c,options)

      if(l === 'css')
        formattedCode = css(c, options)

      return formattedCode
    }
  }

}
</script>

<style lang="scss" >
.code-highlight{
  @include fit-content;

  &--wrapper{
    width: 45rem;
    //background-color:$bg-secondary;
    overflow-x: auto;



    code{
      @apply py-3 px-6 rounded;
      font-family: $firaCode;

      &::-webkit-scrollbar{
        @apply rounded-md;
        height:.5rem;
      }
      &::-webkit-scrollbar-track{
        @apply rounded-md;
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
    }
  }
}
</style>
