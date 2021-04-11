<template>
<div class="css-card">
  <div class="css-card--wrapper">
    <div class="tag">
      <pre><i :class="iconClass"></i></pre>
    </div>
    <div class="copy-icon"></div>
  </div>
</div>
</template>

<script>
export default {
  name: "CssCard",
  props:{
    iconClass:{type:String}
  }
}
</script>

<style scoped>

</style>
