import { useState } from "react";

let App = ()=> {
  
  // Counter ki info store karane ke liye state use karna padega and functional comp's mein state hooks ki help se bna sakte hai
  // hook's name is useState
  // count => state variable
  // setCount => is a function use to change 'count' state
  // useState() => is a hook function which takes initail value of state as a input
  // useState() => always returns an array whose first thing is state variable and second thing is a function to change that first thing(state variable)

  let [count, setCount] = useState(0); // useState() mein ham state ki initial value pass karte hai
  // we can give any name to function Name setCount

  // let [name, setname] = useState("amazon"); // If we need to make multiple states than we have to call multiple times useState()


  return (
    <div>
       <button onClick={()=>{setCount(count + 1)}}>+</button>
       <p>{count}</p>
       <button onClick={()=>{setCount(count - 1)}}>-</button>
    </div>
  );
}

export default App;
