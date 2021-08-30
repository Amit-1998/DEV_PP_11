let templateReducer = (state=null, action)=>{ // state is null denotes no template is selected

    switch(action.type){
        case "SET_TEMPLATE":
            return action.payload;
        default:
            return state;
    }
}

export default templateReducer;