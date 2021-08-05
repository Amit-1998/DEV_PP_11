import React from "react";
import "./App.css"

import List from "./List";
import Input from "./Input";

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

    handleCurrInput = (value)=>{ // onChange(e) vaale ka
        this.setState({ currInput: value });
    }

    handleTasks = ()=>{ // onKeyDown() vaale ka
        this.setState({
            tasks: [...this.state.tasks, this.state.currInput],
            currInput: ""
        });
    }

    render = () => {
        return (
            <div>

                <Input handleCurrInput= {this.handleCurrInput} handleTasks={this.handleTasks} currInput= {this.state.currInput} />

                <List tasks = {this.state.tasks} deleteTask = {this.deleteTask} />
            </div>

             // uper we used <List /> as an Object
             // <List /> ismein ham tasks ki jagah kuch bhi paas kar sakte hai
             // List ko ye props ke name se milega
        );
    }

}

export default App;
