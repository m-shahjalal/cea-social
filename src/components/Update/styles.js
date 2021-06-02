import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: { maxWidth: '100%', borderRadius: '30px', color: 'white' },

	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		maxWidth: '768px',
		margin: 'auto',
	},

	paper: {
		margin: theme.spacing(4, 0),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '80%',
		backgroundColor: theme.palette.primary.light,
		padding: theme.spacing(4, 4, 2, 4),
		borderRadius: '8px',
		color: 'white',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default useStyles;
