import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants"

// initialState is an array of objects(products)
let initialState = [  
    {
        id: 0,
        name: "Palm Phone",
        img: "https://images-eu.ssl-images-amazon.com/images/I/71sxlhYhKWL._AC._SR360,460.jpg",
        price: 10000,
        qty: 0

    },

    {
        id: 1,
        name: "Kia Car",
        img : "https://cdni.autocarindia.com/Galleries/20190806050125_GT_05567-01-01.jpg",
        price: 1200000,
        qty: 0

    },

    {
        id: 2,
        name: "BMW Bike",
        img : "https://ic1.maxabout.us/autos/tw_india//D/2021/3/dhoom-3-bike-bmw-k1300r.jpg",
        price: 300000,
        qty: 0

    }

]

let reducer = ( state = initialState, action) => {
    let cp = [];
    let id = -1; 
    switch(action.type){
         case ADD_TO_CART:
             cp = state.map((el) => el);
             id = action.payload;
             cp[id].qty = cp[id].qty + 1;
             return cp;

         case REMOVE_FROM_CART:
             cp = state.map((el) => el);
             id = action.payload;
             if(cp[id].qty > 0)
                cp[id].qty = cp[id].qty - 1;
             return cp;


         default: 
            return state;
     }
};

export default reducer;