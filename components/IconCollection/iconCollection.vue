<template>
  <div class="icon-collection">
    <div class="icon-collection--wrapper" v-if="svgIcons.length > 0">
      <div class="head">
        <h4>Collection <span class="number">{{ svgIcons.length }}</span></h4>
      </div>
      <div class="icons">
        <icon
          :hoverEffect="false"
          :stored="true"
          @remove="removeIcon(icon)"
          v-for="icon in svgIcons"
          :key="icon.id">
          <template #svg>
            <i :class="icon.id"></i>
          </template>
          <template #name> {{ icon.name }}</template>
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
        <div class="download--svg" @click="saveSvg">
          <copy>
            <template #icon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 1C7 0.447716 7.44772 0 8 0C8.55228 0 9 0.447715 9 1V8.15777L12.2428 4.91501L13.657 6.32922L8.00012 11.9861L2.34326 6.32922L3.75748 4.91501L7 8.15753V1Z"
                  fill="#FE4E00"/>
                <path d="M0 10H2V14H14V10H16V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V10Z"
                      fill="#FE4E00"/>
              </svg>
            </template>
            <template #title>SVGs</template>
          </copy>
        </div>
        <div class="download--png" @click="savePng">
          <copy>
            <template #icon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 1C7 0.447716 7.44772 0 8 0C8.55228 0 9 0.447715 9 1V8.15777L12.2428 4.91501L13.657 6.32922L8.00012 11.9861L2.34326 6.32922L3.75748 4.91501L7 8.15753V1Z"
                  fill="#FE4E00"/>
                <path d="M0 10H2V14H14V10H16V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V10Z"
                      fill="#FE4E00"/>
              </svg>
            </template>
            <template #title>PNG</template>
          </copy>
        </div>
      </div>
    </div>
    <div class="icon-collection--empty" v-else>
      <div class="head">
        <h4>Collection </h4>
      </div>
      <div class="empty-text">
        <div class="center">
          <p>Your collection is empty</p>
          <button @click="close"><i class="si-plus"></i> <span>Add icons</span></button>
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
import iconCollectionMixin from "../../mixins/iconCollection";
import svgToEl from "../../mixins/svgToEl";
import getSvgIds from "../../utils/getSvgIds";
import dataUriToSvg from "../../utils/svgToElement";
import JSZip from 'jszip'
import {saveAs} from 'file-saver'


export default {
  name: "iconCollection",
  mixins: [iconCollectionMixin, svgToEl],
  components: {Copy, ColorPicker, FontSizeAdjuster, Icon},
  data() {
    return {
      fontSize: 24,
      color: "",
    }
  },
  computed: {
    editedIcons() {
      const formattedIcons = []

      this.svgIcons.forEach(icon => {


        let svg = this.svgToEl(dataUriToSvg(icon.svg))

        let paths = svg.getElementsByTagName('path')

        svg.setAttribute('width', this.fontSize)
        svg.setAttribute('height', this.fontSize)
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");

        //transform all path els
        paths.forEach(pathEl => {
          pathEl.setAttribute('fill', this.color)
        })

        formattedIcons.push({name: icon.id, svg: svg.outerHTML})

      })
      return formattedIcons
    },

  },
  methods: {
    // download svgs as zip file
    saveSvg() {
      const svgZip = new JSZip();
      const iconsFolder = svgZip.folder('icons')

      // loop into icons and add them to folder
      this.editedIcons.map(icon => {
        const name = icon.name + ".svg"
        const svgData = icon.svg;

        const preface = '<?xml version="1.0" standalone="no"?>\r\n';
        const svgBlob = new Blob([preface, svgData], {type: "image/svg+xml;charset=utf-8"});
        iconsFolder.file(name, svgBlob) // add icon to folder
      })

      this.download(svgZip, `stunicons-svg-${this.fontSize}.zip`) // download icons

      //analytics
      this.$gtag.event('iconDownload', {
        'event_category': 'download',
        'event_label': 'svgCollection',
        'value': getSvgIds(this.storedIcons)
      })
    },
    //download pngs files
    savePng() {
      const pngZip = new JSZip();
      const iconsFolder = pngZip.folder('icons')

      this.editedIcons.map((icon, i) => {

        const name = icon.name + '.png'

        const image = new Image();
        image.src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(icon.svg)));

        // when image src load convert image to canvas
        image.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = image.width;
          canvas.height = image.height;
          const context = canvas.getContext('2d');
          context.drawImage(image, 0, 0);

          //convert image to blob so that it can be saved as file
          canvas.toBlob(blob => {
            iconsFolder.file(name, blob) // save file to folder

            if ((i + 1) === this.editedIcons.length) // if thi is the last element in array of icons download zip
              this.download(pngZip, `stunicons-png-${this.fontSize}.zip`)
          })
        }
      })


      //analytics
      this.$gtag.event('iconDownload', {
        'event_category': 'download',
        'event_label': 'pngCollection',
        'value': getSvgIds(this.storedIcons)
      })
      
    },
    //download zip file
    download(zip, name) {
      zip.generateAsync({type: "blob"})
        .then(blob => {
          saveAs(blob, name);
        });
    },
    removeIcon({id,name,tags,category}) {
      this.removeFromCollection({id,name,tags},category)
    },

    close() {
      this.$parent.collectionVisible = false
    }

  },
  mounted() {
    // console.log(this.editedIcons)
    }
}
</script>

<style lang="scss" scoped>
.icon-collection {
  width: 100%;

  &--wrapper {

    @apply rounded-lg;
    background-color: $bg;
    padding: 3rem;
    width: 100vw;
    max-width: 50rem;

    .head {
      h4 {
        @apply mb-10;
        font-weight: 600;

        span {
          @apply py-1 px-5 rounded-full ml-3;
          font-size: .8rem;
          font-weight: 400;
          background-color: $clr-primary;
          color: $bg;
        }
      }
    }

    .icons {
      @apply my-3;
      display: grid;
      grid-template-columns: repeat(auto-fill, 7rem);
      grid-gap: 1rem .5rem;
      justify-content: space-between;
      max-height: 20rem;
      overflow-x: hidden;
      overflow-y: auto;
    }

    .customize {
      @apply flex flex-col mt-5;
      h4 {
        font-weight: 600;
      }

      &-font {
        @apply my-4;
        width: 15rem;
      }

      &-color {

      }

    }

    .download {
      @apply flex  mt-10;

      &--png {
        @apply ml-6 ;
      }
    }
  }

  &--empty {
    @apply rounded-lg;
    background-color: $bg;
    padding: 3rem;
    width: fit-content;
    max-width: 50rem;

    .head {
      h4 {
        @apply mb-10;
        font-weight: 600;
      }
    }

    .empty-text {
      width: 25rem;
      height: 10rem;
      display: grid;
      place-items: center;

      .center {
        @apply flex flex-col items-center;
        p {
          @apply mb-3;
        }

        button {
          @apply py-2 px-4;
          background-color: $clr-primary;
          color: $bg;
          border-radius: 4px;
          outline: none;

          i {
            @apply mr-2;
          }
        }
      }
    }
  }

}
</style>
