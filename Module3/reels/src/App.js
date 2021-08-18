import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

let App = ()=> {
  return (
    <Router>
         <div>
         <Switch>
                  <Route exact path="/login">
                       <Login />
                  </Route>
                  <Route exact path="/">
                       <Home />
                  </Route>
             </Switch>
         </div>
    </Router>
    
  );
}

export default App;
