import { NavLink } from 'react-router-dom';

import navLinksData from '../data/nav.json';

import classes from '../../styles/components/navbar.module.scss';

const Navbar = () => {
	const { navLinks } = navLinksData;

	return (
		<nav className={classes.navLinksContainer}>
			<ul className={classes.navLinks}>
				{navLinks.map((link) => (
					<li className={classes.navLink}>
						<NavLink
							className={(navData) => (navData.isActive ? classes.active : '')}
							to={link.path}
						>
							{link.label}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
