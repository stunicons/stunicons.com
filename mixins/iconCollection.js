const mixin = {
  computed:{
    storedIcons(){
      if(process.browser){
        const storedIcons = localStorage.getItem('storedIcons')
        return storedIcons ? JSON.parse(storedIcons) : {}
      }
      return {}
    }
  }
}
 export default mixin
