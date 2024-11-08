const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./Models/User");
const Cart = require("./Models/Cart");

require("dotenv").config();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({ 
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose.connect(process.env.MONGO_URL);

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "eyJhbGci";

app.get("/test", (req, res) => {
  res.send("sfdfdfd");
});

app.post("/register", async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const userDoc = await User.create({
      userName,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.send(userDoc);
  } catch (err) {
    res.status(422).json(err);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userDoc);
        }
      );
    } else {
      res.status(422).json("Password not valide");
    }
  } else {
    res.json("User not found");
  }
});

app.get("/profile", (req, res) => { 
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { userName, email, _id } = await User.findById(userData.id);
      res.json({ userName, email, _id });
    });
  } else {
    res.json(null);
  } 
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

app.post("/addToCart", (req, res) => {
  const {token} = req.cookies
  const{ product } = req.body
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err
    try{
      const existingItem = await Cart.findOne({productId: product.id});
      if (existingItem) {
        existingItem.quantity += 1; 
        existingItem.save();
        res.status(200).json('updated')
      }else{
        const cartDoc = await Cart.create({
          owner: userData.id,
          productId: product.id,
          name: product.name,
          price: product.price,
          imgURL: product.imgURL,
          quantity: 1,
        })
        res.json(cartDoc)
      }
    }catch(err){
      if (err) throw err
    }

  })
});

app.delete('/deleteItem', (req, res) => {
  const { token } = req.cookies;
  const { id } = req.body;
  if (token){
    jwt.verify(token, jwtSecret, {}, async (err) => {
      if (err) throw err;
      const deleteItem = await Cart.findByIdAndDelete(id);
      res.send(deleteItem)
    });
  }
});

app.get("/user-cart", async(req, res) => { 
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err
    const { id } = userData;
    res.json(await Cart.find({ owner: id }));
  });
});



app.listen(4001);  
