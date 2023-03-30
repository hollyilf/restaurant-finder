//Require mongoose to use mongoose code:
const mongoose = require("mongoose");

const uri = process.env.ATLAS_URI;

const options = {
	useNewUrlParser: true,
};

//async/await needed to handle error as mongoose.connect no longer supports a callback 
const connectDB = async () => {
	try {
		await mongoose.connect(uri, options);
    //This will only be triggered if the above statement doesn't throw any exceptions 
		console.log("Connected to DB");
		//Handle initial connection error
	} catch (err) {
		handleError(err);
	}
};

//Export the connection function 
module.exports = connectDB;


 



