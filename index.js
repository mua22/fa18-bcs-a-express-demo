const express = require("express");
const app = express();
app.use(express.json()); //middleware
app.set("view engine", "pug");
app.get("/api/customers", function (req, res) {
  res.send(["Usman", "Noman", "Ali"]);
});
app.get("/", function (req, res) {
  res.render("homepage");
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listening on port " + port);
});
