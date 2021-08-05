import React from "react";
import "./App.css"
import Input from "./Input";

class App extends React.Component{
  
    state = {
        tasks: ["make coffee", "make notes", "go for a jog","new task"],
        currInput: "abc"
    }

     render = () => {
         return (
            <div>
                
                <Input/> 

                <ul>
                    {
                        this.state.tasks.map((el) => {
                               return <li>{el} <button onClick = { ()=>{

                                   let currTaskArr = this.state.tasks
                                   
                                   let filteredArr = currTaskArr.filter((element)=>{
                                        return element!=el
                                   });
                                   this.setState({tasks: filteredArr});

                               }}>Delete</button></li>;
                            })
                    }
                 </ul>     
            </div>

            
         );    
     }
  
}

export default App;
