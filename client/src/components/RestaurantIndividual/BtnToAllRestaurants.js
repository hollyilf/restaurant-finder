import React from "react"; 
import { Link } from "react-router-dom";

const BtnToAllRestaurants = () => { 

    return (
			<div>
				<Link to="/" className="btn btn-outline-primary btn-back">
					Back to All Restaurants
				</Link>
			</div>
		);
}

export default BtnToAllRestaurants;