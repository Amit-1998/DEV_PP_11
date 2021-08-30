import Login from "./components/login";
import Navbar from "./components/navbar";
import SignUp from "./components/signup";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import { useEffect } from "react";
import { auth, firestore } from "./firebase";
import { userCreator } from "./redux/actions/userActions";
import {useDispatch} from "react-redux";


let App = ()=>{

  let dispatch = useDispatch();

  useEffect( ()=>{
        let unsub = auth.onAuthStateChanged( async (user)=>{

          dispatch(userCreator(user));

          if(user){
               let {uid, email} = user;
                 let docRef = firestore.collection("users").doc(uid);
                 let doc = await docRef.get();
                 if(!doc.exists){
                     docRef.set( {email} );
                 }
             }
        });

        return ()=>{
          unsub(); // to prevent from memory leakage as auth.onAuthStateChanged listener memory mein pda rahega
        };
  }, []);

  return (
    <>
       <Router>
           <Navbar />
           <Switch>
              <Route path="/login">
                 <Login />
              </Route>
              
              <Route path="/signup">
                  <SignUp />
              </Route>
              
              <Route path="/">
                  <Home />
              </Route>
           </Switch>
       </Router>  
    </>
  );
}

export default App;
