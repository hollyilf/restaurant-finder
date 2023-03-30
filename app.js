//Configure dotenv in main entry module: 
require("dotenv").config();

const cors = require("cors");

const path = require("path");

//Require express and set up new instance of express app: 
const express = require("express");
const app = express(); 

//Require router: 
const restaurants = require("./routes/api/restaurants.js");

//Import DB connection: 
const connectDB = require("./db.js");
//Call function to connect to DB
connectDB();

//------Configure app: 

//Configure CORS middleware - this allows us to call the backend from the frontend 
//Options specify that CORS can accept requests from any origin and allows credentials such as cookies
app.use(cors({ origin: true, credentials: true }));

//Configure express middleware for reading incoming JSON data sent using a POST or PUT request
app.use(express.json({ extended: false }));

//Set the app to use the api route (where we query the DB)
app.use("/api/restaurants", restaurants);


//Serve up react frontend: 
app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 3003; 

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})