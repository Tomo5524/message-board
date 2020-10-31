const moment = require("moment"); // require

const members = [
  {
    id: 1,
    name: "Luke Skywalker",
    message: "Strike Me Down In Anger And I'll Always Be With You",
    status: "active",
    added: moment().format("MMMM Do YYYY, h:mm:ss a"),
  },
  {
    id: 2,
    name: "Anakin skywalker",
    message: "I HATE YOU",
    status: "active",
    added: moment().format("MMMM Do YYYY, h:mm:ss a"),
  },
  {
    id: 3,
    name: "Yoda",
    message:
      "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering",
    status: "active",
    added: moment().format("MMMM Do YYYY, h:mm:ss a"),
  },
];

module.exports = members;
