import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { auth } from "../firebase";

import "./css/home.css"

let Home = ()=>{

    let user = useSelector( (state) => state.user);
    // console.log(user);
    let dispatch = useDispatch();

    return (
        <>
           { user?"Home" : <Redirect to="/login" /> }

            <div className="template-container">
                <div className="template">
                    <img src="http://localhost:3000/skin1.svg"></img>
                </div>
                
                <div className="template">
                     <img src="http://localhost:3000/skin2.svg"></img>
                </div>
            </div>

           <button className="home-logout-btn" onClick={()=>{
               auth.signOut();
              }}>
            Logout
           </button>
        </>
    );
}

export default Home;