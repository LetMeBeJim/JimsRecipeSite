//run it with npm run dev, this way it updates with browser refresh
//servername: jimrecipe
require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { MongoClient } = require("mongodb");
const uri=process.env.URI;
const databaseName = "recipe";

//this part connects to mongodb
MongoClient.connect(uri, { useNewUrlParser: true }, function(err, db) {
  if (err) {
    return console.log("Connection failed");
  }
  console.log("Connection established - All Well");
  //databasename is the name of the database, note name is recipe, collection is recipes
  var dbo = db.db(databaseName)
  //this part gets $project attributes in recipes table
  dbo.collection("recipes").aggregate([{ $project : {_id : 1, name: 1}}]).toArray(function(err, result) {
    if (err) throw err;
    app.get("/api", (req, res) => {
      //this part sends result to front end, making it into a hash {"recipes":others}
      res.json({"recipe": result});
      //res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]});
    });

    db.close()
  })
})

//makes sure server is listening on port 5000
app.listen(process.env.PORT || 5000, () => { console.log("Server started on port 5000")})

//app.get("/api", (req, res) => {
//  res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]});
//});

