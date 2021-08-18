import { createContext,useEffect, useState } from "react";
import { auth } from "./firebase";
// let authContext = createContext();
export const authContext = createContext();

let AuthProvider = (props)=>{ // isko props milenge
     
    // make states
    let [user, setUser] = useState(null); // initially user ki state null hogi
    let [loading, setLoading] = useState(true);

    useEffect(()=>{
        let unsub = auth.onAuthStateChanged( (user)=>{
              if(user){
                  let { displayName, email, uid, photoURL } = user;
                  setUser( { displayName, email, uid, photoURL } );
              }
              else{
                  setUser(null);
              }

              setLoading(false);
        });

        // cleanUp function return karenge, jo ki tabhi chalega jab hamara ye comp unMount ho jayega kuki hamare paas dusra useEffect nhi hai
        return ()=>{
             unsub();
        };

    },[]);

    return (
        <authContext.Provider value={user}>
            { !loading && props.children }
        </authContext.Provider>
    );
};

export default AuthProvider;