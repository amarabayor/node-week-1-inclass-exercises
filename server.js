const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Hello World!");
  });

  app.get("/chocolate", function (req, res) {
    res.send("Mm chocolate :o");
  });

  app.get("/query-endponit", function (req, res) {
    let n1 = parseInt(req.query.num1);
    let n2 = parseInt(req.query.num2);
    res.send("Hello : !! Your sum is:" + n1 + n2);
  });

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});