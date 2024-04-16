const express=require("express");
const mongoose= require("mongoose");
const cors=require("cors");
const route = require("../src/Routes/routes")
const app=express();
const options = {
    origin: "*",
  };
  app.use(cors(options));
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  mongoose
  .connect(
    "mongodb+srv://biplavmandalmandal:xeR9kEa6aRdILcSm@cluster0.e7pktmf.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0",
    
    
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);




app.listen(process.env.PORT || 8080, function(){
    console.log("Express App Is Running",+(process.env.PORT || 8080));
})