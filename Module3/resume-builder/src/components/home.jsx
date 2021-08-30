import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { auth } from "../firebase";

import "./css/home.css"
import { templateCreator } from "../redux/actions/templateActions"


let Home = ()=>{

    let user = useSelector( (state) => state.user);
    // console.log(user);
    let code = useSelector((state)=>state.template);
    console.log(code);

    let dispatch = useDispatch();

    return (
        <>
           { user?"Home" : <Redirect to="/login" /> }

            <div className="template-container">
                <div onClick={()=>{ dispatch(templateCreator("A")); }} className="template">
                    <img src="http://localhost:3000/skin1.svg"></img>
                </div>
                
                <div onClick={()=>{ dispatch(templateCreator("B")); }} className="template">
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