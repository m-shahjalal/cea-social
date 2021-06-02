import {
	AppBar,
	Container,
	List,
	ListItem,
	ListItemText,
	Toolbar,
	Typography,
} from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import useStyles from './styles';

const navLinks = [
	{ title: `Liked`, path: `/like` },
	{ title: `Dislike`, path: `/dislike` },
	{ title: `create`, path: `/create` },
	{ title: `Search`, path: `/search` },
];

const Nav = () => {
	const classes = useStyles();
	return (
		<AppBar position='static'>
			<Toolbar>
				<Container maxWidth='md' className={classes.navbarDisplayFlex}>
					<Typography
						variant='h4'
						component={Link}
						to='/'
						className={classes.logo}
						gutterBottom>
						CEA
					</Typography>
					<List
						className={classes.navDisplayFlex}
						component='nav'
						aria-labelledby='main navigation'>
						{navLinks.map(({ title, path }) => (
							<NavLink
								to={path}
								key={title}
								className={classes.linkText}>
								<ListItem button>
									<ListItemText primary={title} />
								</ListItem>
							</NavLink>
						))}
					</List>
				</Container>
			</Toolbar>
		</AppBar>
	);
};

export default Nav;
