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

  // studentinfo2: function (app, req, res) {
  //   console.info("Student info controller 2");
  //   app
  //     .set("myDb")
  //     .collection("Therapists")
  //     .find({})
  //     .toArray(function (err, docs) {
  //       console.dir(docs)
  //       if (err) {
  //         console.error(err);
  //       }
  //       return res.render("studentinfo", {
  //         Therapists: docs
  //       });
  //     });
    
  // },

	Recognition: function (app, req, res) {
    console.info("Insert Form Post controller");
    /*var clientFormID = req.body.client;
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
	var targetProblem4Pattern= req.body.targetproblem4pattern;*/
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

  studentHome: function (app, req, res) {
    console.info("Student home controller");
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
        return res.render("studentHome", {
          title: `${docs[0].Lname}`,
          Student: docs[0]
          //login: req.session.login,
          });
      });
	}

  /*studentHome: function (app, req, res) {
    console.info("Student Home");
    return res.render("studentHome", {
      title: "Welcome",
      message: "Demo Node Site."
    });
  },*/
}



