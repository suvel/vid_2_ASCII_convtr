const video = require('./src/assets/video');
const ascii = require('./src/assets/ascii');
const display = require('./src/assets/display');

const processingFrameCount = 2;
const extractionFrameRate = 25;

async function main() {
  try {
    let originalFrameCount  = await video.getFrameCount();
    let totalFrame = Math.floor(originalFrameCount/extractionFrameRate);
    console.log(`totalFrame: ${totalFrame}`);
    let buffer = [];
    for (let frame = 0; frame < totalFrame; frame++) {
      const savedFrameFullPath = await video.videoToFrames(frame);
      buffer.push(savedFrameFullPath);
    }
    console.log(`frame buffer created`);
    let buffer2 = [];
    for (frame = 0; frame < buffer.length; frame++) {
      const storedFrameFPath = buffer[frame];
      const [imgObj, grayImgFullPath] = await ascii.getGrayScaledImg(
        storedFrameFPath,
        frame
      );
      buffer2.push({ imgObj, grayImgFullPath });
      console.log('generating ascii');
    }
    console.log(`optimized image buffer created`);
    console.log('buffer length');
    console.log(buffer2?.length);
    for (frame = 0; frame < buffer2.length; frame++) {
      const asciiArtFrame = await ascii.convertImgObj2ASCII(
        buffer2?.[frame]?.imgObj,
        buffer2?.[frame]?.grayImgFullPath
      );
      await display.printASCII(asciiArtFrame);
    }
  } catch (exe) {
    console.log(exe);
  }
}

main();
