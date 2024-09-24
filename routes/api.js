let express = require("express");

let router = express.Router();

router.get("/json", function (req, res) {
  console.log("json");
  res.send({
    message: "json",
  });
});

module.exports = router;
