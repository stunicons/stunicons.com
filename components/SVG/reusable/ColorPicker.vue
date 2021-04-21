<template>
<div class="color-picker">
  <div class="color-picker--wrapper">
    <p>Color: </p>
    <ul>
      <li @click="clicked('#000000')" :class="{active: activeColor === '#000000'}" class="black" ></li>
      <li @click="clicked('#FE4E00')" :class="{active: activeColor === '#FE4E00'}" class="orange" ></li>
      <li @click="clicked('#164AFF')" :class="{active: activeColor === '#164AFF'}" class="blue" ></li>
      <li @click="clicked('#FE0000')" :class="{active: activeColor === '#FE0000'}" class="red" ></li>
      <li @click="clicked('#48C37A')" :class="{active: activeColor === '#48C37A'}" class="green" ></li>
    </ul>
    <div class="add-color"></div>
  </div>
</div>
</template>

<script>
export default {
  name: "ColorPicker",
  data(){
    return{
      activeColor:'#000000'
    }
  },
  methods:{
    clicked(clr){
      this.activeColor = clr

      this.$emit('picked',clr)
    }
  }
}
</script>

<style lang="scss" scoped>
.color-picker{
  &--wrapper{
    @apply flex;

    p{
      font-weight: 500 ;
    }

    ul{
      @apply flex items-center;

      li{
        @apply mx-2;
        box-sizing: content-box;
        width:18px;
        height: 18px;
        border-radius: 50%;
        cursor: pointer;

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
