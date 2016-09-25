import mongoose from 'mongoose';
let Schema = mongoose.Schema;

/**
 * User schema
 */
let userSchema = new Schema({
  "firstname": { type: String, required: true },
  "lastname": { type: String, required: true },
  "email": { type: String, required: true, unique: true },
  "username": { type: String, required: true, unique: true },
  "password": { type: String , required: true },
  "isAdmin": {type: Boolean, required: true },
  "createdOn": { type: Date, default: Date.now },
  "updatedOn": { type: Date, default: Date.now }
});

/**
 * User Mongoose model schema
 * @module User
 * @param {String} User - model name
 * @param {Object} userSchema - schema object
 * @param {String} eslint - collection name
 * @returns {Object} user Mongoose model
 */
module.exports = mongoose.model('User', userSchema, 'user');
