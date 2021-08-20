import { useState } from "react";
import "./videoCard.css"

let VideoCard = ()=>{
    
    let [playing, setPlaying] = useState(false);

    return (
        <div className="video-card">
            <video onClick={ (e)=>
                  {
                      if(playing){
                          e.currentTarget.pause();
                          setPlaying(false);
                      }
                      else{
                          e.currentTarget.play();
                          setPlaying(true);
                      }
                  }
               }
            loop src="https://www.appsloveworld.com/wp-content/uploads/2018/10/640.mp4" className="video-card-video"></video>
        </div>
    );
}

export default VideoCard;