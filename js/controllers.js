app.controller('HomeController', function($scope){
  $scope.greeting = 'Welcome Brews Brothers'
})
app.controller('LoginController', function($scope){
  $scope.place = 'login'
})
app.controller('BatchController', function($scope){
  $scope.place = 'Batch View'
})
app.controller('NewBrewController', function($scope){
  $scope.place = 'New Brew'
})
