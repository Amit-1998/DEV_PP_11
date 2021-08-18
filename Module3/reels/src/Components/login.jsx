import { useEffect } from "react";
import {auth, signInWithGoogle} from "../firebase";

let Login = ()=>{
    
    useEffect(()=>{
        auth.onAuthStateChanged( (user)=>{
              console.log(user);
        });
    },[]);

    return(
       <button onClick={()=>{ signInWithGoogle(); }} class="btn btn-primary m-4">Login with Google</button>
    );
}
export default Login;