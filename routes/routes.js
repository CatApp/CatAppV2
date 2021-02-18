const express = require("express");

const router = express.Router();

// add myControllers
const myControllers = require("../controllers/controllers.js");

console.dir(myControllers);

module.exports = (app) => {
  router.get("/", (req, res) => {
    myControllers.index(app, req, res);
  });

  router.get("/login", (req, res) => {
    myControllers.login(app, req, res);
  });

  router.get("/viewAll", (req, res) => {
    myControllers.viewAll(app, req, res);
  });

  router.get("/api/viewAll", (req, res) => {
    myControllers.viewAllJSON(app, req, res);
  });

  router.get("/studentinfo/:SID", (req, res) => {
    myControllers.studentinfo(app, req, res);
  });

  return router;
};