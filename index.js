const video = require('./src/assets/video');
const ascii = require('./src/assets/ascii');

const processingFrameCount = 2;

async function main() {
  let buffer = [];
  for (let frame = 0; frame <= processingFrameCount; frame++) {
    const savedFrameFullPath = await video.videoToFrames(frame);
    buffer.push(savedFrameFullPath);
  }
  for (frame = 0; frame <= processingFrameCount; frame++) {
    try {
      const storedFrameFPath = buffer[frame];
      const [imgObj, grayImgFullPath] = await ascii.getGrayScaledImg(
        storedFrameFPath,
        frame
      );
      debugger;
      const asciiArtFrame = await ascii.convertImgObj2ASCII(
        imgObj,
        grayImgFullPath
      );
      console.log(asciiArtFrame);
    } catch (exe) {
      console.log(exe);
    }
  }
}

main();
