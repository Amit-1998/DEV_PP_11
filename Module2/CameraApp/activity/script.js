let videoElement = document.querySelector("video");

// let constraint = { video: true };

// //for opening prompt to ask for access
// // navigator.mediaDevices.getUserMedia => ask permission for access your webcam
// navigator.mediaDevices.getUserMedia(constraint).then(function(mediaStream) {
//     // console.log(mediaStream); gives us mediaStream naam ka oject which have some functions
//     videoElement.srcObject = mediaStream; // a MediaStream from a camera is assigned to a created <video> element.
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
let mediaRecorder;

(async function(){
    let constraint = { video: true };
    let mediaStream = await navigator.mediaDevices.getUserMedia(constraint);   
    videoElement.srcObject = mediaStream;    
    mediaRecorder = new MediaRecorder(mediaStream); // call constructor & pass mediaStream Object into that
    
    mediaRecorder.onstart = function(){
       console.log("Inside on start");
    } 

    mediaRecorder.ondataavailable = function(e){
      console.log("Inside on data available");
      console.log(e); // want this data to be download as a video
      
      let videoObject = new Blob( [e.data] , {type:"video/mp4"});  // create new blob( file object) in which we change e.data ka type to "video/mp4"
      console.log(videoObject);
    }

    mediaRecorder.onstop = function(){
      console.log("Inside on stop");
      
    }

    

})();
  