var userControllers = angular.module('usersControllers', ['ngAnimate']);

userControllers.controller('UserController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://localhost:8080/api/videos').success(function(video_data) {
    $scope.user = video_data;
    $scope.userOrder = 'title';
  });
}]);


userControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('http://localhost:8080/api/users').success(function(user_data) {
    $scope.user = user_data;
    $scope.selectedItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.user.length-1;
    }

    if ($routeParams.itemId < $scope.user.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);


