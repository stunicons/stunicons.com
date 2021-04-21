<template>
<div class="color-picker">
  <div class="color-picker--wrapper">
    <p>Color: </p>
    <ul>
      <li @click="clicked('black')" :class="{active: activeColor === 'black'}" class="black" ></li>
      <li @click="clicked('orange')" :class="{active: activeColor === 'orange'}" class="orange" ></li>
      <li @click="clicked('blue')" :class="{active: activeColor === 'blue'}" class="blue" ></li>
      <li @click="clicked('red')" :class="{active: activeColor === 'red'}" class="red" ></li>
      <li @click="clicked('green')" :class="{active: activeColor === 'green'}" class="green" ></li>
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
      activeColor:'black'
    }
  },
  methods:{
    clicked(clr){
      this.activeColor = clr
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
