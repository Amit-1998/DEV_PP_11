import React from "react"; 

// MyComp name ki class inherit karti hai properties from class name React.Component
// React.Component class hame "react" package se milegi usko use karne se pehle hame use import karna hoga from "react"

class MyComp extends React.Component{ // extends means inherit
    
    state = { // written in form of an object
        someNumber: 2
    } // ab is data ko mein apni UI mein use kar sakta hu

    // let render = ()=>{} 
    // render name ka function React.Component name ki class ke paas pehle se hota hai
    render = () => {

        return(
             // is return mein hmari UI aati hai
             <div> 
                  <h1>Hello This is Class-Based Component </h1>
                  <h2> { this.state.someNumber } </h2> 
             </div>
             // here this refers to our current component
        );
    }
}

export default MyComp;

// javascript ke andar jo bhi classes likhte hai unke ander jo bhi function likhte hai uske pehle "let" keyword use nhi karte direct function name likhte hai than arrow function like render = ()=>{}