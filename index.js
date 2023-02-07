const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const index = express();
dotenv.config({path:"./config.env"});

const PORT = process.env.PORT;

const DB = process.env.DATABASE;
//JSON reading
index.use(express.json())
index.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// link to router file
index.use(require("./routes/auth"))

mongoose.set('strictQuery', false);
mongoose.connect( DB, { useNewUrlParser: true, })
    .then(() => {
        console.log("Connection Sucessfully Established");
    }).catch((e) => {
        console.log(`Error no connection : ${e}`);
    })

index.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`)
})