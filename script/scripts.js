var app = angular.module('myApp',['ngStorage','ngMessages','ui.router']);
app.controller('myController',function($scope,$location, $localStorage,$http){
    $scope.signIn= function(){
        //myFunction();
        //alert("hi");
          $localStorage.uname=$scope.credentials.User;
           // location.href="/homePage.html";
      $http({
        url:'assets/json/credentials.JSON',
        method:'GET',
        headers:{'Content-Type':'application/json'}
        
    })
        
                .then(function (myData) {
                   console.log(myData.data);
          for(var i=0;i<myData.data.length;i++)
              {
                  if(myData.data[i].User==$scope.credentials.User && myData.data[i].Password==$scope.credentials.Password ){
                     location.href="/homePage.html"; 
                      break;
                  }
                  else{
                      alert("Wrong Credentials");
                  }
              }
          
                })              

    }
       
               
        
})
app.controller('myController2',function($scope, $localStorage, $window,$http){
   $scope.userName =$localStorage.uname;
    if($localStorage.uname==""){
        location.href="/loginPage.html";
    }
    $scope.logOut= function(){
        $localStorage.uname="";
        location.href="/loginPage.html" ;
        
    }
    
     $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
    myFnc();
    function myFnc(){
        
        
    $http({
        url:'assets/json/data.JSON',
        method:'GET',
        headers:{'Content-Type':'application/json'}
        
    })
        
                .then(function (jsonData) {
                   console.log(jsonData);
        $scope.table=jsonData.data;
                })              

    }
    
    
    
})
app.config(function($stateProvider, $urlRouterProvider){
     $urlRouterProvider.otherwise('/home-view');
    $stateProvider
    .state('home-view',{
           url:'/home-view',
        templateUrl: 'view/home-page-view.html'
        
    })
    .state('search-view',{
           url:'/search-view',
        templateUrl: 'view/search-view.html'
        
    })
    
    
})
