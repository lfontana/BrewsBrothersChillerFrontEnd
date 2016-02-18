app.controller('mainController', function($scope, $http) {
  $http.get('https://chillerdb.herokuapp.com/dashboard').then(function(data){
    $scope.brews = data.data;
    console.log($scope.brews);
  });
  $scope.user_id = 1;
});
app.controller('HomeController', function($scope, $http){
  $scope.greeting = 'Welcome Brews Brothers';
  $scope.singleBrew = false;
  $scope.showBatch = function(batch) {
    $scope.singleBrew = true;
    $scope.batch = batch;
  };
  $scope.clear = function() {
    $scope.singleBrew = false;
  };
});
app.controller('LoginController', function($scope, $anchorScroll, $location, $http){
  $scope.place = 'Login'
  $scope.googleauth = function(){
    window.location='http://localhost:3000/auth/google'
  }
  $scope.toAbout = function() {
   $location.hash('about');
   $anchorScroll();
  }
})
// app.controller('BatchController', function($scope, $stateParams){
//   $scope.place = 'Batch View';
// })
app.controller('NewBrewController', function($scope, $http){
  clearBrew()
  $scope.place = 'New Brew'
  $scope.submitBatch = function(){
    $scope.brew.created = new Date();
    $scope.brew.lastRun = $scope.brew.created;
    $scope.brew.user_id = $scope.user_id;
    console.log($scope.brew);
    $scope.brews.push($scope.brew)
    // $http.post('https://chillerdb.herokuapp.com/batch', $scope.brew, config).then(successCallback, errorCallback);
    $http.post('localhost:3000/dashboard', $scope.brew).then(successCallback, errorCallback);
    clearBrew();
  }

  $scope.setStyle = function(style){
    var time = new Date();
    $scope.brew.style = style;
    $scope.brew.schedule = [];
    console.log($scope.brew);
    if (style === "Ale") {
      $scope.brew.styleNumber = 1;
      $scope.brew.schedule = [
            {
            time: time,
            temp: 68
            },
            {
            time: time,
            temp: 65
            },
            {
            time: time,
            temp: 50
            }
          ];
    } else if (style === "Stout") {
      $scope.brew.styleNumber = 2;
      $scope.brew.schedule = [
            {
            time: 0,
            temp: 68
            },
            {
            time: 76400,
            temp: 75
            },
            {
            time: 504800,
            temp: 60
            }
          ];
    } else if (style === "Porter") {
      $scope.brew.styleNumber = 3;
      $scope.brew.schedule = [
            {
            time: 0,
            temp: 58
            },
            {
            time: 96400,
            temp: 55
            },
            {
            time: 704800,
            temp: 60
            }
          ];
    } else if (style === "Lager") {
      $scope.brew.styleNumber = 4;
      $scope.brew.schedule = [
            {
            time: 0,
            temp: 58
            },
            {
            time: 96400,
            temp: 55
            },
            {
            time: 704800,
            temp: 60
            }
          ];
    };
  };
  function clearBrew(){
    $scope.brew = {};
    $scope.brew.style = "Style";
  };
});

app.controller('authController', function($scope, $http,$routeParams,$localStorage){
  //Get token out of header and set in local storage
  console.log($routeParams);
  $localStorage.token = $routeParams.token;
  
})
