<template>
<div class="fontsize-adjuster">
  <div class="fontsize-adjuster--wrapper">
    <label for="font-adjuster">size: </label>
    <input type="range" id="font-adjuster">
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
