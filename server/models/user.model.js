import mongoose from 'mongoose';
let Schema = mongoose.Schema;

/**
 * User schema
 */
let userSchema = new Schema({
  "username": { type: String, required: true },
  "password": { type: String , required: true }
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
