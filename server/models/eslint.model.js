import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let eslintSchema = new Schema({
  "category": String,
  "description": String,
  "name": String,
  "value": Boolean,
  "isFixable": Boolean,
  "isRecommended": Boolean
});

module.exports = mongoose.model('ESLint', eslintSchema, 'eslint');
