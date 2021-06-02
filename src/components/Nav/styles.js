import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	navbarDisplayFlex: {
		display: `flex`,
		justifyContent: `space-between`,
	},
	navDisplayFlex: {
		display: `flex`,
		justifyContent: `space-between`,
	},
	linkText: {
		textDecoration: `none`,
		textTransform: `uppercase`,
		color: `white`,
	},
	logo: {
		textDecoration: `none`,
		marginTop: '15px',
		color: `white`,
	},
});

export default useStyles;
