<template>
<div class="icon-collection">
  <div class="icon-collection--wrapper">
    <div class="head">
      <h4>Collection <span class="number">4</span></h4>
    </div>
    <div class="icons">
      <icon :hoverEffect="false">
        <template #svg >
          <i class="si-arrow-down"></i>
        </template>
        <template #name> arrow-down </template>
      </icon>
      <icon :hoverEffect="false">
        <template #svg >
          <i class="si-arrow-down"></i>
        </template>
        <template #name> arrow-down </template>
      </icon>
      <icon :hoverEffect="false">
        <template #svg >
          <i class="si-arrow-down"></i>
        </template>
        <template #name> arrow-down </template>
      </icon>
      <icon :hoverEffect="false">
        <template #svg >
          <i class="si-arrow-down"></i>
        </template>
        <template #name> arrow-down </template>
      </icon>
    </div>
    <div class="customize">
      <h4>customize</h4>
      <div class="customize-font">
        <font-size-adjuster v-model="fontSize"/>
      </div>
      <div class="customize-color">
        <color-picker v-model="color"/>
      </div>
    </div>
    <div class="download">
      <div class="download--svg">
        <copy>
          <template #icon>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1C7 0.447716 7.44772 0 8 0C8.55228 0 9 0.447715 9 1V8.15777L12.2428 4.91501L13.657 6.32922L8.00012 11.9861L2.34326 6.32922L3.75748 4.91501L7 8.15753V1Z" fill="#FE4E00"/>
              <path d="M0 10H2V14H14V10H16V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V10Z" fill="#FE4E00"/>
            </svg>
          </template>
          <template #title>SVG</template>
        </copy>
      </div>
      <div class="download--png">
        <copy>
          <template #icon>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1C7 0.447716 7.44772 0 8 0C8.55228 0 9 0.447715 9 1V8.15777L12.2428 4.91501L13.657 6.32922L8.00012 11.9861L2.34326 6.32922L3.75748 4.91501L7 8.15753V1Z" fill="#FE4E00"/>
              <path d="M0 10H2V14H14V10H16V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V10Z" fill="#FE4E00"/>
            </svg>
          </template>
          <template #title>PNG</template>
        </copy>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Icon from "../IconPack/Icon";
import FontSizeAdjuster from "../SVG/reusable/FontSizeAdjuster";
import ColorPicker from "../SVG/reusable/ColorPicker";
import Copy from "../Reusable/Copy";
export default {
name: "iconCollection",
  components: {Copy, ColorPicker, FontSizeAdjuster, Icon},
  data(){
    return{
      fontSize:24,
      color:"",
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-collection{
  &--wrapper{
    padding:2.2rem;
    .head{
      h4{
        @apply mb-10;
        font-weight: 600;

        span{
          @apply py-1 px-5 rounded-full ml-3;
          font-size: .8rem;
          font-weight: 400;
          background-color: $clr-primary;
          color:$bg;
        }
      }
    }

    .icons{
      @apply flex my-3;
    }
    .customize{
      @apply flex flex-col mt-5;
      h4{
        font-weight: 600;
      }

      &-font{
        @apply my-4;
        width:15rem;
      }

      &-color{

      }

    }

    .download{
      @apply flex  mt-10;

      &--png{
        @apply ml-6 ;
      }
    }
  }

}
</style>
