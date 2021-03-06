import { createContext, useState } from "react";
import B from "./B";

// createContext() ye function react library ke paas hi hota hai
// createContext() se ek context create ho jaata hai

//step 1 : create a context
let countContext = createContext(); // createContext mein ham default value kuch bhi daal sakte hai
// ab is countContext ke paas hi Provider component hota hai

// <Provider> comp ke paas value keyword hota hai jismein vo props value dena hota jo sabse niche vaale comp ko dena hota hai

let A = ()=> {
  let [count,setCount] = useState(0);
  
  return (

    <div>
        {/* step 2: add provider as child of the component which has the data  */}
        {/* step 3: give that provider the value you want to give to your indirect low level children  */}
        <countContext.Provider value={ {count, setCount} }>
            <B />    
        </countContext.Provider>
    </div>
  );
}

export default A;
// step 4: export the context you created
export { countContext };
