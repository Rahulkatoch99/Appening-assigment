require("./MongoDb/db");
require("./MongoDb/models/Register");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { json } = require("express");
const app = express();

const Router = require("./routes/route.js");

// // app.use((req, res, next) => {
// //   console.log(req.path);

// //   next();
// // });

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(Router);

app.listen(PORT, (req, res) => {
  console.log(`server is runnning on the ${PORT}`);
});
