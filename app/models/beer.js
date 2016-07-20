// Require mongoose to create a model.
var mongoose = require('mongoose'),
    User     = require('./user.js');

// Create a schema of your model
var beerSchema = new mongoose.Schema({
  id:             {type: String, unique: true},
  name:           String,
  kind:           String,
  abv:            String,
  ibu:            String,
  labelUrl:       String,
  description:    String,
  user:       { type: mongoose.Schema.Types.ObjectId, ref:'User' }
});

// Create the model using your schema.
var Beer = mongoose.model('Beer', beerSchema);

// Export the model of the Beer.
module.exports = Beer;
