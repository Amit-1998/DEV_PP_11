// actions are just objects

// when writing actions in redux we create something called action creator function

// simple language = ham directly action mein object bna kr nhi rakhte hai, ham function bnate hai jo ki hame action ka object return krega

export const incrementCreator = (value)=>{ // ye vo function hai jo hame action object return krega
    
    // action object has property i.e "type" which tells us ki ye action kis type ka hai
    // action ki type property se reducer ko pta vhalta hai ki krna kya hai

    return { // action-object
         type: "INCREMENT",
         payload: value
     }
}

export const decrementCrestor = () => {
    return {
        type: "DECREMENT",
    };
}

export const loginCreator = ()=>{
    return {
        type: "LOGIN"
    }
}

export const logoutCreator = ()=>{
    return {
        type: "LOGOUt"
    }
}