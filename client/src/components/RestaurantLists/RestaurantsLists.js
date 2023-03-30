import React, {useState} from "react";
import InfoCard from "./InfoCard";

const RestaurantsLists = (props) => {
  const [cardsRendered, setCardsRendered] = useState(24);

    //Slice the list to limit the amount of cards rendered 
    const slicedCards = props.list.slice(0, cardsRendered);
    const renderList = slicedCards.map((item, k) => <InfoCard item={item} key={k} userQuery={props.userQuery} />);
  
    //Increase the number of cards to be rendered 
    const handleMoreResults = () => {
      setCardsRendered(cardsRendered + 24);
    }

  return (
		<div>
			{renderList}
			{cardsRendered < props.totalResults && (
				<div className="load-results-div">
					<button
						className="btn btn-outline-primary btn-load-results"
						onClick={handleMoreResults}
					>
						Load more results
					</button>
				</div>
			)}
		</div>
	);
}

export default RestaurantsLists;