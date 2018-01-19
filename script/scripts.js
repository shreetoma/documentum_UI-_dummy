var app = angular.module('myApp',['ngStorage','ngMessages']);
app.controller('myController',function($scope,$location, $localStorage){
    $scope.signIn= function(){
        
          $localStorage.uname=$scope.user;
            location.href="/homePage.html";
        //$location.url=('/homePage.html');
            //$cookies.get('element3');
        
       
    }
        
})
app.controller('myController2',function($scope, $localStorage, $window){
   $scope.userName =$localStorage.uname;
})

