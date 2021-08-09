import React from "react";
import "./App.css";
import KeyPad from "./KeyPad";
import Operators from "./Operators"

class App extends React.Component{
       
     state = {
         operand1 : "",
         operand2 : "",
         operator : "",
         expression: "",
         result : 0
     }

     res = (sign)=>{
         if(sign == "+"){
             let answer = Number(this.state.operand1) + Number(this.state.operand2);
             let exp = this.state.expression + " = "+answer;
             this.setState( {expression: exp, result: answer} );
         }
         else if(sign == "-"){
        
             let val1 = this.state.operand1;
             let val2 = this.state.operand2;
             console.log(val1);
            let answer = Number(val1) - Number(val2);
            console.log(answer);
            let exp = this.state.expression + " = "+answer;
            this.setState( {expression: exp, result: answer} );
         }
         else if(sign == "/"){
            let answer = Number(this.state.operand1) / Number(this.state.operand2);
            let exp = this.state.expression + " = " + answer;
            this.setState( {expression: exp, result: answer} );
         }
         else if(sign == "*"){
            let answer = Number(this.state.operand1) * Number(this.state.operand2);
            let exp = this.state.expression + " = " + answer;
            this.setState( {expression: exp, result: answer} );
         }
        
        
     }
     
     changeVal1 = (val1)=>{
        // let exp = this.state.expression
        
        let exp = this.state.expression + val1;
          this.setState( {
                 operand1: val1,
                  expression: exp,
          } );
     }

     changeVal2 = (val2)=>{
            let exp = this.state.expression + val2;
            this.setState( {
                 operand2: val2,
                 expression: exp,
            } );
     }

     updateExpwithOptr = (oprtr)=>{
         let exp = this.state.expression + oprtr;
         console.log(exp);
         this.setState({
             operator: oprtr,
             expression: exp
         })
     }

     render = ()=>{
         return(
              <div className="Screen">
                  <div className="Display">
                      <p>{ this.state.expression }</p>
                  </div>
                  
                  
                  <Operators changeExp={this.updateExpwithOptr}  ans={this.res} optr={this.state.operator}/>
                  
                  
                  <KeyPad val1 = {this.state.operand1} val2={this.state.operand2} updateVal1={this.changeVal1} updateVal2={this.changeVal2} />
              </div>
         )
     }
  
}

export default App;