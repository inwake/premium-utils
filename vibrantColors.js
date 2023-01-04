import imgUrlToBase64 from "./imgUrlToBase64.js";


export default function vibrantColors(imageSrc, brightnessMax, brightnessMin, saturationMin, hueDiffrence) {
  let colors = [];
  let imageData = [];
  let rgb = [];
  let hsb = [];
  let image = new Image();

  image.height = 100;
  image.width = 100;

  async function loadImage(url, img) {
    return new Promise((resolve, reject) => {
      img.onload = () => resolve(img);
      img.onerror = reject;
      imgUrlToBase64(url, base64 =>{image.src = base64} );
    });
  }

  async function getImageData(imageSrc) {
    await loadImage(imageSrc, image);
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d");
    context.drawImage(image, 0, 0, image.width, image.height);
    imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
    rgb = buildRGB(imageData);

    let uniqueColors = Array.from(new Set(rgb.map(JSON.stringify)), JSON.parse)

    for(let i = 0; i < uniqueColors.length; i++) {
      let hsbColor = rgb2hsb(uniqueColors[i], brightnessMax, brightnessMin, saturationMin);
      if(hsbColor){ hsb.push(hsbColor) }
    }
    colors = VibrantPicker(hsb, hueDiffrence);
    return colors;
  }

  return getImageData(imageSrc).then(() => {
    return colors;
  }).catch((err) => {console.log(err)});

}

function buildRGB(imgData){
  let rgb = [];
  for (let i = 0; i < imgData.length; i += 4) {
    if(!(imgData[i] > 250 & imgData[i + 1] > 250 & imgData[i + 2] > 250) & !(imgData[i] === 0 & imgData[i + 1] === 0 & imgData[i + 2] === 0)){
      rgb.push([imgData[i], imgData[i + 1], imgData[i + 2]]);
    }
  }
  return rgb;
}

function rgb2hsb(rgb, brightnessMax, brightnessMin, saturationMin){
  let r = rgb[0] / 255;
  let g = rgb[1] / 255;
  let b = rgb[2] / 255;

  var minVal = Math.min(r, g, b),
  maxVal = Math.max(r, g, b),
  delta = maxVal - minVal,
  hsb = {hue:0, sat:0, bri:maxVal},
  del_R, del_G, del_B;

  if( delta !== 0 ) {
    hsb.sat = delta / maxVal;
    del_R = (((maxVal - r) / 6) + (delta / 2)) / delta;
    del_G = (((maxVal - g) / 6) + (delta / 2)) / delta;
    del_B = (((maxVal - b) / 6) + (delta / 2)) / delta;

    if (r === maxVal) {hsb.hue = del_B - del_G;}
    else if (g === maxVal) {hsb.hue = (1 / 3) + del_R - del_B;}
    else if (b === maxVal) {hsb.hue = (2 / 3) + del_G - del_R;}

    if (hsb.hue < 0) {hsb.hue += 1;}
    if (hsb.hue > 1) {hsb.hue -= 1;}
  }

  hsb.hue = Math.round(hsb.hue * 360);
  hsb.sat = Math.round(hsb.sat * 100);
  hsb.bri = Math.round(hsb.bri * 100);

  if(hsb.sat/100 > saturationMin & (hsb.bri/100 <= brightnessMax && hsb.bri/100 > brightnessMin)){
    return hsb;
  }
  return false;
}

function VibrantPicker(hsb, hueDiffrence){
  console.log(hsb)
  let firstVibrant = hsb[0];
  let secondVibrant = hsb[1];
  let colors = [];

  for(let i = 0; i < hsb.length; i++){
    if(hsb[i].sat > firstVibrant.sat){
      firstVibrant = hsb[i];
    }
  }

  for(let i = 0; i < hsb.length; i++){
    if((Math.abs(hsb[i].hue - firstVibrant.hue) / 720  > hueDiffrence) && hsb[i].sat > secondVibrant.sat){
      secondVibrant = hsb[i];
    }
  }

  if(Math.abs(firstVibrant.hue - secondVibrant.hue) / 720 < hueDiffrence){
    colors = false;
  }else{
    colors = [firstVibrant, secondVibrant];
  }

  return colors;
}
