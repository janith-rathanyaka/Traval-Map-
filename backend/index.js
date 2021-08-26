const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const pinRoute = require("./routes/pins")
const userRoute = require('./routes/users');
const morgan = require("morgan");

dotenv.config();
app.use(express.json())
app.use(morgan("tiny"))



mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('MongoDB Connected!');
})
.catch((err)=>console.log(err))

app.use("/api/pins",pinRoute);
app.use("/api/user",userRoute);


app.listen(8800,()=>{
    console.log('Backend server is running');
})