var app = angular.module('brewsBros', ['ngRoute', 'angularMoment']);

app.config(function($routeProvider, $httpProvider) {
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
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
    .otherwise({redirectTo: "/login"})
});
app.factory('featuresData', function ($http) {
  return{
    doCrossDomainGet: function() {
      return $http({
        url:'http://localhost:8080',
        method: 'GET'
      });
    }
  }
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
