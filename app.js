const https = require("http");
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
  },
  app
);

app.use("/", (req, res) => {
  res.send("Connection to server");
});

sslServer.listen(3443, () => {
  console.log("server is listening on 3443");
});
