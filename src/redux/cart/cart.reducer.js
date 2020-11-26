import {CartActionTypes} from "./cart.types";
import {addItemtToCart} from "./cart.utils";
 
const INITIAL_STATE = {
    hidden : true,
    cartItems : []
};

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case CartActionTypes.TOGGLE_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemtToCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
};

export default cartReducer;