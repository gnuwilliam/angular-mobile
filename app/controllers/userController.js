App.controller('UserController', function ($scope, User) {
  $scope.users = User.query();
});