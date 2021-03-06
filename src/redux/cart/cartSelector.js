import { createSelector } from "reselect";

const selectCart = state => state.cart;
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
);

export const selectHidden = createSelector([selectCart], cart => cart.hidden);
