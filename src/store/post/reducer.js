import { SUCCESS, GET_POST, FAILURE, DELETE } from './action';

const initialState = {
	loading: true,
	post: [],
	error: null,
};

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POST:
			return {
				...state,
				loading: true,
			};
		case SUCCESS:
			return {
				...state,
				loading: false,
				post: action.payload,
				error: null,
			};
		case FAILURE:
			return {
				...state,
				post: {},
				loading: false,
				error: action.payload,
			};
		case DELETE:
			const newState = state.post.filter(
				(item) => item.id !== action.payload
			);
			return { ...state, post: newState };
		default:
			return state;
	}
};

export default postReducer;
