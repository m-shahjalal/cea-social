import { combineReducers } from 'redux';
import postReducer from './post/reducer';
import actReducer from './act/reducer';

const rootReducer = combineReducers({
	post: postReducer,
	act: actReducer,
});

export default rootReducer;
