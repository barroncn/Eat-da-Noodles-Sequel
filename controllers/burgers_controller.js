//Routes Controller
//========================================================================================================================================

//require burger.js file and express
var db = require("../models"); // require the burger.js file
var express = require("express"); // require the express module

var router = express.Router();

router.get("/", function(req,res){
    //When a get request is sent to "/", Sequelize's findAll function is called to get all the entries in the pasta table
    db.pasta.findAll({}).then(function(data){
       var hbsObj = {pasta: data}; // data is our array of data objects for each pasta, put in an object so we can pass it to handlebars
       res.render("index", hbsObj); // We want to render the index page with the pasta objects in it
   }); 
});

router.post("/", function(req,res){
    if(req.body.newNoodle != ""){//as long as the user entered something into input
    //When a post request is sent to "/", Sequelize's create function is called to insert a new pasta row into the pasta table
        db.pasta.create({pasta_name: req.body.newNoodle}).then(function(data){//the new pasta name is gotten from the "name=newNoodle" in the POST form
            //if(err) {return res.status(500).end();}
            res.redirect("/"); //redirect to get "/" to reload page with new entry
       }); 
    }
});

router.put("/:id", function(req,res){
    //When a put request is sent to "/id", Sequelize's update function is called to update devoured to true in the row twith the given id
    db.pasta.update({devoured: true}, {where:{id:req.params.id}}).then(function(data){//the id is gotten from the parameters
        //if(err) {return res.status(500).end();}
        res.status(200).end();//status = good to go! (the page reload will take place in clientside js)
    });
});

module.exports = router; //Export router