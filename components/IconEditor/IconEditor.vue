<template>
<div class="icon-editor">
  <div class="icon-editor--wrapper" v-if="formattedSvg">
    <div class="rows row--1">
      <div class="icon">
      <div class="icon--title">
        <h5>Arrow left</h5>
      </div>
      <div class="icon--svg" v-if="formattedSvg">
        <div class="svg" v-html="formattedSvg">

        </div>
      </div>
      <div class="icon--download">
        <div class="icon--download--svg" >
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
        <div class="icon--download--png">
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
    <div class="customize">
      <div class="customize--title">
        <h5>Customisation</h5>
      </div>
      <div class="customize--font">
        <font-size-adjuster v-model="fontSize" />
      </div>
      <div class="customize--color">
        <color-picker v-model="color"/>
      </div>
    </div>
    </div>

    <div class="rows row--2">
      <div class="icon-class">
        <div class="icon-class--title">
          <h5>Copy css</h5>
        </div>
        <div class="icon-class--copy">
          <icon-class-copy :icon-class="icon.id"/>
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
            <li :class="{active:activeTab ==='svg'}" @click="activeTab = 'svg'">SVG</li>
            <li :class="{active:activeTab ==='dataUrl'}" @click="activeTab = 'dataUrl'">Data URI</li>
          </ul>
        </div>
        <div class="code--codes" >
          <ul>
            <li v-if="activeTab ==='svg'">
              <code-highlight :code="codes.svg" lang="html" />
            </li>
            <li v-if="activeTab ==='dataUrl'">
              <code-highlight :code="codes.css" lang="css"/>
            </li>
          </ul>
        </div>
        <div class="code--copy">
          <copy>
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z"/></svg>
            </template>
            <template #title>Copy</template>
          </copy>
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
import Copy from "../Reusable/Copy";
import IconClassCopy from "./IconClassCopy";
import CodeHighlight from "./CodeHighlight";
import dataUriToSvg from "../../utils/svgToElement";
import ColorPicker from "../SVG/reusable/ColorPicker";
import FontSizeAdjuster from "../SVG/reusable/FontSizeAdjuster";

let svgIcon;


export default {
  name: "IconEditor",
  components: {FontSizeAdjuster, ColorPicker, CodeHighlight, IconClassCopy, Copy},
  props:{
    icon:{required:true,type:Object}
  },
  data(){
    return{
      baseSvg:'',
      fontSize:24,
      color:"",
      activeTab:'svg'
    }
  },
  computed:{
    //return svg codes that are edited based on preference of the user
    formattedSvg(){
      let svg = this.svgToEl(this.baseSvg)

      // run bellow code when svg is loaded
      if(svg){

        let paths = svg.getElementsByTagName('path')

        svg.setAttribute('width',this.fontSize)
        svg.setAttribute('height',this.fontSize)

        //transform all path els
        paths.forEach(pathEl => {
          pathEl.setAttribute('fill',this.color)
        })

        svg = svg.outerHTML // to html element codes
        return svg.toString()
      }
    },

    //returns css and html svg codes based on formatted svg
    codes(){
      const svg = this.formattedSvg;
      const uri = encodeURIComponent(svg)

      return {svg:svg,css:`background-image: url("${uri}");`}
    }

  },
  methods:{
    // convert svg to dom element
    svgToEl(svg){
      const dom = new DOMParser().parseFromString(svg, "text/html")
      return  dom.getElementsByTagName('svg')[0] //use first svg el since this method returns array
    },


  },
  mounted(){
    console.log(this.icon)
    svgIcon = require(`stunicons/icons/${this.icon.src}`)
    this.baseSvg = dataUriToSvg(svgIcon) // set base SVG code on data mount
  }
}
</script>

<style lang="scss" >
.icon-editor{
  @include fit-content;

  &--wrapper{
    @apply rounded-lg;
    background-color: $bg;
    padding:3rem;
    width: 50rem;
  }


  .row{

    &--1{
      @apply flex justify-between;

      .icon{
        &--title{
          h5{
            font-weight: 600;
            font-size: 1.2rem;
          }
        }

        &--svg{
          @apply my-5;
          .svg{
            svg{
              transition: 1s all ease;

              path{
                transition: 1s all ease;
              }
            }
          }
        }

        &--download{
          @apply flex;

          &--png{
            @apply ml-6;
          }

        }
      }

      .customize{
        &--title{
          font-weight: 600;
          font-size: 1.1rem;
        }

        &--font{
          @apply my-6;
        }
      }
    }

    &--2{
      .icon-class{
        @apply mt-6;

        &--title{
          @apply my-2;
          h5{
            font-size: 1.1rem;
            font-weight: 500;
          }
        }
        &--copy{}
      }
    }

    &--3{
      .code{
        &--title{
          @apply my-4;

          h5{
            font-weight: 500;
            font-size: 1.1rem;
          }
        }

        &--tab{
          ul{
            @apply flex;

            li{
              @apply mx-5 py-1;
              font-weight: 600;
              cursor: pointer;
            }

            .active{
              color:$clr-primary;
              border-bottom: 2px solid $clr-primary;
            }
          }
        }

        &--codes{
          @apply my-5;

          ul{

          }
        }

      }
    }
  }
}
</style>
