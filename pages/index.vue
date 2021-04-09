<template>
  <div class="container">
    <div class="page">
     <!-- navbar -->
      <Navbar />

      <!-- welcome world -->
      <WelcomingText />
    </div>

  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import WelcomingText from "../components/WelcomingText";

export default {
  components:{WelcomingText, Navbar}
}
</script>

<style lang="scss" scoped>

</style>
