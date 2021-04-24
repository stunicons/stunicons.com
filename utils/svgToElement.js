
export default function dataUriToSvg(dataUri){
  return atob(dataUri.replace(/data:image\/svg\+xml;base64,/, ''));
}
