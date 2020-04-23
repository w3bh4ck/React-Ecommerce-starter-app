const INITIAL_STATE = {
	cart: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ACTION:
			return {
				...state,
			};
		default:
			return state;
	}
};

export default userReducer;
