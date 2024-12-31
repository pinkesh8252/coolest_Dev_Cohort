
const SpeedUp = document.querySelector("#SpeedUp");
const SpeedDown = document.querySelector("#SpeedDown");
const VolumeUp = document.querySelector("#VolumeUp");
const VolumeDown = document.querySelector("#VolumeDown");
const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer = document.querySelector("#main");

const SpeedUpHandler= function(){
    alert("Speed up was clicked");
}
const handelInput =function(){
    videoInput.click();
    console.log("input is clicked")
}
const acceptInputHandler= (obj) => {
    const selectedFiles=obj.target.files[0];
    // src ->base64
   const link=URL.createObjectURL(selectedFiles);
   const video=document.createElement("video");
   video.src=link;
   video.setAttribute("class","video");
   video.controls="true"
   video.play();

   videoPlayer.appendChild(video);

}

SpeedUp.addEventListener("click", SpeedUpHandler);
videoBtn.addEventListener("click",handelInput );
videoInput.addEventListener("change", acceptInputHandler );
