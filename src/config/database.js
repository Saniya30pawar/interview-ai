const mongoose = require("mongoose");


async function connectToDB() {

try{
    await  mongoose.connect(

      "mongodb://localhost:27017/interview-master"
    )

  console.log("Connected to Database")

}
catch(err){
    console.log("Error connecting to Database", err)
}
}


module.exports = connectToDB;