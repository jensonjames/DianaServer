'use strict';

var Regex = require("regex");
var mongoose = require('mongoose'),
Task2 = mongoose.model('channel');


exports.regchannel = function(req, res) {
  console.log(req.body);
  var val = req.body.input;

  var new_task = new Task2(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });


};


exports.listchannel = function(req, res) {
  Task2.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });

};
