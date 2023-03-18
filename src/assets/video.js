//====
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const ffprobe = require('ffprobe')
const ffprobeStatic  = require('ffprobe-static')
ffmpeg.setFfmpegPath(ffmpegPath);
// import issue issue resloved using advice from
// https://stackoverflow.com/questions/45555960/nodejs-fluent-ffmpeg-cannot-find-ffmpeg
//====

const inputVidPath = './src/assets/input/vc1.mp4';
const defaultFramesFolder = 'src/assets/frames';
const imgFormate = 'png';
const imgPreFix = 'frame-';

function videoToFrames(frameNumber) {
  console.log(`-> extracting and converting frame ${frameNumber} to image `);
  const destinationImgfileName = `${imgPreFix}${frameNumber}.${imgFormate}`;
  return new Promise((resolve, reject) => {
    ffmpeg(inputVidPath)
      .on('end', function () {
        console.log('-/-> Finished processing');
        console.log(
          `(i) Frame ${frameNumber} stored at ${defaultFramesFolder}/${destinationImgfileName}`
        );
        resolve(`${defaultFramesFolder}/${destinationImgfileName}`);
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

function getFrameCount(videoPath) {
  return new Promise(async (resolve, reject) => {
    ffprobe('./src/assets/input/vc1.mp4',{path:ffprobeStatic.path},function (err, info) {
      // console.log({err, info})
     const frameCount = info?.streams[0]?.nb_frames;
      resolve(parseInt(frameCount));
    });
  })
}

module.exports = {
  videoToFrames,
  defaultFramesFolder,
  imgFormate,
  imgPreFix,
  getFrameCount,
};
