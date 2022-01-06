import classes from '../../styles/components/hamburger.module.scss';

interface Props {
	toggleSetIsOpen: () => void;
}

const Hamburger = ({ toggleSetIsOpen }: Props) => (
	<div className={classes.hamburgerContainer} onClick={toggleSetIsOpen}>
		<span className={classes.bar}></span>
		<span className={classes.bar}></span>
		<span className={classes.bar}></span>
	</div>
);

export default Hamburger;
