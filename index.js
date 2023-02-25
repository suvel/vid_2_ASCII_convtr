const video = require('./src/assets/video');

const processingFrameCount = 3;

async function main() {
  for (let frame = 0; frame <= processingFrameCount; frame++) {
    //converts video to image(png), this is processed and stored in folder frames under src
    await video.videoToFrames(frame);
  }
}

main();
