<template>
  <div class="page-container">
    <div class="page">

      <section class="welcome-part">
        <section class="welcome-part--wrapper maximum-width">
          <!-- navbar -->
          <Navbar />

          <!-- welcome world -->
          <WelcomingText />

          <!-- Header bar -->
          <SearchInput @input="search" v-model="searchKey"/>


          <!--      icon body selector-->

        </section>

      </section>

      <Search @input="search" @openCollection="openCollection" :number-of-stored-icons="svgIcons.length"/>


      <!-- icon pack list-->
      <section class="icon-pack x-padding" v-for="iconGroup in icons" :key="iconGroup.categoryName">
        <section class="center">
          <div class="icon-pack--header">
            <icon-pack-header :heading="iconGroup.categoryName" :number="iconGroup.icons.length"/>
          </div>
          <div class="icon-pack--icons" >
            <icon
              v-for="icon in iconGroup.icons"
              :stored="inStoredIcons(icon.id)"
              :key="icon.id"
              @add="addToCollection(icon,iconGroup.categoryName)"
              @click="clickIcon(icon,iconGroup.categoryName)">
              <template #svg >
                <i :class="`${icon.id}`"></i>
              </template>
              <template #name> {{icon.name}} </template>
            </icon>
          </div>
              <!-- footer -->
          <app-footer/>
        </section>
      </section>

    </div>

    <!-- icon editor -->
    <transition name="fade">
      <div class="icon-editor-holder" ref="icon-editor-holder" @click="iconEditorHolderClicked" v-if="editorVisible">
        <div class="icon-editor-holder--wrapper">
            <icon-editor :icon="icon"/>
        </div>
      </div>
    </transition>

<!--    icon collection-->
    <transition name="fade">
      <div class="icon-collection-holder" ref="icon-collection-holder" @click="iconCollectionHolderClicked"  v-if="collectionVisible">
        <div class="icon-collection-holder--wrapper">
        <icon-collection />
        </div>
      </div>
    </transition>




  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import WelcomingText from "../components/WelcomingText";
import Search from "../components/Header/Header";
import IconPackHeader from "../components/IconPack/IconPackHeader";
import Icon from "../components/IconPack/Icon";
import IconBodySelector from "../components/IconBodySelector";
import appFooter from "../components/Footer";
import {icons} from "~/services/icons.json"
import IconEditor from "../components/IconEditor/IconEditor";
import IconCollection from "../components/IconCollection/iconCollection";
import iconCollectionMixin from "../mixins/iconCollection";
import SearchInput from "../components/Header/SearchInput";

export default {
  name:"Home",
  mixins:[iconCollectionMixin],
  components:{
    SearchInput,
    IconCollection,
    IconEditor, appFooter, IconBodySelector, Icon, IconPackHeader, Search, WelcomingText, Navbar},
  data(){
    return {
      icons: icons,
      editorVisible:false,
      collectionVisible:false,
      icon:{
        name:"",
        id:"",
        src:""
      },
      numberOfStoredIcons: 0
    }
  },
  computed:{
    svgIcons(){
      return this.$store.getters['svgIcons']
    }
  },
  methods:{
    clickIcon(icon, category){
      this.icon.src = `${category}/${icon.id}.svg`
      this.icon.name = icon.name;
      this.icon.id = icon.id;
      this.editorVisible = true
    },
    // method to check if icon is stored
    inStoredIcons(id){
      return this.svgIcons.filter(icon => icon.id === id).length > 0
    },
    search(value){
      const foundIcons = []
      const {icons} = require('~/services/icons.json')

      //  if there is no search keyword
      //  show all icons
      if(value.trim().length <=0){
        this.icons = icons;
        return ;
      }

      //search

      icons.map(icon => { // loop in all icons categories

        icon.icons.map(singleIcon => { //loop into icons into single icon category

          //find icons that may have tags which contains search key
          const possibleSearches = singleIcon.tags.filter(tag => tag.indexOf(value) !== -1)

          if(possibleSearches.length > 0){ // if there are some icons , it is time to add them to search results
            let iconGroupIndex;

            // know if the icon category exists in searched icon results
            const existenceOfCategoryGroup = foundIcons.filter((iconGroup,index) => {
              iconGroupIndex = index;
              return iconGroup.categoryName === icon.categoryName
            })

            if(existenceOfCategoryGroup.length > 0) // if icon group exists push new icons to the category
              foundIcons[iconGroupIndex].icons.push(singleIcon)
            else    //if category does not exist add it with new found icon
              foundIcons.push({categoryName:icon.categoryName,icons:[singleIcon]})
          }


        })
      })

      this.icons = foundIcons

    },
    openCollection(){
      this.collectionVisible = true
    },
    iconEditorHolderClicked(e){
      const targetToClick = this.$refs['icon-editor-holder']

      if(e.target === targetToClick)
        this.editorVisible = false;
    },
    iconCollectionHolderClicked(e){
      const targetToClick = this.$refs['icon-collection-holder']

      if(e.target === targetToClick)
        this.collectionVisible = false;
    },
    addToCollection(icon,category){
      // const jsonStoredIcons = this.storedIcons
      //
      // //check if icon was not already added to the storage
      // if(jsonStoredIcons[category])
      //   for(const storedIcon of jsonStoredIcons[category])
      //     if(storedIcon.id === icon.id )
      //       return
      //
      // // if there is not group created in the storage
      // // we will first create it with empty array to avoid bugs
      // if(!jsonStoredIcons[category])
      //   jsonStoredIcons[category] = []
      //
      // jsonStoredIcons[category].push(icon) // add icon
      //
      // localStorage.setItem('storedIcons',JSON.stringify(jsonStoredIcons))
      //
      // this.numberOfStoredIcons = this.numberOfStoredIcons+1
      this.$store.dispatch('storeIcon',{icon,category})

    }
  },
  mounted(){
    this.numberOfStoredIcons = this.svgIcons.length
    this.$store.commit('readStoredIcons')
    console.log(this.$store.getters['storedIcons'])
    this.$bus.$on('filterSelected',(category) => {
      if(category.toLowerCase() === 'all')
        this.icons = icons;
      else
        this.icons = icons.filter(iconGroup => iconGroup.categoryName === category)
    })

  }

}
</script>

<style lang="scss" scoped>
.page-container{
  position: relative;
  .icon-editor-holder, .icon-collection-holder{
    z-index: 1;
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
    background-color: transparentize(#000,.8);
    position: fixed;
    display: grid;
    place-items: center;
    overflow: auto;
    padding:1rem;

    &--wrapper{

    }

  }

  .page{
    .welcome-part{
      @apply w-full flex justify-center;
      transition: all .1s ease;
      background-image: linear-gradient(-45deg, $red , $clr-primary 95%);
    }

    .icon-pack{
      @apply mb-24 ;

      &:nth-last-child{
        @apply mb-4;
      }

      &--header{
        @apply mb-8 ;
      }

      &--icons{
        @apply flex flex-row flex-wrap justify-start;

      }
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  .icon-collection-holder--wrapper,
  .icon-editor-holder--wrapper{
    transition: .5s;
    transition-property: opacity,transform;
  }
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;

  .icon-collection-holder--wrapper,
  .icon-editor-holder--wrapper{
    transform: translateY(70px);
  }
}
</style>
