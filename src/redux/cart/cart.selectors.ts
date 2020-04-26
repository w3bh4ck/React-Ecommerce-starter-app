import { createSelector } from "reselect";

const selectCart = (state: any) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);

export const selectCartItemsTotalPrice = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price,
		0
	)
);
