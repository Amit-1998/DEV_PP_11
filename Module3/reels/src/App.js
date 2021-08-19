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

         // getAll documents/objects
     //     async function f(){
     //          let querySnapshot = await firestore.collection("users").get();
     //          // console.log(querySnapshot.docs); //gives an array which is having all the documents in "users" collection
     //          for(let i=0; i<querySnapshot.docs.length; i++){
     //              console.log(querySnapshot.docs[i].data());
                  
     //          }
     //     }
     //     f();

        let f = async ()=>{
             // getSingle
     
             // this gives you the reference of that document
             let docRef = firestore.collection("users").doc("fLQNz12NfrWeOBgDtFJG");
             let documentSnapshot = await docRef.get();
             console.log(documentSnapshot.data());
             console.log(documentSnapshot.id);
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
