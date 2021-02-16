// VIEW CONTROLLER

var ObjectId = require("mongodb").ObjectId;


module.exports = {
  index: function (app, req, res) {
    return res.render("index", {
      title: "Welcome",
      message: "Demo Node Site."
    });
  },

  /*main: function (app, req, res) {

    return res.render("studentinfo", {
      title: "Welcome",
      message: "Demo Node Site."
    });
  },*/

  studentinfo: function (app, req, res) {
    console.info("Student Info");
    return res.render("studentinfo", {
      title: "Student Info",
      message: "Student Info Page",
    });
  },

  viewAll: function (app, req, res) {
    console.info("View All controller");
    app
      .set("myDb")
      .collection("filmsCollection")
      .find({})
      .toArray(function (err, docs) {
        console.dir(docs)
        if (err) {
          console.error(err);
        }
        return res.render("viewAll", {
          title: "All Films",
          films: docs
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
  }

  
};
