import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		boxShadow: '0 0 25px 5px #00000050',
		color: 'white',
		background: theme.palette.primary.light,
	},
	cardMedia: {
		paddingTop: '56.25%',
	},
	cardContent: {
		flexGrow: 1,
		textDecoration: 'none',
		color: '#222',
	},
	cardActions: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: '10px',
		textDecoration: 'none',
		color: '#333',
	},
	title: {
		padding: theme.spacing(2, 0),
	},
}));
export default useStyles;
