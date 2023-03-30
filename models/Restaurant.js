const mongoose = require("mongoose");
//Mongoose plugin - casts to int using Math.round()
const Int32 = require("mongoose-int32").loadType(mongoose);

//Define Schema in line with the MongoDB sample database sample_restaurants
const restaurantSchema = new mongoose.Schema({
    name: {
		type: String,
		required: [true, "Name required"]
	  }, 
    borough: {
		type: String,
		required: [true, "Borough required"]
	  }, 
    restaurant_id: {
		type: String,
		required: [true, "ID required"],
		minLength: [8, "ID must be 8 characters"],
		maxLength: [8, "ID must be 8 characters"]
	  }, 
    cuisine: {
		type: String,
		required: [true, "Cuisine required"]
	  }, 
    address: {
        building: {
			type: String,
			required: [true, "Building number required"]
		  }, 
        street: {
			type: String,
			required: [true, "Street name required"]
		  }, 
        zipcode: {
			type: String,
			required: [true, "Zipcode required"]
		  }
    }, 
    grades: [{
        date: Date,
        score: {type: Number,
		        min: [1, "Rating must be between 1 and 10"], 
	            max: [10, "Rating must be between 1 and 10"]}
    }]

})

//Compile schema into Model 
const Restaurant = mongoose.model("Restaurant", restaurantSchema);

//Export the model: 
module.exports = Restaurant;

