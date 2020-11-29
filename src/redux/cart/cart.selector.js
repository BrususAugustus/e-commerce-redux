import { createSelector } from "reselect";

//input selectors
const selectCart = (state) => state.cart;

//memoize selectors
//Selects the cart items
export const selectCartItems = createSelector(
  //array of input selectors
  [selectCart],
  //their return values in order in which they were provided
  //Get the cart items from the cart state
  (cart) => cart.cartItems
);

//selects the number of items in the cart
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
)
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);