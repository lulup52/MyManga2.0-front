const initialState = {
	user : 0,
	popUpState : false,
	popUpMsg : ""

}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE':
			return {
			  ...state,
			  user: action.value,
			};
		  case 'TOGGLE_POPUP':
			return {
			  ...state,
			  popUpState: action.toggle,
			  popUpMsg : action.popUpMsg
			};
		default:
			return state;
	}
}

export default userReducer;
