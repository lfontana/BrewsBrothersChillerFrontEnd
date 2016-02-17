var app = angular.module('brewsBros', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/login',{
        templateUrl: 'partials/login.html',
        controller: 'LoginController'
      })
      .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      // .when('/batch', {
      //   templateUrl: 'partials/batch.html',
      //   controller: 'BatchController'
      // })
      .when('/newbrew', {
        templateUrl: 'partials/newbrew.html',
        controller: 'NewBrewController'
      })
      .otherwise({redirectTo: "/login"});
});

app.directive('navBar', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/navbar.html'
  };
});

app.directive('batch', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/batch.html'
  };
});
