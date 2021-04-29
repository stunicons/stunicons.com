import Vue from 'vue'

export default ({app}, inject) =>{
  const bus = new Vue()
  inject('bus',bus)
}

