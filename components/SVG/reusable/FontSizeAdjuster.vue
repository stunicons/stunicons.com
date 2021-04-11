<template>
<div class="fontsize-adjuster">
  <div class="fontsize-adjuster--wrapper">
    <p>size:</p>
    <div class="adjuster">
      <div class="line"></div>
      <div class="ball"></div>
    </div>
    <p>{{currentFont}}px</p>
  </div>
</div>
</template>

<script>
export default {
  name: "FontSizeAdjuster",
  data() {
    return {
      currentFont:"24px",

    }
  }
}
</script>

<style scoped>

</style>
