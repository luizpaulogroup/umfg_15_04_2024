const express = require("express");
const routes = express.Router();

const UserController = require("../controller/UserController");

routes.get("/users", UserController.all);
routes.post("/user", UserController.create);
routes.put("/user", UserController.update);
routes.delete("/user", UserController.delete);

module.exports = routes;