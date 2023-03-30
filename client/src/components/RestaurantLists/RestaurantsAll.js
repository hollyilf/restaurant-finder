import React, {useState, useEffect} from "react"; 
import axios from "axios";
import sortList from "./sortList";
import RestaurantsLists from "./RestaurantsLists";
import ListTitle from "./ListTitle";

const RestaurantsAll = () => {

  const [list, setList] = useState([]);
  //totalResults and cardsRendered state to conditionally render option to load more results 
  const [totalResults, setTotalResults] = useState(0);
  //isLoading state to conditionally render elements only once results have been received from the DB
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      //Get all of the restuaurant documents from the DB: 
      .get("/api/restaurants")
      .then((res) => {
        const sortedList = sortList({ list: res.data.restaurants });
        setList(sortedList);
        setTotalResults(sortedList.length)
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error from RestaurantsAll list");
      });
  }, []);

  return (
		<div>
      <ListTitle isLoading={isLoading} totalResults={totalResults} />
			<RestaurantsLists list={list} totalResults={totalResults} />
		</div>
	);
}

export default RestaurantsAll;