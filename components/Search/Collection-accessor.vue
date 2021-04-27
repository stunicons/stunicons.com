<template>
<div class="collection-accessor">
  <div class="icon-holder">
    <span class="nr-of-el-in-collection" v-if="numberOfIcons > 0"> {{numberOfIcons}} </span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.5C2.89543 1.5 2 2.39543 2 3.5V4.5C2 4.55666 2.00236 4.61278 2.00698 4.66825C0.838141 5.07811 0 6.19118 0 7.5V19.5C0 21.1569 1.34315 22.5 3 22.5H21C22.6569 22.5 24 21.1569 24 19.5V7.5C24 5.84315 22.6569 4.5 21 4.5H11.874C11.4299 2.77477 9.86384 1.5 8 1.5H4ZM9.73244 4.5C9.38663 3.9022 8.74028 3.5 8 3.5H4V4.5H9.73244ZM3 6.5C2.44772 6.5 2 6.94772 2 7.5V19.5C2 20.0523 2.44772 20.5 3 20.5H21C21.5523 20.5 22 20.0523 22 19.5V7.5C22 6.94772 21.5523 6.5 21 6.5H3Z" fill="black"/>
    </svg>
  </div>
</div>
</template>

<script>
export default {
  name: "Collection-accessor",
  props:{
    numberOfIcons:{default:0}
  }

}
</script>

<style lang="scss" scoped>
.collection-accessor{
  @apply px-2 py-5 rounded-md;
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
