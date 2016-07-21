(function() {
  "use strict";

  angular
    .module("brewApp")
    .controller("BrewsController", BrewsController);

  BrewsController.$inject = ["$http", "userDataService"];

  function BrewsController($http, userDataService) {
    var vm = this;
    vm.userDataService = userDataService;

    var userId = vm.userDataService.user.id;

    $http({
      url: `/api/beers/${userId}`,
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
