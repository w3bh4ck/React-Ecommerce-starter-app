import { SHOP_DATA } from "./../../mocks/shopData";

const INITIAL_STATE = {
	shopData: SHOP_DATA,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
