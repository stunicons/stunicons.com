export const state = () => ({
  storedIcons: {}
})

export const mutations = {
  //read storage and retrive all stored icons
  readStoredIcons(state) {
    if(process.browser)
         state.storedIcons = JSON.parse(localStorage.getItem('storedIcons')) || {}

  }
}

export const actions = {
  storeIcon({commit,state}, {icon, category}) {
    let jsonStoredIcons = JSON.parse(JSON.stringify(state.storedIcons)) //remove object reference, make new object

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

    jsonStoredIcons = Object.assign({},jsonStoredIcons) //convert to object
    localStorage.setItem('storedIcons',JSON.stringify(jsonStoredIcons)) //restore icon

    commit('readStoredIcons') //read storage again
  },
  deleteIcon({commit, state},{icon,category}) {
    let jsonStoredIcons = JSON.parse(JSON.stringify(state.storedIcons)) //remove object reference

    let foundIcon = jsonStoredIcons[category].filter(storedIcon => storedIcon.id === icon.id) //find icon to be deleted

    jsonStoredIcons = Object.assign({},jsonStoredIcons) //convert to Object


    let iconIndex = jsonStoredIcons[category].indexOf(foundIcon[0]) // index of icon which is going to be deleted
    if(iconIndex >= 0) jsonStoredIcons[category].splice(iconIndex,1) // if icon found deleted it

    localStorage.setItem('storedIcons',JSON.stringify(jsonStoredIcons)) //restore icons

    commit('readStoredIcons') //read storage again
  }
}


export const getters = {
  //get all svg icons as one array
  svgIcons(state) {

    if(state.storedIcons.length < 1)
      return []
    const svgIcons = []
    const iconCategories = Object.keys(state.storedIcons)

    iconCategories.forEach(category => {
        state.storedIcons[category].forEach(icon => {
          try{
            svgIcons.push({svg: require(`stunicons/icons/${category}/${icon.id}.svg`),category, ...icon})
          }catch (e) {
            console.log(e)
          }
        })

      })

    return svgIcons;
  },

}

