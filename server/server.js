var myPassword = require('./password');
//run it with npm run dev, this way it updates with browser refresh
//servername: jimrecipe

// require('dotenv').config();

var password = myPassword.password;

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
MongoClient.connect(password, 
  { useNewUrlParser: true }, 
  function(err, db) {
  if (err) {
    return console.log(err);
  }
  console.log("Connection established - All Well");
  //databasename is the name of the database, note name is recipe, collection is recipes
  var dbo = db.db(databaseName)
  //this part gets $project attributes in recipes table
  // dbo.collection("recipes").aggregate([{ $project : {_id : 1, name: 1, difficulty: 1, path: 1, page: 1, steps: 1, ingredients: 1}}]).toArray(function(err, result) {
  //   if (err) throw err;
  //   app.get("/api", (req, res) => {
  //     //this part sends result to front end, making it into a hash {"recipes":others}
  //     res.json({"recipe": result});
  //   })
  //   app.get('/api/:_id', (req, res) => {
  //     const _id = req.params._id;
  //     for (let each of result) {
  //       if (each._id === parseInt(_id)) {
  //         console.log(_id);
  //         res.json(each);
  //         return;
  //       }
  //     }
  //   }
  //   );

  //   db.close()
  // })

  app.get("/api", (req, res) => {
    dbo.collection("recipes").aggregate([{ $project : {_id : 1, name: 1, difficulty: 1, path: 1, page: 1, steps: 1, ingredients: 1} }]).toArray(function(err, result){
      if (err) throw err;
      res.json({"recipe": result});
    })
  })

  app.get('/api/:_id', (req, res) => {
    dbo.collection("recipes").aggregate([{ $project : {_id : 1, name: 1, difficulty: 1, path: 1, page: 1, steps: 1, ingredients: 1}}]).toArray(function(err, result) {
      const _id = req.params._id;
      for (let each of result) {
        if (each._id === parseInt(_id)) {
          console.log(_id);
          res.json(each);
          return;
        }
      }
    })
  })

})


// MongoClient.connect(password, 
//   { useNewUrlParser: true }, 
//   function(err, db) {
//   if (err) {
//     return console.log(err);
//   }
//   var dbo = db.db(databaseName)
//   console.log("Connection established - All Well");
//   app.get('/del/:detailHere', (req,res) => {
//     var myquery = { detail: req.params.detailHere };
//     dbo.collection("task").deleteOne(myquery, function(err, obj) {
//       if (err) throw err;
//       console.log("1 document deleted");
//     });
//     res.redirect('/api');
//   })
//   })

// MongoClient.connect(password, 
//   { useNewUrlParser: true }, 
//   function(err, db) {
//   if (err) {
//     return console.log(err);
//   }
//   var dbo = db.db(databaseName)
//   console.log("Connection established - All Well");
//   app.get('/ins/:detailHere', (req,res) => {
//     var myobj = { detail: req.params.detailHere, priority: '0'};
//     dbo.collection("task").insertOne(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//     })
//     res.redirect('/api');
//   })
//   })

// //makes sure server is listening on port 5000
// app.listen(process.env.PORT || 5000, () => { console.log("Server started on port 5000")})
app.listen(process.env.PORT || 5000, () => { console.log("Server started")})
