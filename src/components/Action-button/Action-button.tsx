import { Link } from 'react-router-dom';

import classes from '../../styles/components/action-button.module.scss';

const ActionButton = () => {
	return (
		<div className={classes.actionButtonContainer}>
			<Link className={classes.actionButton} to="/oferta">
				Poznaj Naszą Ofertę <span className={classes.arrow}>&#10132;</span>
			</Link>
		</div>
	);
};

export default ActionButton;
