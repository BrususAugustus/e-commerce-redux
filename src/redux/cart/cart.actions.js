import {CartActionTypes} from "./cart.types";


export const toggleCartHidden = ()=>({
    type: CartActionTypes.TOGGLE_HIDDEN
})

export const addItemToCart = item =>({
    type: CartActionTypes.ADD_ITEM,
    payload:item
})