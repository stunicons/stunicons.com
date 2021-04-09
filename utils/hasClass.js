export default function (el,className){
  if(className.startsWith('.'))
    className = className.split('').splice(1,className.length).join('')

  return !![...el.classList].find(cls => cls === className)
}
