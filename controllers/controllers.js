// VIEW CONTROLLER

var ObjectId = require("mongodb").ObjectId;


module.exports = {
  index: function (app, req, res) {
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

  studentinfo: function (app, req, res) {
    console.info("Student Info");
    return res.render("studentinfo", {
      title: "Student Info",
      //message: "Student Info Page",
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

  oneStudent: function (app, req, res, view, viewTitle) {
    console.info("One student controller");
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
        console.dir(docs);//docs is empty here, leading to an error 2 lines down (89)
        return res.render(view, {
          //title: `${viewTitle} ${docs[0].SID}`,
          Students: docs[0],
          //login: req.session.login,
          });
      });
  },
}
  /*getItem: function (app, req, res, view, viewTitle) {
    console.info("Get Item controller");
    let filmID = req.params.filmID;
    var o_id = new ObjectId(filmID);

    app
      .set("myDb")
      .collection("filmsCollection")
      .find({ _id: o_id })
      .toArray(function (err, docs) {
        if (err) {
          console.error(err);
        }
        console.dir(docs);
        return res.render(view, {
          title: `${viewTitle} ${docs[0].filmName}`,
          film: docs[0],
          login: req.session.login,
        });
      });
  },*/
  
  /*searchResults: function (app, req, res) {
    console.info("View All controller");
    var searchVal = req.query.searchVal;
    console.info(searchVal);

    app
      .set("myDb")
      .collection("filmsCollection")
      .find({ filmName: { $regex: new RegExp(searchVal, "i") } })
      .toArray(function (err, docs) {
       // console.dir(docs);
        if (err) {
          console.error(err);
        }
        return res.render("films", {
          title: "Search Results for " + searchVal,
          searchMsg: `Your Search Found ${docs.length} films.`,
          films: docs,
          login: req.session.login,
        });
      });
  },*/