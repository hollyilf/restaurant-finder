import React from "react"; 

const RatingForm = (props) => {
  const submit = props.submit;
  const handleChange = props.handleChange;
  const handleClick = props.handleClick;
  const rating = props.rating;
  
  return (
		<div>
			{" "}
			<p className={`body-text ${submit && "hidden"}`}>Rate this restaurant:</p>
			<div className="row range-row">
				<form
					className={`col col-auto range-col range-col-range ${
						submit && "hidden"
					}`}
				>
					<input
						type="range"
						value={rating.score}
						className="form-range range"
						id="rating"
						min="1"
						max="10"
						step="1"
						onChange={handleChange}
					/>
					<label htmlFor="rating" className="given-rating">
						{rating.score}/10
					</label>
				</form>
				{submit && (
					<p className="info-card-rating-count submitted-text">
						Rating submitted!
					</p>
				)}
				<div className="col col-auto range-col range-col-btn">
					<button
						type="submit"
						onClick={handleClick}
						className={`btn btn-outline-danger range-btn ${submit && "hidden"}`}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	); 
}

export default RatingForm;