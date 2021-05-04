<template>
  <div class="version">
    <a href="https://github.com/Stunnity/stunicons/releases" target="_blank">v {{ version }}</a>
  </div>
</template>

<script >
const { version } = require('@/package.json')

export default {
  name:"Version",
  data() {
    return {
    }
  },
  computed: {
    version(){
      return version.split(".").slice(0,2).join(".")
    }
  }
}

</script>

<style lang="scss" scoped>
.version{
  @apply py-1 px-4 rounded-lg mx-4;
  background:$bg;
  color:$clr-primary;
  height: fit-content;

  a{
    font-size: 0.875rem;
    font-weight: 600;
  }
}
</style>
