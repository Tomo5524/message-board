var express = require("express");
var router = express.Router();
const members = require("../Members");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json(members);
});

module.exports = router;
