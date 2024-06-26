const express = require("express");

const app = express();

const port = 3000;

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(require("./routes/User"));

app.listen(port);