import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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


// note: the issue is your arrow function uses lexical this
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
userSchema.pre('save', function(next) { // Problem with => way
  let _user = this;

  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function(error, salt) {
      if (error) {
        return next(error);
      }

      bcrypt.hash(_user.password, salt, function(error, hash) {
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

userSchema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(error, isMatch) {
    if (error) {
      return callback(error);
    }
    callback(null, isMatch);
  });
};

userSchema.methods.generateToken = (user) => {
  return jwt.sign({
    id: user.id
  }, secret, {
    expiresIn: '8h'
  });
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
