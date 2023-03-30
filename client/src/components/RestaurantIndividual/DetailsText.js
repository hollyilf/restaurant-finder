import React from "react"

const DetailsText = (props) => {

  const restaurant = props.restaurant;

  return <div>	<h2 className="body-title">{restaurant.name}</h2>
  <h2 className="body-title">
    {restaurant.address.building} {restaurant.address.street},{" "}
    {restaurant.borough}, {restaurant.address.zipcode}
  </h2>
  <h2 className="body-title">Cuisine: {restaurant.cuisine}</h2></div>
}

export default DetailsText;