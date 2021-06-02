import api from '../../api/post';

export const GET_POST = 'GET_POST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const DELETE = 'DELETE';

const actions = {};

actions.fetchPost = (post) => {
	return async (dispatch) => {
		dispatch({ type: GET_POST });
		try {
			const res = await api.getPost();
			dispatch({ type: SUCCESS, payload: res.data });
		} catch (error) {
			console.log(error);
			dispatch({ type: FAILURE, payload: error });
		}
	};
};

actions.deletePost = (id) => {
	return { type: DELETE, payload: id };
};

export default actions;
