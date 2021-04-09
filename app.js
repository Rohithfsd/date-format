const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let presentDate = date.getDate();
  if (presentDate < 10) {
    presentDate = "0" + presentDate;
  }
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let year = date.getFullYear();
  response.send(`${presentDate}-${month}-${year}`);
});

module.exports = app;
