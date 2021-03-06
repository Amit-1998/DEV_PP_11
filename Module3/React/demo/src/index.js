
//libraries with the help of which we can write the code of React 
import React from 'react'; // this library contains component bnane ka logic (creation logic)
import ReactDOM from 'react-dom'; //shadow DOM vaala logic i.e render logic //un components ko browser par dikhana kaisa hai uska logic is library mein hota hai

// App is component we have imported
// import App from './App'; // ye App ek component hai jo by default hame mila hua hai jo ki yha import kar rkha hai 

// import MyComp from "./MyComp"; // exactly same name MyComp 

import MyComp from "./classBasedComponent/MyComp";

ReactDOM.render(
                //   <App />, // ek Component
                //   <MyComp/>, // basically <MyComp/> ek component usage hai joki ek sort of Object hai MyComp.js class ka// class based vaala component
                   <div>
                        <MyComp/>  
                        <hr/>

                        <MyComp/>
                        <hr/>

                        <MyComp/>
                        <hr/>

                        <MyComp/>
                        <hr/>
                        
                        <MyComp/>
                   </div>, // ek component(parent) jiske chaar child
                   document.getElementById('root') // aur ek jagah jha us component ko dikhana hai
                    // yha par document us index.html(inside public folder) file ko indicate karta hai
                    // ye index.html file se id="root" vaale div ko laata hai aur usme App vaale component ko daal deta hai
                );

// React.render() sirf ek hi component leta hai                
// ReactDOM.render() function mein sirf ek hi component lga sakte hai ya pass kar sakte hai

// <MyComp/> suppose yha ek alag object bna liya, to upar vaale aur aur ye done mein jo state(piece of data stored in component) hogi that can be different