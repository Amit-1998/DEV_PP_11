import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { authContext } from "../AuthProvider";
import { auth,storage } from "../firebase";

import "./home.css";
import VideoCard from "./videoCard";

let Home = ()=> {

    let user = useContext(authContext);
    
    return (
        <>
            {user ? "" : <Redirect to="./login" /> }
            
            <div className="video-container">
                <VideoCard />
                
            </div>

            <button className="home-logout-btn" onClick={()=>{ auth.signOut(); } }>Logout</button>
            <input type="file" onClick={(e)=>{ e.currentTarget.value = null }} onChange={(e)=>{
                //   console.log(e.currentTarget.files); gives files object
                let videoObj = e.currentTarget.files[0];
                let { name, size, type } = videoObj;

                size = size/1000000; // in mb
                if(size>10){
                    alert("File Size exceeds 10mb");
                    return;
                }

            
                type = type.split("/")[0]
                if(type !== "video"){
                    alert("Please upload a video file");
                    return;
                }

                let uploadTask = storage.ref(`posts/${user.uid}/${Date.now()+"-"+name}`).put(videoObj); // gives us an event
                uploadTask.on("state_changed", null, null, ()=>{
                    uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                        console.log(url);
                    })
                })

            }}/>
        </>
    );
}

export default Home;