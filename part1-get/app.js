const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// ********* TO USE PARTIALS, WE HAVE TO REGISTER THEM FIRST: *********
hbs.registerPartials(path.join(__dirname, "views/partials"));

// ********* STATIC FILES ARE SERVED AUTOMATICALLY FROM THE 'public/' FOLDER:" *********
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.render("homepage");
});

// showing what we get in the request object.W
app.get("/users", (req, res, next) => {
  res.send("this is the users route");
});
// app.get("/users/:username", (req, res) => {
//   res.send(req.params);
// });

// can we add multiple params???
app.get("/books/:booktitle/:pagenumber", (req, res) => {
  res.send(req.params);
});

app.get("/users/:username/favbooks/:bookId", (req, res, next) => {
  res.send(req.params);
});
// query parameter
app.get("/search", (req, res, next) => {
  res.send(req.query);
});

//
// slash as default after other routes tried?

// Server Started
app.listen(3000, () => console.log("My first app listening on port 3000!"));
