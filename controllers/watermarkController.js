const watermarkService = require('../utils/watermarkService');
const { catchAsync } = require('../middlewares/catchAsync');

exports.addWatermark = catchAsync(async (req, res) => {
  const { image, text, options } = req.body;

  if (!image || !text) {
    return res.status(400).json({ success: false, message: 'Image and text are required' });
  }

  try {
    const watermarkedImage = await watermarkService.addWatermarkToImage(image, text, options);
    res.status(200).json({ success: true, watermarkedImage });
  } catch (error) {
    console.error('Error adding watermark:', error);
    res.status(500).json({ success: false, message: 'Failed to add watermark', error: error.message });
  }
});