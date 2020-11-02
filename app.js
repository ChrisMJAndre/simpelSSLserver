const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const sslServer = https.createServer({ key, cert }, app);

app.use("/", (req, res) => {
  res.send("Connection to server");
});

sslServer.listen(3443);
