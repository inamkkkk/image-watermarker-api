const {createCanvas, loadImage} = require('canvas');

const addWatermarkToImage = async (base64Image, text, options = {}) => {
  const imageBuffer = Buffer.from(base64Image.split(',')[1], 'base64');
  const img = await loadImage(imageBuffer);
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');

  ctx.drawImage(img, 0, 0);

  const font = options.font || 'Arial';
  const fontSize = options.fontSize || 32;
  const color = options.color || '#FFFFFF';
  const position = options.position || 'bottom-right';

  ctx.font = `${fontSize}px ${font}`;
  ctx.fillStyle = color;
  ctx.textAlign = position.includes('right') ? 'right' : 'left';
  ctx.textBaseline = position.includes('bottom') ? 'bottom' : 'top';

  const x = position.includes('right') ? img.width - 10 : 10;
  const y = position.includes('bottom') ? img.height - 10 : 10;

  ctx.fillText(text, x, y);

  return canvas.toDataURL();
};

module.exports = {
  addWatermarkToImage,
};