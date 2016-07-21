(function() {
  "use strict";

  angular
      .module("brewApp")
      .controller("MainController", MainController);

  MainController.$inject = ["$state", "userDataService", "$log", "authService", "$http"];

  function MainController($state, userDataService, $log, authService, $http) {
    var vm = this;

    vm.logout      = authService.logout;
    vm.isLoggedIn  = authService.isLoggedIn;
    vm.$state      = $state;
    vm.userDataService = userDataService;

    // console.log("MAIN CTRL USER OBJ", vm.userDataService.user.name);

  }
})();
