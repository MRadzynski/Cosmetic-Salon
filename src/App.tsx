import { Route, Routes } from 'react-router-dom';

import About from './page/About';
import Contact from './page/Contact';
import Gallery from './page/Gallery';
import Homepage from './page/Homepage';
import Offer from './page/Offer';
import Pricing from './page/Pricing';

import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';

import styles from './styles/components/app.module.scss';

const App = () => {
	return (
		<div className={styles.container}>
			<Header />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/o-nas" element={<About />} />
				<Route path="/galeria" element={<Gallery />} />
				<Route path="/oferta" element={<Offer />} />
				<Route path="/cennik" element={<Pricing />} />
				<Route path="/kontakt" element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
