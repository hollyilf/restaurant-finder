import React from "react"; 
var _ = require("lodash");

const ListTitle = (props) => {

  const search = props.search;
  const totalResults = props.totalResults;

  return (
		<div>
			{/* First ask if the page is loading  */}
			{props.isLoading ? (
				<h1 className="body-title">Loading restaurants ...</h1>
			) : //{/* Then ask if there is a search term */}
			search ? (
				//If there is a search term, ask how many results are there
				totalResults === 0 ? (
					//Title for no results
					<h1 className="body-title">
						No results found for {_.startCase(search)}
					</h1>
				) : (
					//Title for some results
					<h1 className="body-title">
						{totalResults} results for {_.startCase(search)}
					</h1>
				)
			) : (
				//If there hasn't been a search, render title for all restaurants
				<h1 className="body-title">{totalResults} restaurants</h1>
			)}
		</div>
	);
}

export default ListTitle;