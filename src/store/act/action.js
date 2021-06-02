export const ADD_LIKE = 'ADD_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const ADD_DISLIKE = 'ADD_DISLIKE';
export const REMOVE_DISLIKE = 'REMOVE_DISLIKE';

const actions = {};

actions.addLike = (post) => {
	return { type: ADD_LIKE, payload: post };
};

actions.removeLike = (id) => {
	return { type: REMOVE_LIKE, payload: id };
};

actions.addDisLike = (post) => {
	return { type: ADD_DISLIKE, payload: post };
};

actions.removeDisLike = (id) => {
	return { type: REMOVE_DISLIKE, payload: id };
};

export default actions;
