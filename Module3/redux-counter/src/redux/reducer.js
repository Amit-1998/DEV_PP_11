// reducer is a function ,ehich takes action & changes the state

// reducer funct => takes two parameters => 1) state with initialize some value, 2) action

// let reducer = (state = {count: 0, login: false}, action)=>{ // hame nhi pta par khi se iske paas action object aayega
     
export const counterReducer = (state = 0, action) =>{

    switch(action.type){
        case "INCREMENT":
            return state + action.payload;

        case "DECREMENT":
            return state - 1;

        default:
            return state;
    }
}

export const loginReducer = (state = false, action) => {
    switch (action.type){
        case "LOGIN":
            return true;
        case "LOGOUT":
            return false;
        default:
            return state;
    }
}


// export default reducer;