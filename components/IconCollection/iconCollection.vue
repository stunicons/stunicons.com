<template>
<div class="icon-collection">
  <div class="icon-collection--wrapper">
    <div class="head">
      <h4>Collection <span class="number">4</span></h4>
    </div>
    <div class="icons">
      <icon >
        <template #svg >
          <i class="si-arrow-down"></i>
        </template>
        <template #name> arrow-down </template>
      </icon>
      <icon >
        <template #svg >
          <i class="si-arrow-down"></i>
        </template>
        <template #name> arrow-down </template>
      </icon>
      <icon >
        <template #svg >
          <i class="si-arrow-down"></i>
        </template>
        <template #name> arrow-down </template>
      </icon>
      <icon >
        <template #svg >
          <i class="si-arrow-down"></i>
        </template>
        <template #name> arrow-down </template>
      </icon>
    </div>
    <div class="customize">
      <h4>customize</h4>
      <div class="customize-font">
        <font-size-adjuster />
      </div>
      <div class="customize-color">
        <color-picker />
      </div>
    </div>
    <div class="download">
      <div class="download--svg"></div>
      <div class="download--png"></div>
    </div>
  </div>
</div>
</template>

<script>
import Icon from "../IconPack/Icon";
import FontSizeAdjuster from "../SVG/reusable/FontSizeAdjuster";
import ColorPicker from "../SVG/reusable/ColorPicker";
export default {
name: "iconCollection",
  components: {ColorPicker, FontSizeAdjuster, Icon}
}
</script>

<style scoped>

</style>
