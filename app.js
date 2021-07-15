const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const path = require("path")
const linkRoute = require("./routes/linkRoute");

mongoose.connect("mongodb://localhost/newlinks", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let db = mongoose.connection;

db.on("error", () => { console.log("houve um erro") })
db.once("open", () => {console.log("banco carregado")})

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "templates"))

app.use("/", linkRoute);

app.listen(port, () => console.log(`example app listening on port ${port}!`))
