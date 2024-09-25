const port = 4000;
const express = require("express");
const app= express();
const mongoose = require("mongoose");
const jwt= require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//database connection with mongodb

mongoose.connect("mongodb+srv://foyastephanie:63so8kVAtC1u4sCn@cluster0.dofrh7k.mongodb.net/ecommerce")

// API connection

app.get("/", (req,res)=>{
res.send("Express App is running")
})

// image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
      console.log(file);
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

//creating upload endpoint for images

const upload = multer({storage: storage})
app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:4000/images/${req.file.filename}`
    })
})
app.use('/images', express.static('upload/images'));

// schema for creating products
const Product = mongoose.model("Product", {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    new_price: {
      type: Number
    },
    old_price: {
      type: Number
    },
    date: {
      type: Date,
      default: Date.now,
    },
    available: {
      type: Boolean,
      default: true,
    },
  });

  //creating endpoint for products

  app.post('/addproduct', async (req, res) => {
    let products= await Product.find({});
    let id;
    if (products.length>0) {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id+1;
    }
    else
    { id = 1; }
    const product = new Product({
        id:id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
      });
      console.log(product);
  await product.save();
  console.log("Saved");
  res.json({success:true,name:req.body.name})
});

//creating Api for deleting products 
app.post("/removeproduct", async (req, res) => {
  const product = await Product.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({success:true,name:req.body.name})
});

//creating api for getting all products
app.get('/allproducts', async (req, res)=>{
    let products = await Product.find({});
    console.log("all products fetched");
    res.send(products);
});
// creating api for getting new collection 
app.get("/newcollections", async (req, res) => {
	let products = await Product.find({});
  let newcollection = products.slice(1).slice(-4);
  console.log("New Collections fetched");
  res.send(newcollection);
});
// creating endpoint for getting popular in women
app.get("/popularinwomen", async (req, res) => {
	let products = await Product.find({category:"femme"});
  let popular_in_women = products.splice(0,  4);
  console.log("Popular In Women fetched");
  res.send(popular_in_women);
});

// creatin middleware to fetch user
const fetchUser= async(req, res, next)=>{
  const token= req.header('auth-token');
  if(!token){
    res.status(401).send({errors:"please authenticate using valid token"})
  }else{
    try{
      const data = jwt.verify(token, 'secret_ecom');
      req.user = data.user;
      next();
    }catch (errors){
      res.status(401).send({errors: 'please authenticate using valid token'})

    }
  }

}

// creating endpoint for addtocart
app.post('/addtocart', fetchUser,async(req, res)=>{
  console.log("added", req.body.itemId);
  let userData = await Users.findOne({_id:req.user.id});
  userData.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
  res.send("added")
})

//creating endpoint to remove cartdata
app.post('/removefromcart', fetchUser,async(req, res)=>{
  console.log("remove", req.body.itemId);
  let userData = await Users.findOne({_id:req.user.id});
  if(userData.cartData[req.body.itemId] >0)
  userData.cartData[req.body.itemId] -= 1;
  await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
  res.send("removed")
})
// creating endpoitn to get cartdata
app.post('/getcart', fetchUser,async(req, res)=>{
  console.log("getcart");
  let userData = await Users.findOne({_id:req.user.id});
  res.json(userData.cartData);
})

// shema for creation user modele
const Users = mongoose.model('Users',{
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
//Create an endpoint at ip/auth for regestring the user in data base & sending token
app.post('/signup', async (req, res) => {
  console.log("Sign Up");
        let success = false;
        let check = await Users.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({ success: success, errors: "existing user found with this email" });
        }
        let cart = {};
          for (let i = 0; i < 300; i++) {
          cart[i] = 0;
        }
        const user = new Users({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
            cartData: cart,
        });
        await user.save();
        const data = {
            user: {
                id: user.id
            }
        }
        
        const token = jwt.sign(data, 'secret_ecom');
        success = true; 
        res.json({ success, token })
    })
// endpoint for creating user login 
app.post('/login', async (req, res) => {
  console.log("Login");
    let success = false;
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }
			success = true;
      console.log(user.id);
			const token = jwt.sign(data, 'secret_ecom');
			res.json({ success, token });
        }
        else {
            return res.status(400).json({success: success, errors: "please try with correct email/password"})
        }
    }
    else {
        return res.status(400).json({success: success, errors: "please try with correct email/password"})
    }
})
    app.listen(port,(error)=>{
    if(!error)
        console.log("server running on port", +port);
        else console.log("Error : ", error);
    });

