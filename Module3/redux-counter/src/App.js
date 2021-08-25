import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

// import the actions
import { decrementCrestor, incrementCreator, loginCreator, logoutCreator } from "./redux/actions"; // incrementCreator is an action


let App = () => {

  // Provider component ke store se state nikal kar ham us state ko change kar sakte 
  // for this work we have two hooks 1) useSelector() 2) useDispatch()

  // useSelector(function(){}) takes a function and is function ko vo saari states milti milti hai jo store mein hoti hai
  // useSelector() ke ander function jo paas hua hai vo state leta hai and ham state ke saath kuch bhi kar sakte hai sirf update ko chod kar
  // jo chis (state) ander passing function se return vhi same state useSelector se bhi return hoti hai

  // let state = useSelector( function (state){
    //     console.log(state);        
    //     return state;
    //  });
    
  // let's destructure the both states
  let { count,logged } = useSelector( function (state){
    console.log(state);        
    return state;
  });



// let state = useSelector( (state) => state );

 // another hook useDispatch()
 let dispatch = useDispatch(); // useDispatch() hook ko call karne se we get a function named "dispatch"
 // ham dispatch function ki madad se jitne bhi hamare actions hain unko dispatch kar sakte hai


  return (
    <>
        <button onClick={()=>{ dispatch(loginCreator()); }}>Login</button>
        <button onClick={()=>{ dispatch(logoutCreator()); }} >Logout</button>
        <br></br>

        {/*conditional rendering */}
        { logged ? (
              <>
                    <button onClick={() => {
                        dispatch(incrementCreator(1));
                    }}>+1</button>

                    <button onClick={() => {
                          dispatch(incrementCreator(10));
                      }}>+10</button>


                    <p>{count}</p>

                    <button onClick={() => {
                        dispatch(decrementCrestor());
                      }}>-</button>
              </>
           ):""}
    </>
  );
}

export default App;
