import React from "react";

class App extends React.Component{
    
    state = {
        operand1 : 0,
        operand2 : 0,
        operator : '',
        result : 0
    }

    firstNo= (value)=>{
      this.setState({operand1:value,currentOP:value});
      console.log(this.state.inputVal1);
    }
    SecNo= (value)=>{
      await this.setState({inputVal2:value,currentOP:this.state.inputVal1+this.state.currentOperation+value});
      console.log(this.state.inputVal2);
    }
    
    changeOptr=async (optr)=>{
      await this.setState({currentOperation:optr,currentOP:this.state.inputVal1+optr});
      console.log(this.state.currentOperation);
    }

    render = ()=>{
         return(
              <div className = "NokiaScreen">
                    <div className="Result">
                        <p>{this.state.result}</p>
                    </div>
                    
                    <Operators />
                    <Input firstNo= {this.inputV1} SecNo= {this.inputV2} val1={this.state.inputVal1} val2={this.state.inputVal2} op={this.state.currentOperation}/>
              </div>
         );
    }
}

export default App;
