const Jimp = require('jimp');

const defaultOutputPath = `src/assets/output`;
const outputImgFormate = 'png';

function getGrayScaledImg(inputImage, frameNumber) {
  console.log(`-> optimizing img in frame ${frameNumber}`);
  const outputFileName = `${frameNumber}.${outputImgFormate}`;
  Jimp.read(inputImage, function (err, image) {
    if (err) throw err;
    image
      .resize(100, Jimp.AUTO) // Resize the image to a width of 100 pixels.
      .grayscale() // Convert the image to grayscale.
      .write(`${defaultOutputPath}/${outputFileName}`); // Save the grayscale image to disk.
  });
  console.log('-/-> Finished processing');
  console.log(
    `(i) Frame ${frameNumber} optimized and stored at ${defaultOutputPath}/${outputFileName}`
  );
}

module.exports = { getGrayScaledImg };
