export default function(storedIcons){
    const keys = Object.keys(storedIcons)
    const icons = {}
    keys.map(_key => {
        icons[_key] = storedIcons[_key].map(icon => icon.id)
    })

    return icons;
}