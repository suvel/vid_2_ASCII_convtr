<h1 align="center">📹 Video to ASCII Converter</h1>

<p align="center">
  <strong>A tool to convert video files into ASCII art in real-time.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/<username>/video-to-ascii-converter?style=flat-square" alt="License">
</p>

## 📖 Description

This tool uses the `fluent-ffmpeg` library to read video files, extract frames, and convert them to grayscale using the `Jimp` library. The grayscale images are then converted to ASCII art using the `ascii-art` library, and the resulting frames are displayed in the terminal using the `blessed-contrib` library.

## 🚀 Getting Started

1. Clone the repository:

```
git clone https://github.com/<username>/video-to-ascii-converter.git
```


2. Install the dependencies:

```
npm install
```

## 📝 Usage

To convert a video file to ASCII art, run the following command:

```
node index.js path/to/video/file.mp4
```

This will start the video conversion process and display the resulting ASCII art frames in the terminal.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and create a new branch for your changes. Once you've made your changes, submit a pull request to merge your changes into the `dev` branch.

<br/>


(c) 2023 Suvel Rathneswar 👤 and ChatGPT🤖 (the OpenAI language model) 
