'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ciservice = new Schema({
  name: {
    type: String,
      required: 'Kindly enter the name ',
  },
  accessKey: {
    type: String,
      required: 'Kindly enter the value to be blacklisted',
  },
  secretKey: {
    type: String,
      required: 'Kindly enter the value to be blacklisted',
  }
});





module.exports = mongoose.model('ciservice', ciservice);
//module.exports = mongoose.model('diag_registration', diag_registration);
