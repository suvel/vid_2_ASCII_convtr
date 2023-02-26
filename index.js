const video = require('./src/assets/video');
const ascii = require('./src/assets/ascii');

const processingFrameCount = 2;

async function main() {
  for (let frame = 0; frame <= processingFrameCount; frame++) {
    const savedFrameFullPath = await video.videoToFrames(frame);
    ascii.getGrayScaledImg(savedFrameFullPath, frame);
  }
}

main();
