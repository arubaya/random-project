function makeNewPosition(canvasWidth: number, canvasHeight: number) {
  // Get viewport dimensions (remove the dimension of the div)
  var h = canvasHeight - 128;
  var w = canvasWidth - 128;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

export function animateDiv(canvasWidth: number, canvasHeight: number) {
  var newq = makeNewPosition(canvasWidth, canvasHeight);
  return {
    top: newq[0],
    left: newq[1],
  };
}
