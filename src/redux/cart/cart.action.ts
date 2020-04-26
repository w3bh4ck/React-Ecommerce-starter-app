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

export const clearItemFromCart = (item: any) => (dispatch: any) => {
	dispatch({
		type: cartTypes.CLEAR_ITEM_FROM_CART,
		payload: item,
	});
};

export const removeItem = (item: any) => (dispatch: any) => {
	dispatch({
		type: cartTypes.REMOVE_ITEM,
		payload: item,
	});
};
