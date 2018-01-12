var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider) 
	{
    $routeProvider
    .when("/", {
        templateUrl : "login.html"
    })
    .when("/home", {
        templateUrl : "home.html"
    })
    .otherwise( {
        templateUrl : "login.html"
    })
});

app.controller('myCtrl', function($scope, $http, $location) {

$scope.submit = function() {
  var stat="false";
  
angular.forEach($scope.mydata, function(item){
   if((item.email==$scope.username) && (item.Password==$scope.password))
   {
     stat="true";
	   $location.path('/home');
   }
  
});

if(stat=="false")
alert("FAILURE");

};
  

 
 
$scope.mydata;


  $http.post('data.json')
  .then(function(response) {
      $scope.mydata = response.data;
  });
  
  
  
});
