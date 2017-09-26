'use strict';

var util = require('util');

module.exports = {
  testing: testing
};

function testing(req, res) {
  var name = req.swagger.params.name.value || 'tesing';
  var hello = util.format('Hi %s!', name)
  res.json({ "message": hello })
};
