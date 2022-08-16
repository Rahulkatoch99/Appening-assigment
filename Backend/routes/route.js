const express = require("express");

const routes = express.Router();

const AuthController = require("../Controller/AuthRegistration");

///-----------------------------Post Routes start here---------------------------/////

routes.post("/Registration", AuthController.AuthRegistration);
routes.post("/Login", AuthController.AuthLogin);
