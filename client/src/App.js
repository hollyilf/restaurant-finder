import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import RestaurantsAll from "./components/RestaurantLists/RestaurantsAll";
import RestaurantsIndividual from "./components/RestaurantIndividual/RestaurantsIndividual";
import RestaurantsSearch from "./components/RestaurantLists/RestaurantsSearch";
import Footer from "./components/Footer";

function App() {
  return (
		<Router>
			<div>
				<Header />
				<Routes>
					<Route path="/" element={<RestaurantsAll />} />
					<Route path="/:id" element={<RestaurantsIndividual />} />
					<Route path="/search/:search" element={<RestaurantsSearch />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
