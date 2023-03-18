const blessed = require('blessed');
const contrib = require('blessed-contrib');

const screen = blessed.screen({ smartCSR: true, fullUnicode: true });

const log = contrib.log({
  fg: 'green',
  selectedFg: 'green',
  label: 'Server Log',
});

function printASCII(asciiData) {
  return new Promise((resolve, reject) => {
    asciiData.split('\n').forEach((line) => {
      log.log(line);
    });
    screen.append(log);
    // screen.render();
    console.log('screen rendered');
    resolve();
  });
}

module.exports = { printASCII, screen };
