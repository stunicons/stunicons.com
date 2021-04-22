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
let PickrInstance;

if(process.browser){
  PickrInstance = require('@simonwep/pickr/dist/pickr.min.js');
}

let pickr;

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
      this.$emit('input',clr)
    }
  },
  mounted(){
    this.clicked(this.activeColor) // to emit default value on the component mount

    const options = {
      el: '.add-color',
      theme: 'classic', // or 'monolith', or 'nano'

      swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
      ],

      components: {
        // Main components
        preview: true,
        opacity: true,
        hue: true,
        // Input / output Options
        interaction: {
          hex: true,
          rgba: true,
          input: true,
          clear: true,
          save: true
        }
      }
    }
    const self = this;
    pickr = PickrInstance.create(options)

    pickr.on('save',function(color){
      const hexaColor  = colorToHexa(color);
      self.$emit('picked',hexaColor)
      self.activeColor = hexaColor
    })

    pickr.on('show',function(color){
      const hexaColor  = colorToHexa(color);
      self.activeColor = hexaColor
    })


    function colorToHexa(clr){
      return '#' + clr.toHEXA().join('')
    }
  }
}
</script>

<style lang="scss" >
.color-picker{
  &--wrapper{
    @apply flex items-center;

    p{
      @apply mr-4;
      font-weight: 500 ;
    }

    ul{
      @apply flex items-center;

      li{
        @apply mx-1;
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

    .pickr{
      @include fit-content;
      @apply ml-4 grid items-center;

      button{
        width:15px;
        height: 15px;
      }
    }
  }
}

</style>
