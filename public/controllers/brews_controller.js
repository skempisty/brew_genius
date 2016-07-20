(function() {
  "use strict";

  angular
    .module("brewApp")
    .controller("BrewsController", BrewsController);

  BrewsController.$inject = ["$http", "userDataService"];

  function BrewsController($http, userDataService) {
    var vm = this;

    $http({
      url: '/api/beers',
      method: 'GET'
    })
    .then(function(response) {
      if (response.data) {
        vm.beerArr = response.data;
      } else {
        vm.beerArr = [{name: "No Results Found <(-.-<)"}];
        console.log(vm.beerArr);
      }
    }, function(err) {
      console.log(err);
    });



  }

})();
