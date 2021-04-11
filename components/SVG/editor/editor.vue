<template>
<div class="icon-editor">
  <div class="icon-editor--wrapper">
    <div class="row row-1">
      <div class="col col-1">
        <div class="icon">
          <h5 class="title">icon title</h5>
          <div class="svg"></div>
        </div>
        <div class="download-btn">
          <div class="download-btn--svg">
            <copy-card/>
          </div>
          <div class="download-btn--png">
            <copy-card/>
          </div>
        </div>
      </div>
      <div class="col col-2">
        <h5>Customize</h5>
        <font-size-adjuster/>
        <color-picker />
      </div>
    </div>
    <div class="row row-2">
      <h5>Copy css</h5>
      <css-card/>
    </div>
    <div class="row row-3">
      <h5>copy svg</h5>
      <div class="codes-tab">
        <ul>
          <li>SVG</li>
          <li>Data URI</li>
        </ul>
      </div>
      <div class="codes-container">
        codes
      </div>
    </div>
  </div>
</div>
</template>

<script>
import FontSizeAdjuster from "../reusable/FontSizeAdjuster";
import ColorPicker from "../reusable/ColorPicker";
import CopyCard from "../reusable/copy-card";
import CssCard from "./CssCard";
export default {
name: "editor",
  components: {CssCard, CopyCard, ColorPicker, FontSizeAdjuster}
}
</script>

<style scoped>

</style>
