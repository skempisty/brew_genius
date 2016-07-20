(function() {
  "use strict";

  angular
      .module("brewApp")
      .controller("MainController", MainController);

  MainController.$inject = ["$state", "userDataService", "$log", "authService", "$http"];

  function MainController($state, userDataService, $log, authService, $http) {
    var vm = this;

    vm.userService = userDataService;
    vm.logout      = authService.logout;
    vm.isLoggedIn  = authService.isLoggedIn;

    vm.$state = $state;

    vm.searchBeer = function(query) {
      $http({
        url: `/api/beerSearch`,
        method: 'POST',
        data: {query: query}
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
    };
  }

})();
