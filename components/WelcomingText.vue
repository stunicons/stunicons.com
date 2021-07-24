<template>
<div class="welcoming-text">
  <div class="welcoming-text--wrapper">
      <div class="welcoming-text--h">
    <h2>Stunning icons for your UI</h2>
  </div>
  <div class="welcoming-text--p">
    <p>
     Burgeoning pack with 100+ highly customizable icons for your outstanding UI. Easily tweak your icon in a few seconds.
    </p>
  </div>
  </div>
</div>
</template>

<script>
export default {
name: "WelcomingText"
}
</script>

<style lang="scss" scoped>
.welcoming-text{
  @apply flex justify-center mt-24;

   &--wrapper{
     max-width: 44rem;
     text-align: center;
   }
  &--h{
    font-size: 3rem;
    font-weight: 600;
    @apply mb-5;

    h2{
      color:$bg;
    }
  }
  &--p{
    font-size:1.15rem;
    font-weight:500 ;
    color:$bg-tertiary;

  }
}
</style>
