export const blue = ['#152d42','#0b4572','#5a96d1','#88dbff','#d3edf4','#cee2ea'];
export const red = ['#720800','#ad2923','#dd3f33','#e57e73','#ffb0ae'];
export const grey = ['#141414','#444444','#999999','#cccccc','#efefef'];
export const yellow = ['#ffb000','#ffc73b','#ffe780'];
export const purple = ['#874570','#a56b8e','#d197bf'];
export const orange = ['#e05a00','#ef9450','#f4b484'];
export const green = ['#539e3e','#77c465','#b6eaa7'];

export const categoricalAreas = [blue[1], blue[2], blue[3], blue[4], grey[3], grey[2]];
export const categoricalLines = [blue[1], blue[2], blue[3], blue[5], grey[2]];

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