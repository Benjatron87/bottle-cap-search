const express = require('express');
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Img";

app.use(express.static("public"));

mongoose.connect(MONGODB_URI, {useNewUrlParser: true}, () => {
    console.log('connected to mongodb')
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiRoutes")(app);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

const PORT = process.env.PORT ||  3002;

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})
