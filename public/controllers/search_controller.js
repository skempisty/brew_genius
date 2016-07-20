(function() {
  "use strict";

  angular
      .module("brewApp")
      .controller("SearchController", SearchController);

  SearchController.$inject = ["$http"];

  function SearchController($http) {
    var vm = this;

    var myBeerIdList = [];

// Populates an array (myBeerIdList) with the Ids of saved beers
// used to disallow saving duplicate beers through ng-show
    $http({
      url: '/api/beers',
      method: 'GET',
    })
    .then(function(response) {
      if(response.data) {
        var data = response.data;
        data.forEach(function(savedBeer) {
          if(savedBeer.id) myBeerIdList.push(savedBeer.id);
        });
      }
    }, function(err) {
      console.log(err);
    });
/////////////////////////////

// Called when search is pressed
    vm.searchBeer = function(query) {
      $http({
        url: '/api/beerSearch',
        method: 'POST',
        data: {query: query}
      })
      .then(function(response) {
        if (response.data) {
          vm.beerArr = response.data;
        } else {
          vm.beerArr = [{name: "No Results Found <(-.-<)"}];
        }
      }, function(err) {
        console.log(err);
      });
    };

// Called when create beer is pressed
    vm.createBeer = function(beer) {
      $http({
        url: '/api/createBeer',
        method: 'POST',
        data: {beer: beer}
      })
      .then(function(response) {
        myBeerIdList.push(response.data.id);
      }, function(err) {
        console.log(err);
      });
    };

// Called on ng-shows which are on each add beer button
    vm.beerCheck = function(beerId) {
      if(myBeerIdList.indexOf(beerId) > -1) {
        return false;
      } else {
        return true;
      }
    };
  }
})();
