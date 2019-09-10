"use strict"
const mongoose  = require("mongoose");
const Schema  = mongoose.Schema;
 
const MessageSchema = new Schema({
  user_id :String,
  message:String,
});
 

module.exports = mongoose.model("message",MessageSchema);