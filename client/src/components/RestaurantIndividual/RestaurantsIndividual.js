import React, {useState, useEffect} from "react";
import axios from "axios";
//useLocation hook to check the previous path 
import {useParams, useLocation} from "react-router-dom";
import BtnBackToSearch from "./BtnBackToSearch";
import BtnToAllRestaurants from "./BtnToAllRestaurants";
import getDate from "./getDate";
import DetailsText from "./DetailsText";
import Ratings from "./Ratings";
import RatingForm from "./RatingForm";
  
const RestaurantsIndividual = () => {

	const date = getDate();
  
	const { id } = useParams();

	const location = useLocation();
	const from = location.state?.from;
  
	const [restaurant, setRestaurant] = useState({
	  name: "",
	  address: {
		building: "",
		street: "",
		borough: "",
		zipcode: "",
	  },
	  cuisine: "",
	  grades: []
	});

	const [isLoading, setIsLoading] = useState(true);
  
	const [rating, setRating] = useState({
	  date: date,
	  score: 1,
		submitted: false
	});

	const handleChange = (event) => {
	  const newScore = event.target.value;
	  setRating((prevValue) => {
		return { ...prevValue, score: newScore };
	  });
	};

	useEffect(() => {
	  axios
		.get(`/api/restaurants/${id}`)
		.then((res) => {
		  setRestaurant(res.data);
		  setIsLoading(false);
		})
		.catch((err) => {
		  console.log("Error retrieving data for RestaurantsIndividual page");
		});
	}, [id]);
  
	const handleClick = (event) => {
		event.preventDefault();
		const ratingObj = {
		  date: date,
		  score: Number(rating.score),
		};
		axios
		  .put(`/api/restaurants/${id}`, ratingObj)
		  .then((res) => {
			setRestaurant((prevRestaurant) => {
			  const updatedGrades = [...prevRestaurant.grades, ratingObj];
			  return { ...prevRestaurant, grades: updatedGrades, submitted: true };
			});
		  })
		  .catch((err) => {
			  console.log("Error adding rating at RestaurantsIndividual page");
		  });
		setRating((prevValue) => {
		  return { ...prevValue, score: 1 };
		});
	};

	return (
		isLoading === false && (
			<div>
				<DetailsText restaurant={restaurant} />
        <RatingForm submit={restaurant.submitted} handleChange={handleChange} handleClick={handleClick} rating={rating} />
				<Ratings reviews={restaurant.grades} />
				{/* Render the back to search button only from is not null or undefined  */}
				{from && <BtnBackToSearch search={from} />}
				<BtnToAllRestaurants />
			</div>
		)
	);
}

export default RestaurantsIndividual;