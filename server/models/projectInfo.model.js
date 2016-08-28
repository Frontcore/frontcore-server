import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let projectInfoSchema = new Schema({
  "name": String,
  "version": String,
  "description": String,
  "location": String,
  "createdOn": { type: Date, default: Date.now }
});

module.exports = mongoose.model('ProjectInfo', projectInfoSchema);
