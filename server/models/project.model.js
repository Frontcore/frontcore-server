import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let _isStringEmpty = [(val) => {
  let testVal = val.trim();
  return (testVal.length > 0);
}, '{PATH} cannot be empty'];

/**
 * Project information schema
 */
let projectInfoSchema = new Schema({
  "fieldname": {
    type: String,
    default: "config",
    required: true
  },
  "originalname": {
    type: String,
    default: "frontcore.json",
    required: true
  },
  "encoding": String,
  "mimetype": {
    type: String,
    default: "application/json",
    required: true
  },
  "destination": String,
  "filename": String,
  "path": String,
  "size": Number,
  "name": {
    type: String,
    required: true,
    validate: _isStringEmpty
  },
  "version": {
    type: String,
    default: "0.0.1",
    required: true,
    validate: _isStringEmpty
  },
  "description": String,
  "location": {
    type: String,
    required: true,
    validate: _isStringEmpty
  },
  "createdOn": { type: Date, default: Date.now }
});

/**
 * Project information Mongoose model schema
 * @module ProjectInfo
 * @param {String} ProjectInfo - model name
 * @param {Object} projectInfoSchema - schema object
 * @param {String} projectinfo - collection name
 * @returns {Object} Project information Mongoose model
 */
module.exports = mongoose.model('ProjectInfo', projectInfoSchema, 'projectinfo');
