import { cartTypes } from "./cart.type";

export const toggleCartHidden = () => (dispatch) => {
	dispatch({
		type: cartTypes.TOGGLE_CART_HIDDEN,
	});
};
