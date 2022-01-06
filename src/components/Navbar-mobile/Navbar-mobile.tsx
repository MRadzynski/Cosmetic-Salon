import { useState } from 'react';

import Hamburger from '../Hamburger/Hamburger';
import Navbar from '../Navbar/Navbar';

const NavbarMobile = () => {
	const [isOpen, setIsOpen] = useState(false);

	const closeMobileMenu = () => setIsOpen(false);
	const toggleSetIsOpen = () => setIsOpen(!isOpen);

	return (
		<>
			<Hamburger toggleSetIsOpen={toggleSetIsOpen} />
			{isOpen && <Navbar closeMobileMenu={closeMobileMenu} />}
		</>
	);
};

export default NavbarMobile;
