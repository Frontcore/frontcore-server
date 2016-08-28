import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let myProjectsSchema = new Schema({
  "name": String,
  "version": String,
  "description": String,
  "location": String
});

module.exports = mongoose.model('MyProjects', myProjectsSchema);
