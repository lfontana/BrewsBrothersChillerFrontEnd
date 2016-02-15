app.controller('HomeController', function($scope, $http){
  // $http.get('https://chillerdb.herokuapp.com/dashboard').then(function(data){
  //   $scope.brews = data;
  //   console.log($scope.brews);
  // });
  $scope.brews = [
    {
    name: "My First Pale Ale",
    style: "Pale Ple",
    created: 1454673600,
    lastRun: 1454846400,
    favorite: false,
    schedule: [
        {
        time: 0,
        temp: 68
        },
        {
        time: 86400,
        temp: 65
        },
        {
        time: 604800,
        temp: 50
        }
      ]
    },
    {
    name: "My Second Pale Ale",
    style: "Pale Ple",
    created: 1454673600,
    lastRun: 1454846400,
    favorite: false,
    schedule: [
        {
        time: 0,
        temp: 68
        },
        {
        time: 86400,
        temp: 65
        },
        {
        time: 604800,
        temp: 50
        }
      ]
    },
    {
    name: "My First Stout",
    style: "Stout",
    created: 1454673600,
    lastRun: 1454846400,
    favorite: false,
    schedule: [
        {
        time: 0,
        temp: 68
        },
        {
        time: 86400,
        temp: 65
        },
        {
        time: 604800,
        temp: 50
        }
      ]
    },
  ]
  $scope.greeting = 'Welcome Brews Brothers';
  $scope.singleBrew = false;
  $scope.showBatch = function(batch) {
    $scope.singleBrew = true;
    $scope.batch = batch;
  }
  $scope.clear = function() {
    console.log("working");
    $scope.singleBrew = false;
  }
})
app.controller('LoginController', function($scope, $anchorScroll, $location){
  $scope.place = 'Login'
  $scope.toAbout = function() {
   $location.hash('about');
   $anchorScroll();
  }
})
app.controller('BatchController', function($scope, $stateParams){
  $scope.place = 'Batch View';
})
app.controller('NewBrewController', function($scope){
  $scope.place = 'New Brew'
})
