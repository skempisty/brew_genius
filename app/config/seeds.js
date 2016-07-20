var mongoose = require('./database');

var Beer = require('../models/beer'),
    User = require('../models/user');

Beer.remove({}, function(err) {
  if (err) console.log(err);

  User.remove({}, function(err) {
    if (err) console.log(err);
    console.log("Users and beers cleansed!");
  });
});
