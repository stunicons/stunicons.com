<template>
<div class="fontsize-adjuster">
  <div class="fontsize-adjuster--wrapper">
    <label for="font-adjuster">Size: </label>
    <div class="input">
      <input type="range" id="font-adjuster">
    </div>
    <p>{{currentFont}} px</p>
  </div>
</div>
</template>

<script>
export default {
  name: "FontSizeAdjuster",
  data() {
    return {
      currentFont:24,

    }
  }
}
</script>

<style lang="scss" scoped>
.fontsize-adjuster{
  &--wrapper{

    @apply flex items-center justify-between;

    label{
      font-weight: 500;
    }

    .input{
      input{

        // RANGE
        -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
        width: 100%; /* Specific width is required for Firefox. */
        background: transparent; /* Otherwise white in Chrome */

        &::-webkit-slider-thumb {
          -webkit-appearance: none;
        }

        &:focus {
          outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
        }

        &::-ms-track {
          width: 100%;
          cursor: pointer;

          /* Hides the slider so custom styles can be added */
          background: transparent;
          border-color: transparent;
          color: transparent;
        }

        // THUMB

        @mixin thumb{
          height: 17px;
          width: 17px;
          border-radius: 50%;
          background: $clr-primary;
          cursor: pointer;
        }

        /* Special styling for WebKit/Blink */
        &::-webkit-slider-thumb {
          @include thumb;
          -webkit-appearance: none;
          margin-top: -8px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
        }

        /* All the same stuff for Firefox */
        &::-moz-range-thumb {
          @include thumb;
        }

        /* All the same stuff for IE */
        &::-ms-thumb {
          @include thumb;
        }

        //TRACK

        @mixin tracker {
          width: 100%;
          height: 2px;
          cursor: pointer;
          background: $bg-tertiary;
        }

        &::-webkit-slider-runnable-track {
          @include tracker;
        }

        &:focus::-webkit-slider-runnable-track {
          @include tracker;
        }

        &::-moz-range-track {
          @include tracker;
        }

        &::-ms-track {
          width: 100%;
          height: 2px;
          cursor: pointer;
          background: transparent;
          color: transparent;
        }
        &::-ms-fill-lower {
          background-color: $bg-tertiary;
        }
        &:focus::-ms-fill-lower {
          background-color: $bg-tertiary;
        }
        &::-ms-fill-upper {
          background-color: $bg-tertiary;
        }
        &:focus::-ms-fill-upper {
          background-color: $bg-tertiary;
        }

      }
    }

    p{
      width: fit-content;
    }
  }
}
</style>
