import React from "react";
import "./App.css"

import List from "./List";

class App extends React.Component {

    state = {
        tasks: ["make coffee", "make notes", "go for a jog", "new task"],
        currInput: ""
    }

    deleteTask = (singleTask)=>{
        let currTaskArr = this.state.tasks; 

        let filteredArr = currTaskArr.filter((element) => {
                      return element != singleTask
                      });
        this.setState({ tasks: filteredArr });

    }

    render = () => {
        return (
            <div>

                <input className="input-box"
                    type="text"
                    onChange={(e) => {
                        this.setState({ currInput: e.currentTarget.value });
                    }}
                    onKeyDown={(e) => {
                        if ((e.key == "Enter")) {
                            this.setState({
                                tasks: [...this.state.tasks, this.state.currInput],
                                currInput: ""
                            });
                        }
                    }

                    }
                    value={this.state.currInput}  // initial value
                />

                <List tasks = {this.state.tasks} deleteTask = {this.deleteTask} />
            </div>

             // uper we used <List /> as an Object
             // <List /> ismein ham tasks ki jagah kuch bhi paas kar sakte hai
             // List ko ye props ke name se milega
        );
    }

}

export default App;
