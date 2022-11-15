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

console.log = (msg) => logElem.innerHTML += `${msg}<br>`;
console.error = (msg) => logElem.innerHTML += `<span class="error">${msg}</span><br>`;
console.warn = (msg) => logElem.innerHTML += `<span class="warn">${msg}<span><br>`;
console.info = (msg) => logElem.innerHTML += `<span class="info">${msg}</span><br>`;

async function startCapture() {
  logElem.innerHTML = "";

  try {
    videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    dumpOptionsInfo();
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}

function stopCapture(evt) {
  let tracks = videoElem.srcObject.getTracks();

  tracks.forEach((track) => track.stop());
   
  let url = URL.createObjectURL(tracks)
  
  let a = document.createElement('a')
      a.href = url
      a.download = 'video.webm'
      a.click()
  videoElem.srcObject = null;
}

function dumpOptionsInfo() {
  const videoTrack = videoElem.srcObject.getVideoTracks()[0];

  
}
