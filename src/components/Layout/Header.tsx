import { Link } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import NavbarMobile from '../Navbar-mobile/Navbar-mobile';

import breakpointsData from '../../data/breakpoints.json';

import classes from '../../styles/components/header.module.scss';

const { breakpoints } = breakpointsData;

const Header = () => (
	<header className={classes.headerContainer}>
		<div className={classes.logoContainer}>
			<Link to="/">
				<img
					alt="Cosmetic salon logo"
					className={classes.logo}
					src="/assets/Logo/logo.png"
				/>
			</Link>
		</div>
		{window.innerWidth < breakpoints.xsLaptop ? <NavbarMobile /> : <Navbar />}
	</header>
);

export default Header;
