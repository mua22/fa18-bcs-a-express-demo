const express = require("express");
const app = express();
app.use(express.json()); //middleware

app.get("/api/customers", function (req, res) {
  res.send(["Usman", "Noman", "Ali"]);
});
app.get("/", function (req, res) {
  res.send("Hello Class A Section");
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listening on port " + port);
});
