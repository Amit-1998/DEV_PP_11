import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/home";
import Login from "./Components/login";
import AuthProvider from "./AuthProvider";

import { firestore } from "./firebase"
import { useEffect } from "react";

let App = ()=> {

  useEffect(()=>{
         // add
         firestore.collection("users").add({body: "This is some value"});

         // get
         async function f(){
              let querySnapshot = await firestore.collection("users").get();
              // console.log(querySnapshot.docs); //gives an array which is having all the documents in "users" collection
              for(let i=0; i<querySnapshot.docs.length; i++){
                  console.log(querySnapshot.docs[i].data());
                  
              }
         }
         f();

  }, []);

  return (   
     <>
         <h1>App</h1>
          { /*<AuthProvider>
               <Router>
                    <Switch>
                         <Route exact path="/login">
                              <Login />
                         </Route>
                         <Route exact path="/">
                              <Home />
                         </Route>
                    </Switch>
                    
               </Router>
            </AuthProvider>
            */
          }
     </>
    
  );
}

export default App;
