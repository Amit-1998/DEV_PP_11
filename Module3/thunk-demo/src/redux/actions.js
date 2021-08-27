export const fetchCreator = () => {
    return {
        type: "FETCH_USERS"
    }
}

export const successCreator = (users) => {
    return {
        type: "SUCCESS_USERS", // successfully sabhi users aa chuke hai
        payload: users
        // and jo users aaye hai unko mujhe save bhi krana hai to payload mein users
    }
}

export const failureCreator = (err)=>{
     return {
         type: "FAILURE_USERS",
         payload: err
     }
}
// upar vaale sabhi actions normal actions they jo ki object return kar rhe they 


// ye mera ek specific-action hai, jo thunk ke paas jayega
// ye return krta hai ek function
export const fetchUsers = ()=>{
    // returns an function, is function mein dispatch function paas krte hain joki action ko dispatch krta hai
    return (dispatch)=>{
        // dispatch function ki madad se hi async kaam kar payenge
        // is function ke andar hi async kaam hoga

        // dispatch karo sabse pehle fetch event, ki loading ko true kardo ,mein fetch karna start kr rha hu
        dispatch(fetchCreator()); 

        // async kaam
        fetch("https://jsonplaceholder.typicode.com/users").then( (res)=>{
             return res.json();
        })
        .then((json)=>{
            // json ke saath kuch bhi kar sakte hai  
            dispatch(successCreator(json)); // isko ham json data denge joki payload mein chla jayega
        })
        .catch((err)=>{
            //err
            dispatch(failureCreator(err));
        });

    }
}

// instead of dispatching ye upar vaale teen actions , we dispatch this last specific action from UI