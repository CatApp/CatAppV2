// VIEW CONTROLLER
//@ts-check

var ObjectId = require("mongodb").ObjectId;
var db = require("mongodb").ObjectID;



module.exports = {
  index: function(app, req, res) {
    console.info("Index Controller");
    app
      .set("myDb")
      .collection("Students")
      .find({})
      .toArray(function (err, docs) {
        console.dir(docs)
        if (err) {
          console.error(err);
        }
        return res.render("index", {
          title: "Students Table",
          Students: docs
        });
      });
  },

  login: function (app, req, res) {
    app
      .set("myDb")
      .collection("Students")
      .find({})
      .toArray(function (err, docs) {
        console.dir(docs)
        if (err) {
          console.error(err);
        }
        return res.render("login", {
          title: "Login",
          Students: docs
        });
      });
  },

  viewAll: function (app, req, res) {
    console.info("View All controller");
    app
      .set("myDb")
      .collection("Students")
      .find({})
      .toArray(function (err, docs) {
        console.dir(docs)
        if (err) {
          console.error(err);
        }
        return res.render("viewAll", {
          title: "All Students",
          Students: docs
        });
      });
  },

  viewAllJSON: function (app, req, res) {
    console.info("View All JSON controller");
    app
      .set("myDb")
      .collection("filmsCollection")
      .find({})
      .toArray(function (err, docs) {
        if (err) {
          console.error(err);
        }
        res.json(docs);
      });
  },

  studentinfo: function (app, req, res) {
    console.info("Student info controller");
    let SID = req.params.SID;
    var o_id = new ObjectId(SID);
    let TID = req.params.TID;
    

    app
      .set("myDb")
      .collection("Students")
      .find({_id: o_id})

      .toArray(function (err, docs) {
        if (err) {
          console.error(err);
        }
        console.dir(docs);
        return res.render("studentinfo", {
          title: `${docs[0].Lname}`,
          Student: docs[0],
          TID: `${docs[0].TID}`
          //login: req.session.login,
          });
      });


    
    app
      .set("myDb")
      .collection("Therapists")
      .find({})
      .toArray(function (err, docs) {
        if (err) {
          console.error(err + "Error");
        }
        console.dir(docs);

        return res.render("studentinfo", {
          //title: `${docs[0].Lname}`,
          
          
          Therapists: docs
          //login: req.session.login,
          });
      });
	},



	Recognition: function (app, req, res) {
    console.info("Insert Form Post controller");
    console.info(req.body)
    var newEntry=req.body;
    app
      .get("myDb")
      .collection("TherapistRecognition")
	  .insertOne(newEntry,function(err,dbRes){
      
	  
     // .insertOne(clientFormID,targetProblem1,inputChoice1,targetProblem1Pattern,targetProblem2,inputChoice2,targetProblem2Pattern,targetProblem3,inputChoice3,targetProblem3Pattern,targetProblem4,inputChoice4,targetProblem4Pattern, function (err, dbResp) {
        if (err) {
          console.error(err);
        }
		else
		console.log(res[0].body)
		//res.redirect("/studentinfo/:SID")

      });
  },
  InsertChangeWork: function (app, req, res){
    var newchange=req.body;
    console.log(req.body)

    app
    .get("myDb")
    .collection("Change-works")
    .insertOne(newchange,function(err,dbRes){
      if (err) {
        console.error(err);
      }
      else

      console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      res.redirect("/studentHome")

    });
  },
  studentHome: function (app, req, res) {
    console.info("View All controller");
    /*let TP1 = req.params.SID;
    let TP2 = req.params.SID;
    let TP3 = req.params.SID;*/
    app
      .set("myDb")
      .collection("TherapistRecognition")
      .find({})
      .toArray(function (err, docs) {
        console.dir(docs[0])//or `$docs[0].targetproblem1pattern`
        if (err) {
          console.error(err);
        }
        return res.render("studentHome", {
          title:"studentHome",
          TherapistRecognition: docs
    });
  }
  //Recognition: function (app,req,res){
	//console.info("hello");
    //console.info(req.body.client);
 // }
 
      )}



}
