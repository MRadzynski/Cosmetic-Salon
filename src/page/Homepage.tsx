import ActionButton from '../components/Action-button/Action-button';

import classes from '../styles/components/homepage.module.scss';

const Homepage = () => {
	return (
		<section className={classes.homepageContainer}>
			<div className={classes.heroImageContainer}>
				<img
					alt="Woman with cream mask"
					className={classes.heroImage}
					src="/assets/images/hero.jpg"
				/>
			</div>
			<ActionButton />
		</section>
	);
};

export default Homepage;
