import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/home";
import Login from "./Components/login";

let App = ()=> {
  return (
     
     <>
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
     </>
    
  );
}

export default App;
