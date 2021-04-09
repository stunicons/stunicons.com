/**
 * Returns true if element has class or false when element doesn't that specified class
 * @param el : HTMLElement document element
 * @param className : String class name to check
 * @returns {boolean}
 *
 * @author Ntwari Clarance Liberiste
 */
export default function (el,className){
  if(className.startsWith('.'))
    className = className.split('').splice(1,className.length).join('')

  return !![...el.classList].find(cls => cls === className)
}
