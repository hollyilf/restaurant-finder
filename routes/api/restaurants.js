const express = require("express");

//Create express router instance 
const router = express.Router();

//Import DB model to be able to write queries 
const Restaurant = require("../../models/Restaurant.js");

//i) Show all restaurants 
//Route for localhost:3003/api/restaurants: 
router.get("/", async (req, res) => {
	try {
	  const restaurants = await Restaurant.find()
	  res.json({ restaurants });
	} catch (err) {
		console.error(err);
	  res.sendStatus(500);
	}
  });

//ii) Show a single restaurant 
//Route for localhost:3003/api/restaurants/id : 
router.get("/:id", async (req, res) => {
	try {
		const restaurants = await Restaurant.findOne({
			restaurant_id: req.params.id,
		});
		res.json(restaurants);
	} catch (err) {
		console.error(err);
		res.sendStatus(500);
	}
});

//iii) Show a filtered list of all restaurants 
//Route for localhost:3003/api/restaurants/search/:searchTerm : 
router.get("/search/:searchTerm", async (req, res) => {
	const searchString = req.params.searchTerm;
	try {
	  const restaurants = await Restaurant.find({
		//Search multiple fields using regex 	
		//i option to make search not case-sensititve 
		$or: [
		  { name: { $regex: searchString, $options: "i" } },
		  { address: { $regex: searchString, $options: "i" } },
		  { cuisine: { $regex: searchString, $options: "i" } },
		  { borough: { $regex: searchString, $options: "i" } }
		]
	  });
	  res.json({ restaurants });
	} catch (err) {
		console.error(err);
	  res.sendStatus(500);
	}
  });

//iv) Add a new rating to a reataurant
router.put("/:id", async (req, res) => {
	try {
	  const restaurant = await Restaurant.findOne({ restaurant_id: req.params.id });
	  const rating = {
		date: req.body.date,
		score: req.body.score,
	  };
	  restaurant.grades.push(rating);
	  await restaurant.save();
	  res.sendStatus(200);
	} catch (err) {
	  console.log(err);
	  res.statusStatus(500);
	}
  });
  
//Export router to be picked up in app.js
module.exports = router;

