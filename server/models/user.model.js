import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt-nodejs';

let Schema = mongoose.Schema;
let secret = 'frontcore';

/**
 * User schema
 */
let userSchema = new Schema({
  "firstName": { type: String, required: true },
  "lastName": { type: String, required: true },
  "email": { type: String, required: true, unique: true },
  "username": { type: String, required: true, unique: true },
  "password": { type: String , required: true },
  "welcomeTo": { type: Boolean, required: true, default: true },
  "createdOn": { type: Date, require: true, default: Date.now },
  "updatedOn": { type: Date, require: true, default: Date.now }
});

userSchema.pre('save', (next) => {
  let _user = this;

  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, (error, salt) => {
      if (error) {
        return next(error);
      }

      bcrypt.hash(_user.password, salt, (error, hash) => {
        if (error) {
          return next(error);
        }
        _user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

userSchema.methods.hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync());
};

userSchema.methods.validatePassword = (userPassword, dbPassword, callback) => {
  return bcrypt.compareSync(userPassword, dbPassword);
};

userSchema.methods.generateToken = (user) => {
  return jwt.sign({
    id: user.id
  }, secret);
};

userSchema.methods.verifyToken = () => {

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
