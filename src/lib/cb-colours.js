

let blue = ['#152d42','#0b4572','#5a96d1','#88dbff','#d3edf4'];
let red = ['#720800','#ad2923','#dd3f33','#e57e73','#ffb0ae'];
let grey = ['#141414','#444444','#999999','#cccccc','#efefef'];
let yellow = ['#ffb000','#ffc73b','#ffe780'];
let purple = ['#874570','#a56b8e','#d197bf'];
let orange = ['#e05a00','#ef9450','#f4b484'];
let green = ['#539e3e','#77c465','#b6eaa7'];

export let darkGrey = grey[1];
export let categorical = ['#2F8FCE', '#C7432B', '#A14A7B', '#EFC530', '#DF9239', '#0B4572'];

export let colourRanges = {
  red, orange, yellow, green, blue, purple, grey
}

export let mainBlue = blue[0];
export let highlightRed = red[3];

export let hexToRgb = (hexString)=>{
  let hex = hexString;
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}