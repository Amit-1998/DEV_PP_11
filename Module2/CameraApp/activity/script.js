let videoElement = document.querySelector("video");

let constraint = { video: true };

//for opening prompt to ask for access
// navigator.mediaDevices.getUserMedia => ask permission for access your webcam
navigator.mediaDevices.getUserMedia(constraint).then(function(mediaStream) {
    // console.log(mediaStream); gives us mediaStream naam ka oject which have some functions
    videoElement.srcObject = mediaStream; // a MediaStream from a camera is assigned to a created <video> element.
  })
  .catch(function (error) {
    console.log(error);
  });
  