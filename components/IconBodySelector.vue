<template>
<div class="icon-body-selector">
  <ul class="icon-body-selector--wrapper">
    <li @click="currentBody = 'outline'" :class="{active: currentBody === 'outline'}">Outline</li>
    <li @click="currentBody = 'filled'" :class="{active: currentBody === 'filled'}">Filled</li>
    <li @click="currentBody = 'duotone'" :class="{active: currentBody === 'duotone'}">Duotone</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "IconBodySelector",
  data(){
    return{
      currentBody:'outline'
    }
  },
  watch:{
    currentBody: function(oldBody,newBody){
      this.$emit('change',newBody)
    }
  },
}
</script>

<style lang="scss" scoped>
.icon-body-selector{
  @apply flex justify-end;

  &--wrapper{
    @apply flex;

    li{
      @apply mx-4 py-2;
      font-weight: 600;
      color:$clr-lighten;
      cursor: pointer;

      &.active{
        color: $clr-primary;
        border-bottom: 4px solid $clr-primary;
      }

    }
   }
}
</style>
