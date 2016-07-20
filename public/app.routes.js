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
        controller: "SearchController",
        controllerAs: "vm"
      })
      .state("register", {
        url: "/register",
        templateUrl: "/templates/register.html",
        controller: "UsersController",
        controllerAs: "vm"
      })
      .state("login", {
        url: "/login",
        templateUrl: "/templates/login.html",
        controller: "LoginController",
        controllerAs: "vm"
      })
      .state("myBrews", {
        url: "/brews",
        templateUrl: "/templates/myBrews.html",
        controller: "BrewsController",
        controllerAs: "vm"
      });

    $urlRouterProvider.otherwise("/");
  }

})();
