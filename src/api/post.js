import axios from '../utils/axios';

const api = {};

api.getPost = () => {
	return axios.get('/posts');
};

api.createPost = (post) => {
	return axios.post('/posts', post);
};

api.updatePost = (id, post) => {
	return axios.put(`/posts/${id}`, post);
};

api.deletePost = (id) => {
	return axios.delete(`/posts/${id}`);
};

export default api;
