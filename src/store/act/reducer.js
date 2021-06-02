import { ADD_DISLIKE, ADD_LIKE, REMOVE_DISLIKE, REMOVE_LIKE } from './action';

const initialState = {
	like: [],
	disLike: [],
};

const likeReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_LIKE:
			const LikeIndex = state.like.findIndex(
				(item) => item.id === action.payload.id
			);
			if (LikeIndex !== -1) {
				return state;
			} else {
				return { ...state, like: [...state.like, action.payload] };
			}
		case REMOVE_LIKE:
			return {
				...state,
				like: state.like.filter((post) => post.id !== action.payload),
			};
		case ADD_DISLIKE:
			const dislikeIndex = state.disLike.findIndex(
				(item) => item.id === action.payload.id
			);
			if (dislikeIndex !== -1) {
				return state;
			} else {
				return {
					...state,
					disLike: [...state.disLike, action.payload],
				};
			}
		case REMOVE_DISLIKE:
			return {
				...state,
				disLike: state.disLike.filter(
					(post) => post.id !== action.payload
				),
			};
		default:
			return state;
	}
};

export default likeReducer;
