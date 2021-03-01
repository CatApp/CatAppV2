// VIEW CONTROLLER

var ObjectId = require("mongodb").ObjectId;


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

    return res.render("login", {
      title: "Welcome",
      message: "Demo Node Site."
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
          Student: docs[0]
          //login: req.session.login,
          });
      });
	},
	Recognition: function (app, req, res) {
    console.info("Insert Form Post controller");
    var clientFormID = req.body.client;
	var targetProblem1 =req.body.targetproblem1;
	var inputChoice1 = req.body.choice1;
	var targetProblem1Pattern=req.body.targetproblem1pattern;
	var targetProblem2= req.body.targetproblem2;
	var inputChoice2= req.body.choice2;
	var targetProblem2Pattern= req.body.targetproblem2pattern;
	var targetProblem3 = req.body.targetproblem3;
	var inputChoice3 = req.body.choice3;
	var targetProblem3Pattern = req.body.targetproblem3pattern;
	var targetProblem4 = req.body.targetproblem4;
	var inputChoice4 = req.body.choice4;
	var targetProblem4Pattern= req.body.targetproblem4pattern;
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
		//console.log(result[0].body)
		res.redirect("/")

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
        console.dir(docs[4])//or `$docs[0].targetproblem1pattern`
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
