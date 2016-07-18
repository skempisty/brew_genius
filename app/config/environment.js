var _ = require('lodash');

var localEnvVars = {
  TITLE:      "Brew Genius",
  SAFE_TITLE: 'brew_genius',
  superSecret: "whatever"
};


// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
