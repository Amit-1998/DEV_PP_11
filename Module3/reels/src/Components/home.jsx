import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { authContext } from "../AuthProvider";
import { auth } from "../firebase";

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
        </>
    );
}

export default Home;