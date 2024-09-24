let express = require("express");
let app = express();
app.listen(3000);
let routerinternal = express.Router();
let routerexternal = require("./routes/api");

routerinternal.get("/html", function (req, res) {
  console.log("html");
  res.send({
    message: "html",
  });
});

app.use(routerinternal); //should be placed at end
app.use(routerexternal); //should be placed at end
