const Jimp = require('jimp');
const ascii = require('ascii-art');

const defaultOutputPath = `src/assets/output`;
const outputImgFormate = 'png';

function getGrayScaledImg(inputImage, frameNumber) {
  return new Promise((resolve, reject) => {
    console.log(`-> optimizing img in frame ${frameNumber}`);
    const outputFileName = `${frameNumber}.${outputImgFormate}`;
    Jimp.read(inputImage, function (err, image) {
      if (err) {
        console.log(err);
        reject(err);
      }
      image
        .resize(100, Jimp.AUTO) // Resize the image to a width of 100 pixels.
        .grayscale() // Convert the image to grayscale.
        .write(`${defaultOutputPath}/${outputFileName}`)// Save the grayscale image to disk.
        

      console.log('-/-> Finished processing');
      console.log(
        `(i) Frame ${frameNumber} optimized and stored at ${defaultOutputPath}/${outputFileName}`
      );

      resolve([image, `${defaultOutputPath}/${outputFileName}`]);
    });
  });
}

function convertImgObj2ASCII(imageObj, fileFullPath) {
  return new Promise((resolve, reject) => {
    try {
      ascii.image(
        {
          filepath: fileFullPath,
          width: imageObj.bitmap.width * 0.6,
          height: imageObj.bitmap.height * 0.6,
          color: false,
          stringify: true,
        },
        function (err, converted) {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(converted);
          }
        }
      );
    } catch (exe) {
      console.log(exe);
    }
  });
}

module.exports = { getGrayScaledImg, convertImgObj2ASCII };
