import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cartItems) => cartItems.cartItems
);

export const SelectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((count, cartItems) => count + cartItems.quantity, 0)
);

export const selectCartHiddenProp = createSelector(
  [selectCart],
  (cartHidden) => cartHidden.hidden
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (count, cartItems) => count + cartItems.quantity * cartItems.price,
    0
  )
);
