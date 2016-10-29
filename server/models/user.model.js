import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

let Schema = mongoose.Schema;

/**
 * User schema
 */
let userSchema = new Schema({
  "firstName": { type: String, required: true },
  "lastName": { type: String, required: true },
  "email": { type: String, required: true, unique: true },
  "username": { type: String, required: true, unique: true },
  "password": { type: String , required: true },
  "welcomeTo": { type: Boolean, required: true, default: false },
  "createdOn": { type: Date, require: true, default: Date.now },
  "updatedOn": { type: Date, require: true, default: Date.now },
  "token": { type: String, required: true }
});

userSchema.methods.hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync());
};

userSchema.methods.validatePassword = (password) => {
  return bcrypt.compareSync(password, this.password);
};

/**
 * User Mongoose model schema
 * @module User
 * @param {String} User - model name
 * @param {Object} userSchema - schema object
 * @param {String} eslint - collection name
 * @returns {Object} user Mongoose model
 */
module.exports = mongoose.model('User', userSchema, 'user');
