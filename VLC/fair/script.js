const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer = document.querySelector("#main");

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
   video.play();

   videoPlayer.appendChild(video);

}
const SpeedUp = document.querySelector("#SpeedUp");
const SpeedDown = document.querySelector("#SpeedDown");
const VolumeUp = document.querySelector("#VolumeUp");
const VolumeDown = document.querySelector("#VolumeDown");

const SpeedUpHandler=()=>{
    // where is video
    const video=document.querySelector("video");
    if( video==null){
        return;
    }
    if(video.playbackRate > 3){
        return;
    }
    const increaseSpeed=video.playbackRate+0.5;
    video.playbackRate=increaseSpeed;
}

const SpeedDownHandler=()=>{
    const video=document.querySelector("video");
    if(video==null){
        return;
    }
    if(video.playbackRate<0){
        return;
    }
    const decreaseSpeed=video.playbackRate-0.5;
    video.playbackRate=decreaseSpeed;
    console.log(decreaseSpeed);
}

const VolumeUpHandler=()=>{
    const video=document.querySelector("video");
    if(video==null){
        return;
    }
    if(video.volume>=0.99){
        return;
    }
   
    const increseVolume=video.volume+0.1;
    video.volume=increseVolume;
    console.log(increseVolume);
}

const VolumeDownHandler=()=>{
    const video=document.querySelector("video");
    if(video==null){
        return;
    }
    if(video.volume>0){
        const decreaseVolume=video.volume-0.1;
        video.volume=decreaseVolume;
        console.log(decreaseVolume);
    }
    

}

SpeedUp.addEventListener("click", SpeedUpHandler);
SpeedDown.addEventListener("click",SpeedDownHandler);
VolumeUp.addEventListener("click",VolumeUpHandler);
VolumeDown.addEventListener("click",VolumeDownHandler);
videoBtn.addEventListener("click",handelInput );
videoInput.addEventListener("change", acceptInputHandler );
