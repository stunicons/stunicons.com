export const state = () => ({
  storedIcons: {}
})

export const mutations = {
  readStoredIcons(state) {
    if(process.browser)
         state.storedIcons = JSON.parse(localStorage.getItem('storedIcons')) || {}

  }
}

export const actions = {
  storeIcon({commit,state}, {icon, category}) {
    let jsonStoredIcons = state.storedIcons

    //check if icon was not already added to the storage
    if(jsonStoredIcons[category])
      for(const storedIcon of jsonStoredIcons[category])
        if(storedIcon.id === icon.id )
          return

    // if there is not group created in the storage
    // we will first create it with empty array to avoid bugs
    if(!jsonStoredIcons[category])
      jsonStoredIcons[category] = []

    jsonStoredIcons[category].push(icon) // add icon

    jsonStoredIcons = Object.assign({},jsonStoredIcons)
    localStorage.setItem('storedIcons',JSON.stringify(jsonStoredIcons))

    commit('readStoredIcons')
  },
}


export const getters = {
  svgIcons(state) {

    if(state.storedIcons.length < 1)
      return []
    const svgIcons = []
    const iconCategories = Object.keys(state.storedIcons)

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
  },

}

