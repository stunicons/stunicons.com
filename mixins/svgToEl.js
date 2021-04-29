const svgToEl = {
  methods:{
        // convert svg to dom element
    svgToEl(svg){
      const dom = new DOMParser().parseFromString(svg, "text/html")
      return  dom.getElementsByTagName('svg')[0] //use first svg el since this method returns array
    },
  }
}

export default svgToEl;
