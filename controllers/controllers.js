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

    // const username = req.body.username;
    //   let loginResult = login(username, req.body.password)
    // app
    //   .post("login", passport.authenticate("local",{
    //     successRedirect:"/index",
    //     failureRedirect:"/login"
    //   }),function(req,res){

    //   });

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

  studentHome: function (app, req, res) {
    console.info("Student Home");
    return res.render("studentHome", {
      title: "Welcome",
      message: "Demo Node Site."
    });
  },
  insert: function(app,req,res){
	return res.render("studentInfo", {
		title: "Add client form",
		//login: req.session.login,
	  });  
  },
  insert: function (app, req, res) {
    console.info("Insert Form Post controller");
    var newClientForm = req.body;
    app
      .get("myDb")
      .collection("TherapistRecognition")
      .insertOne(newClientForm, function (err, dbResp) {
        if (err) {
          console.error(err);
        }
      });
  },
}



