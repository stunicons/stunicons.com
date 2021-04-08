<template>
  <div class="version">
    <h6>{{ version }}</h6>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
const { version } = require('@/package.json')

@Component
export default class Navbar extends Vue {
  version = version
}

</script>

<style lang="scss" scoped>
.version{
  background:$clr-primary-lighten;
  color:$clr-primary;
}
</style>
