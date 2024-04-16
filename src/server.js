const express = require("express");
const app = express();
const port = 3000;

app.use(require("./routes/User"));

app.listen(port);