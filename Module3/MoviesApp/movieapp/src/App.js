import React from "react";

class App extends React.Component{
    
    constructor(props){ // constructor mein props milte hi hai syntax hai aisa halaki props mein undefine aayega, Although App khud ek Parent Comp hai 
       
        super(props); // super ye Uper React.Component vaali class hogi
        console.log("stage1");
        this.state = {}; // this means ye jo App comp hai ismein state bna do, pehle ham state ko bhar bnate they,ab bhar nhi bnayenge constructor creation phase mein call hota hai to creation phase mein hi bna denge 
    }
 
    componentDidMount(){
       console.log("stage 3 ");
    }

    render = ()=>{
        console.log("stage 2");
        return <div></div>;
    }
}

export default App;
