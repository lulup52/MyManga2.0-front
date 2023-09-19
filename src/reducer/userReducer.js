const initialState = 0;

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE':
			return state = action.value;
		default:
			return state;
	}
}

export default userReducer;
