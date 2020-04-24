import { cartTypes } from "./cart.type";

export const toggleCartHidden = () => (dispatch: any) => {
	dispatch({
		type: cartTypes.TOGGLE_CART_HIDDEN,
	});
};

export const addItem = (item: any) => (dispatch: any) => {
	dispatch({
		type: cartTypes.ADD_ITEM,
		payload: item,
	});
};
