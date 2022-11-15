const videoElem = document.getElementById("video");
const logElem = document.getElementById("log");
const startElem = document.getElementById("start");
const stopElem = document.getElementById("stop");

// Options for getDisplayMedia()

const displayMediaOptions = {
  video: {
    cursor: "always"
  },
  audio: false
};

// Set event listeners for the start and stop buttons
startElem.addEventListener("click", (evt) => {
  startCapture();
}, false);

stopElem.addEventListener("click", (evt) => {
  stopCapture();
}, false);

    //we have to start the recorder manually
    mediaRecorder.start()
})
