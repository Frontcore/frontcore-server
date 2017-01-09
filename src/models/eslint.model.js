import mongoose from 'mongoose';
let Schema = mongoose.Schema;

/**
 * Extended schema for rules field
 */
let rulesSchema = new Schema({
  "rule": { type: String, required: true },
  "description": { type: String, required: true },
  "recommended": { type: Boolean, required: true },
  "fixable": { type: Boolean, required: true }
});

/**
 * ESLint schema
 */
let eslintSchema = new Schema({
  "category": { type: String, required: true },
  "description": { type: String , required: true },
  "rules": [ rulesSchema ]
});

/**
 * ESLint Mongoose model schema
 * @module ESLint
 * @param {String} ESLint - model name
 * @param {Object} eslintSchema - schema object
 * @param {String} eslint - collection name
 * @returns {Object} ESLint Mongoose model
 */
module.exports = mongoose.model('ESLint', eslintSchema, 'eslint');
