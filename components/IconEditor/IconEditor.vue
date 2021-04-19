<template>
<div class="icon-editor">
  <div class="icon-editor--wrapper">
    <div class="rows row--1">
      <div class="icon">
      <div class="icon--title">
        <h5>Arrow left</h5>
      </div>
      <div class="icon--svg">
        <div class="svg">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 18.0734L14 18.0733L14 30.0734L26.0001 30.0733L26 26.0734L20.8285 26.0733L31.4876 15.4142L28.6592 12.5858L18.0001 23.2449L18 18.0734Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22ZM40 22C40 31.9411 31.9411 40 22 40C12.0589 40 4 31.9411 4 22C4 12.0589 12.0589 4 22 4C31.9411 4 40 12.0589 40 22Z" fill="black"/>
          </svg>
        </div>
      </div>
      <div class="icon--actions">
        <div class="icon--actions--copy">
          copy
        </div>
        <div class="icon--actions--download">
          download
        </div>
      </div>
    </div>
      <div class="customize">
      <div class="customize--title">
        <h5>Customisation</h5>
      </div>
      <div class="customize--font">
        font adjuster
      </div>
      <div class="customize--color">
        color picker
      </div>
    </div>
    </div>
    <div class="rows row--2">
      <div class="icon-class">
        <div class="icon-class--title">
          <h5>Copy css</h5>
        </div>
        <div class="icon-class--copy">
          copy class
        </div>
      </div>
    </div>
    <div class="rows row--3">
      <div class="code">
        <div class="code--title">
          <h5>Copy svg</h5>
        </div>
        <div class="code--tab">
          <ul>
            <li>SVG</li>
            <li>Data URI</li>
          </ul>
        </div>
        <div class="code-codes">
          <ul>
            <li>svg code</li>
            <li>css codes</li>
          </ul>
        </div>
        <div class="code-copy">
          copy
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "IconEditor"
}
</script>

<style lang="scss" scoped>
.icon-editor{
  &--wrapper{
    border: 2px red solid;
    padding:3rem;
  }
}
</style>
