const { collection } = require("../models/product.model");
const Product = require("../models/product.model");

exports.home = function (req, res) {
  // res.sendFile("/home/ongraph/Desktop/practice/CRUD" + "/index.html");
  const cursor = collection
    .find()
    .toArray()
    .then((docs) => {
      console.log("data", docs);
      res.render("index.ejs", { quotes: docs });
    })
    .catch((err) => {
      console.log("errorMessage", err);
    });

  console.log("Home", cursor);
};

exports.create = function (req, res) {
  console.log("HIIIIIIIIIIIIIIIIIIIIII", req.body);
  collection
    .insertOne(req.body)
    .then((result) => {
      console.log("Inserted sucessfully", result);
      //   res.send(result);
      res.redirect("/products");
    })
    .catch((err) => {
      console.log("Error in inserting", err);
      res.send(err);
    });
};

exports.update = function (req, res) {
  console.log("Update", req.body);
  collection
    .findOneAndUpdate(
      { name: req.body.name },
      { $set: { name: req.body.name, quote: req.body.quote } },
      { upsert: true }
    )
    .then((result) => res.json("Success"))
    .catch((error) => console.error(error));
  res.sendStatus(200);
};

exports.delete = function (req, res) {
  collection
    .findOneAndDelete({ name: req.body.name })
    .then((result) => {
      console.log("result of delete request", result);
      res.json(`Deleted Darth Vadar's quote`);
    })
    .catch((err) => {
      console.log("error in delete request", err);
    });
};
