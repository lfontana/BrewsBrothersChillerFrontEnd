app.controller('HomeController', function($scope, $http){
  $http.get('http://thebankjob.herokuapp.com/data').then(function(data){
    $scope.comments=data.data.posts;
    console.log($scope.comments);
  });
  $scope.greeting = 'Welcome Brews Brothers'
})
app.controller('LoginController', function($scope, $anchorScroll, $location){
  $scope.place = 'Login'
  $scope.toAbout = function() {
   $location.hash('about');
   $anchorScroll();
  }
})
app.controller('BatchController', function($scope){
  $scope.place = 'Batch View'
})
app.controller('NewBrewController', function($scope){
  $scope.place = 'New Brew'
})
