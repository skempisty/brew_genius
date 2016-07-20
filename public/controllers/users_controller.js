(function() {
  angular.module('brewApp')
         .controller('UsersController', UsersController);

  UsersController.$inject = ['$state', 'authService', 'authToken', 'userDataService', '$log'];

  function UsersController($state, authService, authToken, userDataService, $log) {
    var vm = this;

    vm.currentUser = userDataService.user;
    // attaching functions to controller
    vm.createUser = createUser;


    // defining function declarations
    function createUser() {
      vm.message = '';
      // use the create function in the userService
      userDataService.create(vm.userData)
        .success(function(data) {
          authToken.setToken(data.token);
          userDataService.user = data.user;
        });

        $state.go('home');
    };
  };
})();
