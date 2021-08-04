import React from "react";

class App extends React.Component{
  
    state = {
        tasks: ["make coffee", "make notes", "go for a jog","new task"]
    }

     render = () => {
         return (
            <ul>
                {
                    this.state.tasks.map((el) => {
                        return <li>{el}</li>;
                    })
                }
            </ul>
         );    
     }
  
}

export default App;
