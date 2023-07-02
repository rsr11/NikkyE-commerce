const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
const SendingProucts = require("./ProductsDb");
// const Products = require("./models/Products");
const products = require("./routes/products");


connectToMongo();  
SendingProucts();

const app = express();

app.use(cors());


app.use(express.json());


// routes available


// creating route for products api
app.use("/api/products",products);

// creating route for usersAuthentication
app.use('/api/users', require("./routes/auth"));




app.get('/',(req,res)=>{
    res.send("hello world");
})




app.listen(5000,()=>{
    console.log("connect to port 5000");
})
