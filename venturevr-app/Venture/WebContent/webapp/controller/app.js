var home = angular.module('home', [
  'ngRoute',
  'usersControllers'
]);

home.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/user', {
    templateUrl: 'webapp/view/home.html',
    controller: 'UserController'
  }).
  when('/details/:itemId', {
    templateUrl: 'webapp/view/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/user'
  })
}]);

