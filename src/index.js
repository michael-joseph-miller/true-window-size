const trueWindowSize = () => {
  const win = window;
  const doc = document;
  const docElem = doc.documentElement;
  const body = doc.getElementsByTagName('body')[0];
  const x = win.innerWidth || docElem.clientWidth || body.clientWidth;
  const y = win.innerHeight || docElem.clientHeight || body.clientHeight;

  return { x, y };
};

export default trueWindowSize;
