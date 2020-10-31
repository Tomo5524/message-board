var express = require("express");
var router = express.Router();
const members = require("../Members");
const moment = require("moment"); // require

router.get("/", function (req, res, next) {
  res.render("new", { title: "Submit new message" });
});

// get user's input
router.post("/", function (req, res, next) {
  //   res.send("respond with a resource");
  // add new member
  const newMember = {
    id: members.length + 1,
    name: req.body.name,
    message: req.body.message,
    status: "active",
    added: moment().format("MMMM Do YYYY, h:mm:ss a"),
  };

  members.push(newMember);
  res.redirect("/"); // pages refreshes and redirect to /new
});

module.exports = router;
