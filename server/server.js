//run it with npm run dev, this way it updates with browser refresh
//servername: jimrecipe
//password: JimYao123

// require('dotenv').config();

const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
app.use(cors())
const { MongoClient } = require("mongodb");
// const uri=process.env.URI;
const databaseName = "recipe";

//Middleware: to-do fix CORS error


//this part connects to mongodb
MongoClient.connect("mongodb+srv://yaobojing:JimYao123@cluster0.fzznrzn.mongodb.net/?retryWrites=true&w=majority", 
  { useNewUrlParser: true }, 
  function(err, db) {
  if (err) {
    return console.log(err);
  }
  console.log("Connection established - All Well");
  //databasename is the name of the database, note name is recipe, collection is recipes
  var dbo = db.db(databaseName)
  //this part gets $project attributes in recipes table
  dbo.collection("recipes").aggregate([{ $project : {_id : 1, name: 1, difficulty: 1, path: 1, page: 1, steps: 1, ingredients: 1}}]).toArray(function(err, result) {
    if (err) throw err;
    app.get("/api", (req, res) => {
      //this part sends result to front end, making it into a hash {"recipes":others}
      res.json({"recipe": result});
    })
    app.get('/api/:_id', (req, res) => {
      const _id = req.params._id;
      for (let each of result) {
        if (each._id === parseInt(_id)) {
          console.log(_id);
          res.json(each);
          return;
        }
      }
    }
    );

    db.close()
  })
})

// //makes sure server is listening on port 5000
// app.listen(process.env.PORT || 5000, () => { console.log("Server started on port 5000")})
app.listen(process.env.PORT || 5000, () => { console.log("Server started")})
