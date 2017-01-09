import mongoose from 'mongoose';
let Schema = mongoose.Schema;

/**
 * Activities schema
 */
let activitiesSchema = new Schema({
  "isWelMsgTurnOff": { type: Boolean, default: false }
});

/**
 * Activities Mongoose model schema
 * @module Activities
 * @param {String} Activities - model name
 * @param {Object} activitiesSchema - schema object
 * @param {String} eslint - collection name
 * @returns {Object} activities Mongoose model
 */
module.exports = mongoose.model('Activities', activitiesSchema, 'activities');
