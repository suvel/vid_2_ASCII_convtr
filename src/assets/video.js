//====
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
// import issue issue resloved using advice from
// https://stackoverflow.com/questions/45555960/nodejs-fluent-ffmpeg-cannot-find-ffmpeg
//====

const defaultFramesFolder = 'src/assets/frames';
const imgFormate = 'png';
const imgPreFix = 'frame-';

function videoToFrames(frameNumber) {
  console.log(`-> extracting and converting frame ${frameNumber} to image `);
  const destinationImgfileName = `${imgPreFix}${frameNumber}.${imgFormate}`;
  return new Promise((resolve, reject) => {
    ffmpeg('./src/assets/input/vc1.mp4')
      .on('end', function () {
        console.log('-/-> Finished processing');
        console.log(
          `(i) Frame ${frameNumber} stored at ${defaultFramesFolder}/${destinationImgfileName}`
        );
        resolve();
      })
      .on('error', function (err) {
        console.error(err);
        reject(err);
      })
      .screenshots({
        timestamps: ['0:' + frameNumber],
        filename: destinationImgfileName,
        folder: defaultFramesFolder,
        size: '640x?',
      });
  });
}

module.exports = {
  videoToFrames,
};
