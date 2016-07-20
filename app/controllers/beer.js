var Beer = require("../models/beer");

var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb(process.env.BREW_API_KEY);

function beerIndex(req, res, next) {
  var query = req.body.query;

  brewdb.search.beers({ q: query }, function(err, data) {
    if(err) console.log(err);
    res.json(data);
  });
}

function userBeers(req, res, next) {
  Beer.find({}, function(err, beers) {
    if(err) res.send(err);
    res.json(beers);
  });
}

function createBeer(req, res, next) {
  var beer       = new Beer();   // create a new instance of the Beer model

  beer.id           = req.body.beer.id;
  beer.name         = req.body.beer.name;
  beer.kind         = req.body.beer.style.name;
  beer.abv          = req.body.beer.abv;
  beer.ibu          = req.body.beer.ibu;
  if(req.body.beer.labels) {
    beer.labelUrl   = req.body.beer.labels.medium;
  }
  beer.description  = req.body.beer.description;

  beer.save(function(err, savedBeer) {
    if (err) {
      res.send(err)
    }
    res.json(savedBeer);
  });
}

var deleteBeer = function(req, res) {

  var id = req.params.id;

  Beer.remove({"_id" : id}, function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Crushed that beer!' });
  });
}

//||||||||||||||||||||||||||--
//  GET FISH
//||||||||||||||||||||||||||--
var fishShow = function(req, res, next){
  var id = req.params.id;

  Fish.findById(id, function(err, fish){
    if (err) {
      res.send(err);
    }

    // return that fish as JSON
    res.json(fish);
  });
};

//||||||||||||||||||||||||||--
// GET FISHES
//||||||||||||||||||||||||||--
var fishIndex = function(req, res) {
  Fish.find({}, function(err, fishes) {
    if (err) {
      res.send(err);
    }

    // return the fishes
    res.json(fishes);
  });
}


//||||||||||||||||||||||||||--
// UPDATE FISH
//||||||||||||||||||||||||||--
var fishUpdate = function(req, res) {
  var id = req.params.id;

  Fish.findById(id, function(err, fish) {

    if (err) {
      res.send(err);
    }

    // set the new fish information if it exists in the request
    if (req.body.name) fish.name = req.body.name;
    if (req.body.category) fish.category = req.body.category;

    // save the fish
    fish.save(function(err, updatedFish) {
      if (err) {
        res.send(err);
      }
      // log a message
      console.log("Oh, that's the fish!");
      // return the fish
      res.json(updatedFish);
    });
  });
}

// Export the function/s as JSON
module.exports = {
  beerIndex: beerIndex,
  userBeers: userBeers,
  createBeer: createBeer,
  deleteBeer: deleteBeer
}
