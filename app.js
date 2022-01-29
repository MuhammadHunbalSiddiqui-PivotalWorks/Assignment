const express = require("express");
const app = express();
const userVisitRouter = require("./api/uservisit")

app.use("/api/v1/uservisits", userVisitRouter);


module.exports = app;