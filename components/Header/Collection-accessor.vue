<template>
<div class="collection-accessor" @click="$emit('openCollection')">
  <div class="icon-holder">
    <span class="nr-of-el-in-collection" v-if="numberOfIcons > 0"> {{numberOfIcons}} </span>
    <i class="si-folder"></i>
  </div>
</div>
</template>

<script>
export default {
  name: "Collection-accessor",
  computed:{
    numberOfIcons(){
      return this.$store.getters['svgIcons'].length
    }
  },
}
</script>

<style lang="scss" scoped>
.collection-accessor{
  @apply px-2 py-4 rounded-md;
  background-color: $bg-tertiary ;
  width:5.7rem;
  cursor: pointer;

  .icon-holder{
    position: relative;
    @apply flex justify-center items-center;

    span{
      @apply rounded-full;
      padding:0 .6rem;
      top:-.8rem;
      right:.4rem;
      text-align: center;
      font-size: .75rem;
      position: absolute;
      color:$bg;
      background-color: $clr-primary;
      border:2px solid $bg;
    }
  }

}
</style>
