const express = require("express");
const bodyParser = require("body-parser");
// const mongoDBClient = require("mongodb").MongoClient;

const mongoose = require("mongoose");
const app = express();
let port = 3030;
const product = require("./routes/product.routes");
const { collection } = require("./models/product.model");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json());
// /// Set up mongoose connection
// let dev_db_url = 'mongodb+srv://sharad1:12345sharad@cluster0.fz4nt.mongodb.net/users';
// let mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// mongoDBClient.connect('mongodb+srv://sharad1:12345sharad@cluster0.fz4nt.mongodb.net/users',(err,client)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log("Dabase connected sucessfully");
//     const db= client.db('users');
//     const collection= db.collection('someusers');
//     app.use('/products',product);
// });

// app.use('/products', product);
// app.use(bodyParser.json());
// var db;
mongoose
  .connect(
    "mongodb+srv://sharad1:12345sharad@cluster0.fz4nt.mongodb.net/users",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
    }
  )
  .then((client) => {
    console.log("Database connected sucessfully!");
    const db = mongoose.connection;
    // db = client.db("users");
    // const collection = db.Collection("FamousQuotes");

    app.use("/products", product);
  })
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log("server is running on port " + port);
});
