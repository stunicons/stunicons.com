const mixin = {
  computed:{
    storedIcons(){
      if(process.browser){
        const storedIcons = localStorage.getItem('storedIcons')
        return storedIcons ? JSON.parse(storedIcons) : {}
      }
      return {}
    },
    svgIcons(){
      const svgIcons = []
      const iconCategories = Object.keys(this.storedIcons)


      iconCategories.forEach(category => {
          this.storedIcons[category].forEach(icon => {
            svgIcons.push({svg: require(`stunicons/icons/${category}/${icon.id}.svg`), ...icon})
          })

        })

      return svgIcons;
    }
  }
}
 export default mixin
