import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		color: '#ffffff',
		padding: theme.spacing(6, 0, 0),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	loadingIcon: {
		margin: 'auto',
		width: '100%',
		fontSize: '2rem',
		textAlign: 'center',
		animation: '$spin 2s linear infinite',
		color: '#fff',
	},

	'@keyframes spin': {
		'0%': {
			opacity: 0.6,
			transform: 'rotate(0deg)',
		},
		'50%': {
			opacity: 1,
			transform: 'rotate(360deg)',
		},
		'100%': {
			opacity: 0.6,
			transform: 'rotate(360deg)',
		},
	},
}));
export default useStyles;
