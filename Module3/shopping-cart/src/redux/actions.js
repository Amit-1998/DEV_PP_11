import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants"

// add action OR addCreator
export const addCreator = (id)=>{ // action Creator jo sirf btayega ki kis product ko cart mein add krana hai
     return{
         type: ADD_TO_CART,
         payload: id
     }
}

export const removeCreator = (id)=>{ // action Creator jo sirf btayega ki kis product ko cart se remove krana hai
    return{
        type: REMOVE_FROM_CART,
        payload: id
    }
}
