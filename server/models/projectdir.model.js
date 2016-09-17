import mongoose from 'mongoose';
let Schema = mongoose.Schema;

/**
 * Extended schema for project sub-directory
 */
let childrenSchema = new Schema({
  "projPath": String,
  "name": String,
  "isFile": Boolean,
  "size": Number,
  "extension": String,
  "children": Array
});

/**
 * Project directory schema
 */
let projDirSchema = new Schema({
  "projPath": String,
  "name": String,
  "isFile": Boolean,
  "children": [ childrenSchema ]
});

/**
 * Project directory Mongoose model schema
 * @module ProjectDir
 * @param {String} ProjectDir - model name
 * @param {Object} projDirSchema - schema object
 * @param {String} projectdir - collection name
 * @returns {Object} ProjectDir Mongoose model
 */
module.exports = mongoose.model('ProjectDir', projDirSchema, 'projectdir');
