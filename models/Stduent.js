const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
  name: {type:String, required:true},
  age: {type:Number, required:true, min:18, max:65},
  fees: {type:mongoose.Decimal128, required:true, validate: v=>
    v >= 5500.059},
  hobbies: {type: Array},
  isActive: {type: Boolean},
  comments: [{value:{type:String}, publish: {type:Date, default:Date.now}}],
  join:{type:Date, default:Date.now}
})

const studentModel = new mongoose.model("student", studentSchema) 

const createDoc = async(nm, ag, fe, ho, ia, comm)=>{
  const studentDoc = new studentModel({
    name: nm,
    age: ag,
    fees: fe,
    hobbies: ho,
    isActive: ia,
    comments: comm,
  })
  
  try {
    const result = await studentDoc.save()
    console.log(result)
  } catch (error) {
    throw error
  }
}

async function getAllDoc() {
  try {
    const result = await studentModel.find({})
    console.log(result)
  } catch (error) {
    throw error
  }
}

async function update() {
  try {
    // result = await studentModel.findByIdAndUpdate({_id:"65b0fd5214654954ce2665d7"}, {$set: {name:"lkt"}}, {returnDocument: "after"})
    result = await studentModel.updateOne({age: 10}, {$set: {name:"htk"}}, {upsert:true})

    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

async function deleteDoc() {
  try {
    const result = await studentModel.findByIdAndDelete("65b1082e541a7cf2d1aab69a")
    console.log(result);
  } catch (error) {
    console.log(error)
  }
}

module.exports = {createDoc, getAllDoc, update, deleteDoc}