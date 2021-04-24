<template>
  <div class="page-container">
    <div class="page">
     <!-- navbar -->
      <Navbar />

      <!-- welcome world -->
      <WelcomingText />

      <!-- Search bar -->
      <Search />


      <!-- icon editor -->
      <div class="icon-editor">
        <client-only>
          <icon-editor/>
        </client-only>
      </div>

      <!--      icon body selector-->
      <icon-body-selector />

      <!-- icon pack list-->
      <section class="icon-pack" v-for="iconGroup in icons" :key="iconGroup.categoryName">
        <div class="icon-pack--header">
          <icon-pack-header :heading="iconGroup.categoryName" :number="iconGroup.icons.length"/>
        </div>
        <div class="icon-pack--icons" >
          <icon v-for="icon in iconGroup.icons" :key="icon.id" @click="clickIcon(icon,iconGroup.categoryName)">
            <template #svg >
              <i :class="`${icon.id}`"></i>
            </template>
            <template #name> {{icon.name}} </template>
          </icon>
        </div>
      </section>

    </div>
    <!-- footer -->
    <app-footer/>

  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import WelcomingText from "../components/WelcomingText";
import Search from "../components/Search/Search";
import IconPackHeader from "../components/IconPack/IconPackHeader";
import Icon from "../components/IconPack/Icon";
import IconBodySelector from "../components/IconBodySelector";
import appFooter from "../components/Footer";
import {icons} from "~/services/icons.json"
import IconEditor from "../components/IconEditor/IconEditor";


export default {
  components:{IconEditor, appFooter, IconBodySelector, Icon, IconPackHeader, Search, WelcomingText, Navbar},
  data(){
    return {
      icons: icons,
      icon:{
        name:"",
        id:"",
        src:""
      }
    }
  },
  methods:{
    clickIcon(icon, category){
      this.icon.src = `${category}/${icon.id}.svg`
      this.icon.name = icon.name;
      this.icon.id = icon.id;
      console.log(this.icon)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  .page{

    .icon-pack{
      @apply mb-24 ;

      &:nth-last-child{
        @apply mb-4;
      }

      &--header{
        @apply mb-8 ;
      }

      &--icons{
        @apply flex flex-row flex-wrap justify-between;

        i{
          //font-size: 2rem;
          color:red;
        }
      }
    }
    .icon-editor{
    }
  }
}
</style>
