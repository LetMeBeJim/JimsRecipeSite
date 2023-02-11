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
const jwt = require('jsonwebtoken');

app.post("/login", (req, res) => {
  const user = {
    id: 1,
    username: 'jim',
  }
  jwt.sign({user: user}, 'secretkey', (err, token) => {
    res.json({
      token: token
    });
  });
})

app.post("/secret", verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'secret entered',
        authData: authData
      });
    }
  });
})




MongoClient.connect(password,
  { useNewUrlParser: true },
  function(err, db) {
    if (err) {
      return console.log(err);
    }
    const jwt = require('jsonwebtoken');
    const dotenv = require('dotenv');
    dotenv.config();
    process.env.TOKEN_SECRET;

    console.log("Connection secured - now in db modification mode");
    var dbo = db.db(databaseName)

    app.get("/ins", (req, res) => {

    })

    app.get("/del", (req, res) => {

    })
  })

//Format
//authorization: bearer <access_token>
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  //check if undefined
  if(typeof bearerHeader != 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    req.token = bearerToken;

    next();
  } else {
    res.sendStatus(403);
  }


}

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
