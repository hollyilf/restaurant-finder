import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import RestaurantsLists from "./RestaurantsLists";
import sortList from "./sortList";
import ListTitle from "./ListTitle";

const RestaurantsSearch = () => {

	//useParams hook to pick up restaurant_id from the route parameter 
	const { search } = useParams();

	const [list, setList] = useState([]);
	const [isLoading, setIsLoading] = useState(true)
	const [totalResults, setTotalResults] = useState(0);

	useEffect(() => {
		//Reset isLoading to true at the beginning of every search: 
		setIsLoading(true);
		axios
			.get(`/api/restaurants/search/${search}`)
			.then((res) => {
				const sortedList = sortList({ list: res.data.restaurants });
        setList(sortedList);
				setTotalResults(sortedList.length);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log("Error from RestaurantsSearch list");
			});
		//Add search(i.e. the parameter) as a dependency to the useEffect hook so that the hook re-runs everytime the parameter changes and the list is re-rendered
	}, [search]);

	return (
		<div>
			<ListTitle
				isLoading={isLoading}
				totalResults={totalResults}
				search={search}
			/>
			<RestaurantsLists list={list} totalResults={totalResults} userQuery={search} />
		</div>
	);
	}

export default RestaurantsSearch;