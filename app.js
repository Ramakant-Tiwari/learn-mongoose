const express = require("express")
  
const database = require("./database/db")
const defaultRoutes = require("./routes/default")
const studentModel = require("./models/Stduent")

const app = express()
const port = process.env.PORT || 3000
// const DBURI = process.env.DATABASE_URL || "mongodb://rkt:rktmacbook@localhost:27017/schooldb?authSource=schooldb"
const DBURI = process.env.DATABASE_URL || "mongodb://localhost:27017/"

// studentModel.createDoc("pkt", 20, 12342, ["reading novel", "coding", "browsing internet"], false, {value:"nice"})

// studentModel.getAllDoc()
// studentModel.update()
// studentModel.deleteDoc()
studentModel.getAllDoc()

app.use("/", defaultRoutes)

database.connectDB(DBURI)
  .then(()=>{
    app.listen(port, ()=>{console.log("http://localhost:"+port)})
  })