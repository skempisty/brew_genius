(function() {
  "use strict";

  angular
    .module("brewApp")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "/templates/home.html",
        controller: "MainController",
        controllerAs: "vm"
      })
      .state("brewSearch", {
        url: "/findBrews",
        templateUrl:  "/templates/brewSearch.html",
        controller: "MainController",
        controllerAs: "vm"
      })
      .state("register", {
        url: "/register",
        templateUrl: "/templates/register.html",
        controller: "UsersController",
        controllerAs: "vm"
      });

    $urlRouterProvider.otherwise("/");
  }

})();
