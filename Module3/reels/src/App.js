import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/home";
import Login from "./Components/login";
import AuthProvider from "./AuthProvider";

import { firestore } from "./firebase"
import { useEffect } from "react";

let App = ()=> {

  useEffect(()=>{
         firestore.collection("users").add({body: "This is some value"});
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
