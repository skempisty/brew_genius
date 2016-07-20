var express = require('express'),
    router = express.Router();

var BeerCtrl = require('../controllers/beer'),
    UsersCtrl  = require('../controllers/users');

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
router.post('/createBeer', BeerCtrl.createBeer);
router.get('/beers', BeerCtrl.userBeers);
router.delete('/deleteBeer', BeerCtrl.deleteBeer);

module.exports = router;
