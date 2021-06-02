import Router from './Router';
import themes from './themes';
import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from '../store/store';

const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={themes}>
				<Router />
			</ThemeProvider>
		</Provider>
	);
};

export default App;
