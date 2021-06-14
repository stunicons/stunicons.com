
export default function dataUriToSvg(dataUri){
  const g  = window || global;
  const b64  = dataUri.replace(/data:image\/svg\+xml;base64,/, '');

  if (g.atob) {
      return  g.atob(b64);
  } else {
      return  Buffer.from(b64, 'base64').toString('utf8');
  }
}
