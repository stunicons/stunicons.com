<template>
  <div class="version">
    <h6>v {{ version }}</h6>
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

  h6{
    font-size: 0.875rem;
    font-weight: 600;
  }
}
</style>
