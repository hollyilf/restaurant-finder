import React from "react";
import plate from "../../images/plate.jpg";
import { Link } from "react-router-dom";

const InfoCard = (props) => {
  
	//Props passed over from RestaurantsAll list or RestaurantsSearch list 
	const item = props.item;
  
	//Map through the grades to get all the scores - store as ratingsArray
	const ratingsArray = item.grades.map((ratings) => {return ratings.score} );
	//Store the number of scores 
	const ratingsArrayCount = ratingsArray.length;
  //Reduce the ratingsArray to find the sum of all of the scores 
	//Add 0 as initial value so that reduce doesn't throw an error for empty arrays 
  const ratingsArraySum = ratingsArray.reduce((accumulator, currentNumber) => {return accumulator + currentNumber}, 0)
  //Calculate the average score to 1 decimal place 
	const overallRating = (ratingsArraySum / ratingsArrayCount).toFixed(1);

	return (
		<div className="card info-card">
			<img className="card-img-top info-card-img" src={plate} alt="plate icon" />
			<div className="card-body info-card-body">
				<h5 className="card-title">
				{/* Crop title so all cards have the same height: */}
					{item.name.length < 23 ? item.name : item.name.slice(0, 20) + "..."}
				</h5>
				<p>
				{/* Render overall rating if there is one */}
					❤️ {overallRating === "NaN" ? "" : overallRating}{" "}
					{/* Render number of ratings if there are ratings - nested ternary operator to ensure gramatically correct sentence  */}
					<span className="info-card-rating-count">
						{overallRating === "NaN"
							? "No ratings"
							: ratingsArrayCount === 1
							? ratingsArrayCount + " rating"
							: ratingsArrayCount + " ratings"}
					</span>
				</p>
				<p className="info-card-borough">{item.borough}</p>
				{/* Crop cuisine text so all cards have the same height: */}
				<p> Cuisine: 
					{item.cuisine.length < 24
						? " " + item.cuisine
						: " " + item.cuisine.slice(0, 18) + "..."}
				</p>
				{/* Button to individual restaurant page: */}
				{/* When the user is in the RestaurantSearch list, state picks up the user search query and passes it to the individual page as state.from to be picked up by useLocation hook */}
				<Link className="btn btn-primary info-card-btn" to={`/${item.restaurant_id}`} state={{ from: props.userQuery }}>
					More Details
				</Link>
			</div>
		</div>
	);
}

export default InfoCard;