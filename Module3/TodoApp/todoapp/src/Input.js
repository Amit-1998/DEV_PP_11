import React from "react";

class Input extends React.Component{
       
    render = ()=>{
         
          return(
                // input ka nya component
                <input className="input-box"
                    type="text" 
                    onChange={(e) => {                         // 2nd video todo =>40:00
                         this.setState( {currInput: e.currentTarget.value} );   // setState error dega kuki hamne yha par state nhi bnayi to yha se Input comp ko export karke App.js file mein import karke (jis place se input tag UI vala code copy kara the vha par <Input/> as an object daal denge)
                    }} 
                    onKeyDown={ (e) => {
                             if((e.key == "Enter")){
                                 this.setState( {
                                     tasks: [...this.state.tasks, this.state.currInput], 
                                     currInput: ""
                                });
                             }   
                       }

                    }
                  value={this.state.currInput}  // initial value
                />

          );
    }
}

export default Input;