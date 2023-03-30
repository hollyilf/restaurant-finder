import React from "react"; 
import RatingCard from "./RatingCard";

const Ratings = (props) => {

  const reviews = props.reviews;

  // Sort the reviews by date in descending order
  reviews.sort((a, b) => new Date(b.date) - new Date(a.date));

	const renderRatings = reviews.map((item, k) => <RatingCard item={item} key={k} />);

  return (
		<div>
			{reviews.length === 0 ? (
				<p className="no-rating info-card-rating-count">No ratings yet</p>
			) : (
				<p className="body-text">Ratings: </p>
			)}
			{renderRatings}
		</div>
	);
}

export default Ratings; 