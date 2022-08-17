const express = require("express");

const routes = express.Router();

const AuthController = require("../Controller/AuthRegistration");
const verifyToken = require("../Midleware/AuthJWT");

///-----------------------------Post Routes start here---------------------------/////

routes.post("/Registration", AuthController.AuthRegistration);
routes.post("/Login", AuthController.AuthLogin);
routes.post("/Dashboard", verifyToken, AuthController.Dashboard);
routes.post("/Author", verifyToken, AuthController.Author);
routes.post("/Books", verifyToken, AuthController.Books);

/////////////////-----------------------------------------------------Delete Route-------------------------------------------------------------///

routes.delete("/Dashboard/:id", AuthController.Delete);

module.exports = routes;
