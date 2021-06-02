import { createMuiTheme } from '@material-ui/core';
import { indigo, deepOrange } from '@material-ui/core/colors';

const themes = createMuiTheme({
	palette: {
		primary: indigo,
		secondary: deepOrange,
	},
	typography: {
		fontFamily: 'Palanquin',
		fontWeightLight: 200,
		fontWeightRegular: 300,
		fontWeightMedium: 300,
		fontWeightBold: 600,
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				body: {
					backgroundColor: indigo,
				},
			},
		},
	},
});

export default themes;
