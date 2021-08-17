import { useContext } from "react";
//step 5: import the context you exported in the component where you want to get the state
import { countContext } from "./A";


//mujhe is comp vo Provide ke props value use karni hai
let D = ()=> {
    // iske ander useContext use karenge

    //step 6: inside the functional component call useContext and give it the context
    // from which you want the value
    let valueObject = useContext(countContext); // ye vo context leta hai jo hamne A comp mein bnaya the
    // jo hamne Provider comp ko value provide kari thi vo 'value' ko mil jayegi
    return (
      <div className="d-wala-div">
          <button onClick={()=>{
              valueObject.setCount(valueObject.count+1);
          }}>
          +
          </button>
          <p>{valueObject.count}</p>
      </div>
    );
  }
  
  export default D;
  