import React from "react";
import "./App.css";

class App extends React.Component{
       
     state = {
         operand1 : 0,
         operand2 : 0,
         operator : "",
         result : 0
     }

     

     render = ()=>{
         return(
              <div className="Screen">
                  <div className="Display">Display Box</div>
                  
                  
                  <div className="Opbuttons">
                                <button>+</button>
                                <button>-</button>
                                <button>/</button>
                                <button>*</button>
                                <button>=</button>
                  </div>
                  
                  
                  <div className="KeyPad">
                         <button>0</button>
                         <button>1</button>
                         <button>2</button>
                         <button>3</button>
                         <button>4</button>
                         <button>5</button>
                         <button>6</button>
                         <button>7</button>
                         <button>8</button>
                         <button>9</button>
                  </div>
              </div>
         )
     }
  
}

export default App;