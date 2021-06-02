import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Nav from '../components/Nav/Nav';
import Single from '../components/Single/Single';
import CreatePage from '../pages/CreatePage';
import DislikedPage from '../pages/DislikedPage';
import HomePage from '../pages/HomePage';
import LikedPage from '../pages/LikedPage';
import SearchPage from '../pages/SearchPage';
import UpdatePage from '../pages/UpdatePage';
import actions from '../store/post/action';

const Routes = () => {
	const dispatch = useDispatch();
	useEffect(() => dispatch(actions.fetchPost()), [dispatch]);
	return (
		<Router>
			<div className='container'>
				<Nav />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/create' component={CreatePage} />
					<Route path='/like' component={LikedPage} />
					<Route path='/dislike' component={DislikedPage} />
					<Route exact path='/posts/:id' component={Single} />
					<Route path='/posts/:id/edit' component={UpdatePage} />
					<Route path='/search' component={SearchPage} />
				</Switch>
			</div>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				closeOnClick
				pauseOnFocusLoss
				draggable
				pauseOnHover
				hideProgressBar
			/>
		</Router>
	);
};

export default Routes;
