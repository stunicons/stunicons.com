<template>
<div class="color-picker">
  <div class="color-picker--wrapper">
    <p>Color:</p>
    <ul>
      <li class="black active"></li>
      <li class="orange"></li>
      <li class="blue"></li>
      <li class="red"></li>
      <li class="green"></li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
name: "ColorPicker"
}
</script>

<style lang="scss" scoped>
.color-picker{
  &--wrapper{
    ul{
      @apply flex;

      li{
        @apply mx-2;
        box-sizing: content-box;
        width:18px;
        height: 18px;
        border-radius: 50%;

        &.active{
          border:3px solid $bg;
          box-shadow: 0 4px 4px 0 #E1E1E1;

        }

        $colors: ('black':$black, 'orange':$orange, 'blue': $blue, 'red':$red, 'green':$green);

        @each $name, $color in $colors {
          &.#{$name} {
            background-color: $color;
          }
        }

      }

    }
  }
}

</style>
