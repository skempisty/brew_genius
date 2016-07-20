var express = require('express'),
    router = express.Router();

// Require fishes controller
var BeerCtrl = require('../controllers/beer'),
    UsersCtrl  = require('../controllers/users');


// GET CURRENT USER - WE'RE DOING THIS IN THE BROWSER THOUGH!
// apiRouter.get('/me', function(req, res) {
//   res.send(req.decoded);
// });

//||||||||||||||||||||||||||--
// USERS CRUD SERVICES
//||||||||||||||||||||||||||--
router.post('/login',                               UsersCtrl.userAuth);
router.get('/users',                                UsersCtrl.usersAll);
router.post('/users',                               UsersCtrl.userCreate);
router.get('/users/:id',     UsersCtrl.tokenVerify, UsersCtrl.userShow);
router.put('/users/:id',     UsersCtrl.tokenVerify, UsersCtrl.userUpdate);
router.delete('/users/:id',  UsersCtrl.tokenVerify, UsersCtrl.userDelete);

//||||||||||||||||||||||||||--
// BEER CRUD SERVICES
//||||||||||||||||||||||||||--
router.post('/beerSearch', BeerCtrl.beerIndex);
router.get('/beers', BeerCtrl.userBeers);

module.exports = router;
