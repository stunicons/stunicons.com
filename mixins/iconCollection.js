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
      const svgIcons = []
      const iconCategories = Object.keys(this.storedIcons)


      iconCategories.forEach(category => {
          this.storedIcons[category].forEach(icon => {
            try{
              svgIcons.push({svg: require(`stunicons/icons/${category}/${icon.id}.svg`), ...icon})
            }catch (e) {
              console.log(e)
            }
          })

        })

      return svgIcons;
    }
  }
}
 export default mixin
