
export default function dataUriToSvg(dataUri){
  console.log(dataUri)
  return atob(dataUri.replace(/data:image\/svg\+xml;base64,/, ''));
}
