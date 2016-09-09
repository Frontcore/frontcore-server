import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let rulesSchema = new Schema({
  "rule": { type: String, required: true },
  "description": { type: String, required: true },
  "recommended": { type: Boolean, required: true },
  "fixable": { type: Boolean, required: true }
});

let eslintSchema = new Schema({
  "category": { type: String, required: true },
  "description": { type: String , required: true },
  "rules": [ rulesSchema ]
});

module.exports = mongoose.model('ESLint', eslintSchema, 'eslint');
