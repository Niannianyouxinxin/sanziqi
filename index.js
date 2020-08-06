const express = require("express");
const app = express();
const path = require("path");
const staticRoot = path.resolve(__dirname,"./public/");


app.use("/",express.static(staticRoot));

const port = 80;
app.listen(port,() => {
    console.log("server");
})