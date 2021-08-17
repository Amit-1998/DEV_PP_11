import { useEffect, useState } from "react";

let App = ()=> {
  
  // Counter ki info store karane ke liye state use karna padega and functional comp's mein state hooks ki help se bna sakte hai
  // hook's name is useState
  // count => state variable
  // setCount => is a function use to change 'count' state
  // useState() => is a hook function which takes initail value of state as a input
  // useState() => always returns an array whose first thing is state variable and second thing is a function to change that first thing(state variable)

  let [count, setCount] = useState(0); // useState() mein ham state ki initial value pass karte hai
  // we can give any name to function Name setCount
  let [process, setProcess] = useState("running"); // nayi state k liye bnaya for case3
 
   console.log("render");
  // let [name, setname] = useState("amazon"); // If we need to make multiple states than we have to call multiple times useState()

  // in class component when we say the component is being re-rendered it meant that render function is being executed
  // what happens in functional component ?
  // ans is jab functional component re-render hota hai tab ye function pura execute hota hai
  // now quest is jab ye poora function fir se execute hota hai tab to state fir se 0 set ho jati hogi ? ans is no becoz hook apne aap internally state ko manage karta hai
 
  // second hook
  //useEffect ek hook hai jo functional Component ke ander hi use hota hai
  // it takes 2 arguments => function, arr [optional]
  // based on you have passed the arr or not
  // we have 3 cases
  
  // case1 => you have passed a function and an empty arr
  // then useEffect calls the passed function only once, after first render
  // so it works like componentDidMount()

  // useEffect mein jo hamne function pass kra hai, usko useEffect apne aap call karta hai , kab call karta hai? usi par cases bante hai
  
  // useEffect(()=>{
  //     console.log("Case1: Empty Array vaala useEffect was called");
  // }, []);

// for Cleanup= consider case2
// Case2 : 
// In this case you only give a function and no arr
// useEffect will execute your passed function after every render, that is after first render and after every re-render
 useEffect(()=>{
    console.log("Case2 : No arr,only function passed vaala useEffect was called");

    //ye har case ke liye ho sakta hai ki
    // useEffect ko jo ham function dete hai vo return kar sakta hai ek nya function
     return ()=>{
        console.log("clean-up function");
     }
 });

 //case3 : 
 // this useEffect will execute after first render
 // and also after the state variable which is being used changes
//  useEffect(() => {
//     let arr = process.split("i");
//     // useEffect mein jo function hai agar vo meri state ke saath kaam kar rha hai
//     // to us state ko mujhe is array mein likhne padta hai
//     console.log(arr);
//  }, [process]); // is arr ko ham dependency array bhi bolte hai 

  return (
    <div>
       <button onClick={()=>{setCount(count + 1)}}>+</button>
       <p>{count}</p>
       <button onClick={()=>{setCount(count - 1)}}>-</button>
       
       
    </div>
  );
}

export default App;
