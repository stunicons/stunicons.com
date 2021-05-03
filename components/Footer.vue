<template>
<footer class="footer">
  <div class="footer--wrapper">
    <p class="text">StunIcons pack made with <span class="love">♥️</span> by <strong>Stunnity</strong></p>
    <ul class="social-links">
      <li>
        <a href="">
          <i class="si-instagram"></i>
        </a>
      </li>
      <li>
        <a href="">
          <i class="si-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="">
          <i class="si-twitter"></i>
        </a>
      </li>
      <li>
        <a href="">
          <i class="si-facebook"></i>
        </a>
      </li>
    </ul>
  </div>
</footer>
</template>

<script>
export default {
  name: "Footer",
  provide: {}
}
</script>

<style lang="scss" scoped>
.footer{
  width:100%;
  border-top: 2px solid $bg-secondary;
  @apply flex justify-center mt-20;

  &--wrapper{

    @apply flex justify-between py-10;
    max-width: 80rem;
    width: 100%;

    p{
      .love{
        @apply inline-block;
        color:tomato;
        font-size: 1.4rem;
        transform: translateY(.2rem);
      }
    }
    ul{
      @apply flex items-center;

      li{
        @apply mx-5;
        width:fit-content;
        height: fit-content;

        a{
          i{
            font-size: 20px;
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>
