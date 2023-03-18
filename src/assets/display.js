const blessed = require('blessed');
const contrib = require('blessed-contrib');

const screen = blessed.screen({
  smartCSR: true,
});

const asciiBox = blessed.box({
  top: 'center',
  left: 'center',
  width: '80%',
  height: '80%',
  content: '',
  tags: true,
  border: {
    type: 'line',
  },
  style: {
    fg: 'white',
    border: {
      fg: '#f0f0f0',
    },
  },
});

const log = contrib.log({
  fg: 'green',
  selectedFg: 'green',
  label: 'Server Log',
});

function createDisplay() {
  screen.append(asciiBox);
  screen.render();
}

function printASCII(asciiData) {
  asciiBox.setContent(asciiData);
  screen.render();
}

module.exports = { printASCII, screen,createDisplay };
