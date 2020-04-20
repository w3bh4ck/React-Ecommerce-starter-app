import { SET_CURRENT_USER } from "./action-types/user.types";

export const getCurrentUser = (user: any) => (dispatch) => {
	dispatch({
		type: SET_CURRENT_USER,
		payload: user,
	});
};
