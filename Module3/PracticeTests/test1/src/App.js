import React from "react"
import "./App.css"
import Input from "./Input.jsx"
import Operation from "./Operation"
class App extends React.Component {
  state = {
     inputVal1:0,
     inputVal2:0,
     currentOperation:'',
     currentOP:0,
  };
  inputV1=async (value)=>{
    await this.setState({inputVal1:value,currentOP:value});
    console.log(this.state.inputVal1);
  }
  inputV2=async (value)=>{
    await this.setState({inputVal2:value,currentOP:this.state.inputVal1+this.state.currentOperation+value});
    console.log(this.state.inputVal2);
  }
  
  changeOptr=async (optr)=>{
    await this.setState({currentOperation:optr,currentOP:this.state.inputVal1+optr});
    console.log(this.state.currentOperation);
  }
  answer=()=>{
    if(this.state.currentOperation=='+'){
      this.setState({currentOP:this.state.inputVal1+this.state.inputVal2});
    }
    else if(this.state.currentOperation=='-'){
      
      this.setState({currentOP:this.state.inputVal1-this.state.inputVal2});
    }
    else if(this.state.currentOperation=='*'){
      this.setState({currentOP:this.state.inputVal1*this.state.inputVal2});
      
    }
    else if(this.state.currentOperation=='/'){
      this.setState({currentOP:this.state.inputVal1/this.state.inputVal2});

    }
    this.setState({inputVal1:0,inputVal2:0,currentOperation:''});
  }
  render = () => {
    return(
      <div className="Calculator">
         <div className="Output-screen">
            <p>{this.state.currentOP}</p>
        </div>
        <Operation  answer={this.answer} changeStateOP={this.changeOptr}/>
        <Input v1change= {this.inputV1} v2change= {this.inputV2} val1={this.state.inputVal1} val2={this.state.inputVal2} op={this.state.currentOperation} />

      </div>


    )
  };
}

export default App;