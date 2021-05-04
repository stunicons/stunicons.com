const mixin = {
  computed:{
    //function that return icons which are stored in web storage
    storedIcons(){
      if(process.browser){
        const storedIcons = localStorage.getItem('storedIcons')
        return storedIcons ? JSON.parse(storedIcons) : {}
      }
      return {}
    },
    //return icons which are stored
    svgIcons(){
      return this.$store.getters['svgIcons']
    }
  },
  methods:{
    removeFromCollection(icon,category){
      this.$store.dispatch('deleteIcon',{icon,category})
    }
  }
}
 export default mixin
