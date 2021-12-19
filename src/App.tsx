import { Routes, Route } from 'react-router-dom';

import About from './page/About';
import Contact from './page/Contact';
import Gallery from './page/Gallery';
import Offer from './page/Offer';
import Pricing from './page/Pricing';
import Homepage from './page/Homepage';

import './App.css';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/o-nas" element={<About />} />
			<Route path="/galeria" element={<Gallery />} />
			<Route path="/oferta" element={<Offer />} />
			<Route path="/cennik" element={<Pricing />} />
			<Route path="/kontakt" element={<Contact />} />
		</Routes>
	);
};

export default App;
