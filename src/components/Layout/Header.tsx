import { Link } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

import classes from '../../styles/components/header.module.scss';

const Header = () => {
	return (
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
			<Navbar />
		</header>
	);
};

export default Header;
