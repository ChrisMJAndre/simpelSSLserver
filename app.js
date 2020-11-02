const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use("/", (req, res) => {
  console.log("it works");
});

const sslServer = https.createServer({ key, cert }, app);

app.listen(3443);
