import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let projectInfoSchema = new Schema({
  "fieldname": { type: String, default: "config" },
  "originalname": { type: String, default: "frontcore.json" },
  "encoding": String,
  "mimetype": { type: String, default: "application/json" },
  "destination": String,
  "filename": String,
  "path": String,
  "size": Number,
  "name": String,
  "version": { type: String, default: "0.0.1" },
  "description": String,
  "location": String,
  "createdOn": { type: Date, default: Date.now }
});

module.exports = mongoose.model('ProjectInfo', projectInfoSchema, 'projectinfo');
