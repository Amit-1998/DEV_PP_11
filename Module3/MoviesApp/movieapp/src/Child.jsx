// import React from "react";

// class Child extends React.Component{
    
//     constructor(props){ // constructor mein props milte hi hai syntax hai aisa halaki props mein undefine aayega, Although App khud ek Parent Comp hai 
       
//         super(props); // super ye Uper React.Component vaali class hogi
//         console.log("constructor was called");
//         this.state = {  // this means ye jo App comp hai ismein state bna do, pehle ham state ko bhar bnate they,ab bhar nhi bnayenge constructor creation phase mein call hota hai to creation phase mein hi bna denge 
//             on: false
//         }; 
//     }
 
//     componentDidMount(){
//        console.log("component did mount was called");
//     }

//     componentDidUpdate(){
//         console.log("component did update was called");
//     }

//     componentWillUnmount(){
//          console.log("component will unmount was called");
//     }

//     render = ()=>{
//         console.log("render was called");
//         return (
//              <div>
//                   <button onClick={ ()=>{
//                       if(this.state.on){
//                           this.setState( {on: false} );
//                       }
//                       else{
//                          this.setState( {on: true} );
//                       }
//                   } }>Click</button> 
//              </div>
//         );
//     }
// }

// export default Child;
