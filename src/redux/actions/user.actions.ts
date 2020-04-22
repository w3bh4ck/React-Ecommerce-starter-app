import { userActionTypes } from "./action-types/user.types";

export const getCurrentUser = (user: any) => (dispatch) => {
	dispatch({
		type: userActionTypes.SET_CURRENT_USER,
		payload: user,
	});
};
