const express = require("express");
const fetch = require("node-fetch");
const app = express();
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;
app.use(express.static("public"));

 const listener = app.listen(process.env.PORT, function() {
    console.log("Your app is listening on port " + listener.address().port);
  });

