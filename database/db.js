const mongoose = require("mongoose")

let db

const connectDB = async (DBURI) => {
  const options = {
    user: "rkt",
    pass: "rktmacbook",
    dbName: "schooldb",
    authSource: "schooldb"
  } 
  try {
    db = await mongoose.connect(DBURI, options)
    console.log("connected!!!")
  } catch (error) {
    throw error
  }
}

module.exports = {connectDB}
